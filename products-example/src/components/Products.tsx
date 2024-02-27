import React,{useEffect} from 'react';
import { useAppDispatch,useAppSelector } from '../redux/hooks';
import { fetchProducts } from '../redux/ProdcutsSlice';
import { wrap } from 'module';
import { addToCart,removeFromCart } from '../redux/ProdcutsSlice';

const Products = () => {
  const products=useAppSelector(state=>state.productDetails.products);;
  
  const dispatch=useAppDispatch();
  useEffect(()=>{
     dispatch(fetchProducts())
  },[])
  return (
    <div>
      <div style={imgStyle}>
        {products.map((product)=>(
          <div key={product.id}>
            <img style={{height:"200px"}} src={product.image} alt="" />
            <br/><br/>
            <h3>{product.title}</h3>
            <h3>{product.price}/-</h3>
            <button onClick={()=>{
              dispatch(addToCart(product))
            }}>Add</button>
            <button onClick={()=>{
              dispatch(removeFromCart(product.id))
            }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products;
const imgStyle:React.CSSProperties={
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"space-between",
  gap:"20px"
}