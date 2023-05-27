import useProducts from "../../hooks/productsFetch";
import { ModalContext } from "../../context/ModalContext";
import { useContext, useEffect } from "react";
import { IProduct } from "../../models";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Loading from "../../components/Loader/Loader";
import Product from "../../components/Product/Product";
import Modal from "../../components/Modal/Modal";
import CreateProduct from "../../components/CreateProduct/CreateProduct";

const ProductPage = () => {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [closeModal]);

  const onCreateProd = (prod: IProduct) => {
    closeModal();
    addProduct(prod);
  };

  const handleModal = () => {
    modal ? closeModal() : openModal();
  };

  return (
    <>
      {error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div
                style={{
                  width: "300px",
                  border: "4px solid",
                  margin: "4px auto",
                  padding: "2px",
                  textAlign: "center",
                }}
              >
                Products
              </div>
              <button type="button" onClick={handleModal}>
                Create new product
              </button>
              <div
                style={{
                  display: "grid",
                  justifyItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  gridGap: "4px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  marginBottom: "20px",
                }}
              >
                <Product product={products} />
              </div>
            </>
          )}
        </>
      )}
      {modal && (
        <Modal title="Create new product" onClose={handleModal}>
          <CreateProduct onCreate={onCreateProd} />
        </Modal>
      )}
    </>
  );
};

export default ProductPage;