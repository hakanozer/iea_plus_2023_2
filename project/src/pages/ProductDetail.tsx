import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { singleProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ImageGallery from "react-image-gallery";

function ProductDetail() {

  const navigate = useNavigate() 
  const [item, setItem] = useState<IProduct>()  
  const [imageArr, setImageArr] = useState<any[]>([])

  const params = useParams()
  useEffect(() => {
    const id = params.id
    if (id) {
        singleProduct(id).then(res => {
            setItem(res.data)
            parseImage(res.data.images)
        }).catch(err => {
            navigate("/home", {replace: true})
        })
    }
  }, [])

  const parseImage = (arr:String[]) => {
    var imageArr:any[] = []
    arr.forEach((item, index) => {
        const obj = {
            original: item,
            thumbnail: item
        }
        imageArr.push(obj)
    })
    setImageArr(imageArr)
  }

  return (
    <>
    { item &&
        <>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <h2>{item.title}</h2>
                    <h3><span className="badge bg-danger">{item.price}₺</span></h3>
                    <span className="badge rounded-pill text-bg-secondary">{item.category}</span>
                    <p className="lead">{item.description}</p>

                </div>
                <div className='col-sm-6'>
                    <ImageGallery 
                        items={imageArr} 
                        useBrowserFullscreen={false}
                        showPlayButton={false}
                    />
                </div>
            </div>
        </>
    }
    </>
  )
}

export default ProductDetail