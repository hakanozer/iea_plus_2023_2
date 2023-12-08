import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { singleProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ImageGallery from "react-image-gallery";
import { Helmet } from 'react-helmet';
import { addRemoveLike, likeControl } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../useRedux/store';
import { LikesAction } from '../useRedux/actions/LikesAction';
import { LikesType } from '../useRedux/types/LikesType';

function ProductDetail() {

  // for redux
  const likesArr = useSelector( (item:StateType) => item.LikesReducer )
  const dispatch = useDispatch()

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
            const statusLike = likeControl(res.data.id)
            setIsLike(statusLike)
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

  // likes control
  const [isLike, setIsLike] = useState(false)
  const fncLike = () => {
    const status = !isLike
    setIsLike(status)
    addRemoveLike(item!.id)
    
    const sendItem: LikesAction = {
        type: LikesType.LIKE_ADD,
        payload: []
    }
    dispatch(sendItem)
  }

  return (
    <>
    { item &&
        <>
            <Helmet>
                <title>{item.title}</title>
                <meta name="description" content={item.description}/>
            </Helmet>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <div role='button' onClick={ fncLike } style={{fontSize: 35, float: 'right', }}>
                        <i className={ isLike === true ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart' } style={{color: 'red'}}></i>
                    </div>
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