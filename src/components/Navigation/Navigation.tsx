import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'center'}}>
      <NavLink style={{marginRight: '10px'}} to="/">Main</NavLink>
      <NavLink style={{marginRight: '10px'}} to="/products">Products</NavLink>
      <NavLink style={{marginRight: '10px'}} to="/about">About</NavLink>
      <NavLink style={{marginRight: '10px'}} to="/carts">Carts</NavLink>
    </nav>
  );
};

export default Navigation;