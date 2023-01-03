// Utils
import { Trash, FilePlus } from "phosphor-react";
import { IFormData, IUserInterface } from "../../utils/types";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";

// Components
import useCollection from "../../hooks/useCollection";
import DinamicForm from "../../components/DinamicForm";
import Modal from "../../components/Modal";
import { useLocation } from "react-router-dom";
import AuthProvider from "../../auth/login-provider";

function ProductsForm() {
  const [deletePressed, setDeletePressed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState<IFormData[]>([]);
  const [user, setUser] = useState<IUserInterface[]>([]);

  const location = useLocation();

  const { handleDelDoc, handleCreateDoc, handleGetDocData } = useCollection({
    collectionName: location.pathname === "/admin/cards" ? "cards" : "products",
    database: db,
  });

  useEffect(() => {
    (async () => {
      setProducts((await handleGetDocData()) as unknown as IFormData[]);
    })();
  }, []);

  const handleDeleteChangePageButton = () => {
    if (!deletePressed) {
      setDeletePressed(true);
      return;
    }
    setDeletePressed(false);
  };

  const createProduct = (data: IFormData) => {
    handleCreateDoc(data);
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          deleteButton={() => {
            handleDelDoc(productId);
            setIsModalVisible(false);
          }}
          onClose={() => setIsModalVisible(false)}
        />
      )}
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700  ">
        <div className="flex flex-col justify-center items-center rounded-3xl bg-slate-50 w-3/5 h-4/5 max-h-2xl overflow-y-scroll">
          {!deletePressed ? (
            <>
              <div className="w-3/5 flex items-center justify-around">
                <h1 className="text-3xl my-4 font-bold text-gray-700">
                  Cadastro de Produtos
                </h1>
                <button onClick={handleDeleteChangePageButton}>
                  <Trash size={28} />
                </button>
              </div>
              <DinamicForm
                formComponent={
                  location.pathname === "/admin/cards" ? "cartao" : "produtos"
                }
                onSend={(data) => createProduct(data)}
              />
              {/* FORM */}
            </>
          ) : (
            <>
              <div className="flex flex-col w-full h-full items-center justify-start ">
                <div className="w-3/5 flex items-center justify-between mt-8">
                  <h1 className="text-3xl my-4 font-bold text-gray-700">
                    Deletar Produto
                  </h1>
                  <button onClick={handleDeleteChangePageButton}>
                    <FilePlus size={28} />
                  </button>
                </div>
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-3/5 px-3 py-3 my-3 border rounded-lg items-center justify-between relative"
                    >
                      <div className="flex items-center">
                        <img
                          src={product.imagem_link}
                          alt={product.nome}
                          className="h-24"
                        />
                        <div className="flex flex-col px-32 absolute">
                          <h4 className="font-bold text-gray-700">
                            {product.nome}
                          </h4>
                          <span className="text-gray-700">
                            {product.descricao.pt}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsModalVisible(true);
                          setProductId(product.id);
                        }}
                        className="flex bg-red-800 w-8 h-8 items-center justify-center rounded-md"
                      >
                        <Trash size={24} color="white" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsForm;
