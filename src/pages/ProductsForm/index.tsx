import { doc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import { Scope, SubmitHandler } from '@unform/core'
import { useEffect, useState } from "react"
import { Trash, FilePlus } from 'phosphor-react'
import { Form } from '@unform/web'
import { db } from '../../config/firebase'

import Input from "../../components/Input"
import Modal from '../../components/Modal'
import useCollection from '../../hooks/useCollection'

interface FormData {
  id: string
  descricao: {
    pt: string
    en: string
  }
  imagem_link: string
  nome: string
  preco: number
}

function ProductsForm() {
  const [deletePressed, setDeletePressed] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [productId, setProductId] = useState<string>('')
  const [products, setProducts] = useState<FormData[]>([])

  const itemsCollectionRef = collection(db, "products")
  const { handleDelDoc, handleCreateDoc, handleUpdateDoc } =  useCollection({ collectionName: "products", database: db });
  
  useEffect(() => {
    const getItems = async () => {
      const col = collection(db, 'products');
      const snapshot = await getDocs(col);
      setProducts(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})) as FormData[])
    }
    getItems()
    handleUpdateDoc("x0ldXAcoJKHw7TjJ1uAS", { descricao: { pt: "DANIEL MOREIRA VOCE FALHOU COM ESTA CIDADE "} })
  }, [])
  
  const createProduct: SubmitHandler<FormData> = async (data, { reset }) => {
    handleCreateDoc(data);
    reset()
  }

  const deleteProduct = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'products', id))
      alert('Deletado com Sucesso!')
      window.location.reload()      

    } catch (error) {
      console.log(error);     
    }
  }

  const handleDeleteChangePageButton = () => {
    if(!deletePressed) {
      setDeletePressed(true)
      return
    }
    setDeletePressed(false)
  }

  return (
    <>
      {isModalVisible && 
        <Modal 
          deleteButton={() => {
            handleDelDoc(productId)
            setIsModalVisible(false)
          }} 
          onClose={() => setIsModalVisible(false)}
      />}
      <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700  ">
        <div className="flex flex-col justify-center items-center rounded-3xl bg-slate-50 w-3/5 h-4/5 max-h-2xl overflow-y-scroll">
          {deletePressed ? 
            <>
              <div className="w-3/5 flex items-center justify-around">
                <h1 className="text-3xl my-4 font-bold text-gray-700">Cadastro de Produtos</h1>
                <button onClick={handleDeleteChangePageButton}>
                  <Trash size={28} />
                </button>
              </div>
              <Form onSubmit={createProduct} className="flex flex-col w-1/2">
                <Input name="nome" type='text' label="name" placeholder="Nome"/>
                <Input name="preco" type='number'label="price" placeholder="Preço"/>
                <Scope path="descricao">
                  <Input name="pt" type='text' label="pt" placeholder="Descrição PT-BR"/>
                  <Input name="en"  type='text' label="en" placeholder="Descrição EN"/>
                </Scope>
                <Input name="imagem_link" type='text' label="image" placeholder="Link da Imagem"/>
                <button type="submit" className="h-10 my-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">Enviar</button>
              </Form>
            </>
          : 
          <>

            <div className="flex flex-col w-full h-full items-center justify-start ">
              <div className="w-3/5 flex items-center justify-between mt-8">
                <h1 className="text-3xl my-4 font-bold text-gray-700">Deletar Produto</h1>
                <button onClick={handleDeleteChangePageButton}>
                  <FilePlus size={28} />
                </button>
              </div>
              {
                products.map((product, index ) => {
                  return (
                    <div key={index} className="flex w-3/5 px-3 py-3 my-3 border rounded-lg items-center justify-between relative">
                      <div className="flex items-center">
                        <img src={product.imagem_link} alt={product.nome} className="h-24"/>
                        <div className="flex flex-col px-32 absolute">
                          <h4 className="font-bold text-gray-700">{product.nome}</h4>
                          <span className='text-gray-700'>{product.descricao.pt}</span>
                        </div>
                      </div>
                      
                        <button 
                          onClick={() => {
                            setIsModalVisible(true)
                            setProductId(product.id)
                          }}
                          className="flex bg-red-800 w-8 h-8 items-center justify-center rounded-md"
                          >
                          <Trash size={24} color='white'/>
                        </button>
                      
                    </div>
                  )
                })
              }
            </div>
          </>
          
      }
        </div>
      </div>
    </>
  )
}

export default ProductsForm