import React from 'react';
import { useAppSelector } from '../redux/hooks';

const Navbar = () => {
  const cartDetails=useAppSelector(state=>state.productDetails.cartDetails);
  const totalprice=useAppSelector(state=>state.productDetails.totalprice)
  return (
    <div>
      <div style={navbarStyle}>
          <div>
            <button>cart Items:{cartDetails.length}</button>
          </div>
          <div>
            <button>Total price:{totalprice}</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
const navbarStyle={
  height:"70px",
  width:"100%",
  backgroundColor:"black",
  color:"white",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px"
}