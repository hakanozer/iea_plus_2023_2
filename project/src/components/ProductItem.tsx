import React from 'react'
import { IProduct } from '../models/IProducts'

function ProductItem(props: {item: IProduct}) {
  return (
    <div className='col-sm-4 mb-3'>
        <div className="card">
            <img src={props.item.thumbnail} height={270} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text" style={{height: 70}}>{props.item.description}</p>
                <div className='d-flex justify-content-between'>
                    <a href="#" className="btn btn-primary ">Detail</a>
                    <div className='text-end'>{props.item.price}₺</div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductItem