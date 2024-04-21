import { useDispatch, useSelector } from "react-redux";
import "./ProductCard.css";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartState.cartList)
  const {id,name, price, image} = product;

  //To check if the product is alredy in cart or not/ useEffect and useState
  const [inCart, setinCart] = useState(false)

  useEffect(()=> {
    const productInCart = cartList.find(item => item.id === id)
    if(productInCart){
      setinCart(true)
    }else{
      setinCart(false)
    }

  }, [cartList, id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        {inCart ? (        <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>
): (        <button onClick={() => dispatch(add(product))}>Add To Cart</button>
)}

      </div>
    </div>
  )
}
