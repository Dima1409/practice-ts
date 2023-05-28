import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "center", margin: '10px 0' }}>
          <NavLink style={{ marginRight: "10px", border: '1px solid', padding: '4px', backgroundColor: 'teal', borderRadius: '8px', textDecoration: 'none', color: 'white' }} to="/">
            Main
          </NavLink>
          <NavLink style={{ marginRight: "10px", border: '1px solid', padding: '4px', backgroundColor: 'teal', borderRadius: '8px', textDecoration: 'none', color: 'white' }} to="/products">
            Products
          </NavLink>
          <NavLink style={{ marginRight: "10px", border: '1px solid', padding: '4px', backgroundColor: 'teal', borderRadius: '8px', textDecoration: 'none', color: 'white' }} to="/about">
            About
          </NavLink>
          <NavLink  style={{ border: '1px solid', padding: '4px', backgroundColor: 'teal', borderRadius: '8px', textDecoration: 'none', color: 'white' }} to="/carts">
            Carts
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
