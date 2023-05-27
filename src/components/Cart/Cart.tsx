import { ICart } from "../../models";

interface CartProps {
  cart: ICart[];
}

const Cart = (props: CartProps) => {
  return (
    <>
    <ul style={{padding: 0}}>
      {props.cart.map((elem) => {
        return (
          <li key={elem.id} style={{width: '280px', border: '1px solid', listStyle: 'none', padding: '4px'}} >
            <p>
              <span style={{ fontWeight: 700 }}>User ID:</span>
              {elem.userId}
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Elem ID:</span> {elem.id}
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Date:</span>{" "}
              {elem.date.toString().slice(0, 10)}
            </p>
            <div>
              <div style={{ fontWeight: 700 }}>Products:</div>{" "}
              {elem.products.map((elem, index)=>{
                return (
                  <div key={index}>{elem.quantity}</div>
                )
              })}
            </div>
          </li>
        );
      })}
    </ul>
      
    </>
  );
};

export default Cart;
