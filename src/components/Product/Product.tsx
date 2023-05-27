import { IProduct } from "../../models";
import { useState } from "react";

interface ProductProps {
  product: IProduct[];
}

const Product = (props: ProductProps) => {
  const [showMap, setShowMap] = useState<{ [key: number]: boolean }>({});
  const handleShow = (productId: number) => {
    setShowMap((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  return (
    <>
      {props.product.map((elem) => {
        const show = showMap[elem.id] || false;
        return (
          <div
            style={{
              position: "relative",
              width: "280px",
              border: "1px solid",
            }}
            key={elem.id}
          >
            <p style={{ fontWeight: "normal" }}>
              <span style={{ fontWeight: "bold" }}>Title:</span> {elem.title}
            </p>
            <p style={{ fontWeight: "normal" }}>
              <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
              {elem.category}
            </p>
            <p style={{ fontWeight: "normal" }}>
              <span style={{ fontWeight: "bold" }}>Price:</span> {elem.price}
            </p>
          
              <p style={{ fontWeight: "normal" }}>
                <span style={{ fontWeight: "bold" }}>Rating:</span>{" "}
                {elem?.rating?.rate || 0}
              </p>
        

            <img
              style={{ margin: "0 auto", display: "block" }}
              src={elem.image}
              alt={elem.title}
              width={"150px"}
            ></img>
            <button
              style={{
                backgroundColor: show ? "grey" : "yellow",
                position: "absolute",
                right: 0,
                bottom: 0,
                margin: 0,
                display: "block",
                zIndex: 2,
              }}
              onClick={() => handleShow(elem.id)}
            >
              {!show ? "show more" : "hide"}
            </button>
            {show && (
              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "14px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "lightgrey",
                  position: "absolute",
                  opacity: 0.95,
                  bottom: 0,
                  left: 0,
                  margin: 0,
                }}
              >
                <span style={{ fontWeight: "bold", padding: "10px" }}>
                  Description:
                </span>{" "}
                {elem.description}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Product;
