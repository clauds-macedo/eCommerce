import React, { useEffect, useState } from "react"
import { Scope, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { db } from '../../config/firebase'
import { doc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'
import Input from "../../components/Input"
import { Trash, FilePlus } from 'phosphor-react'

interface FormData {
  descricao: {
    pt: string
    en: string
  },
  id: string
  imagem_link: string
  nome: string
  preco: number
}

interface FormId {
  id: string
}

function ProductsForm() {
  const [deletePressed, setDeletePressed] = useState(false)
  const [products, setProducts] = useState<FormData[]>([])

  const itemsCollectionRef = collection(db, "products")

  useEffect(() => {
    const getItems = async () => {
      const col = collection(db, 'products');
      const snapshot = await getDocs(col);
      
      const productsData = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
  
      setProducts(productsData)
    }
    getItems()
  }, [])
  
  const createProduct: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      alert('Cadastrado com Sucesso!')
      await addDoc(itemsCollectionRef, data)
    } catch (error) {
      alert(error)
    }
    console.log(data);

    reset()
  }


  const deleteProduct:SubmitHandler<FormId> = async (data, {reset}) => {
    try {
      await deleteDoc(doc(db, 'products', data.id))
      console.log(data.id);
      
      alert('Deletado com Sucesso!')
    } catch (error) {
      console.log(error);     
    }

    reset()
  }

  const handleDeleteButton = () => {
    if(!deletePressed) {
      setDeletePressed(true)
      return
    }
    setDeletePressed(false)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700">
      <div className="flex flex-col justify-center items-center rounded-3xl bg-slate-50 w-3/5 h-4/5">
        {deletePressed ? 
          <>
            <div className="w-3/5 flex items-center justify-around">
              <h1 className="text-3xl my-4 font-bold">Cadastro de Produtos</h1>
              <button onClick={handleDeleteButton}>
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
          <div className="w-3/5 flex items-center justify-between">
            <h1 className="text-3xl my-4 font-bold">Deletar Produto</h1>
            <button onClick={handleDeleteButton}>
              <FilePlus size={28} />
            </button>
          </div>
          {
            products.map((product, index ) => {
              return (
                <div key={index} className="flex w-3/5 px-3 py-3 my-3 border rounded-lg items-center justify-between">
                  <div className="flex items-center">
                    <img src={product.imagem_link} alt={product.nome} className="h-24"/>
                    <div className="flex flex-col px-32 absolute">
                      <h4 className="font-bold">{product.nome}</h4>
                      <span>{product.descricao.pt}</span>
                    </div>
                  </div>
                  <div className="flex bg-red-800 w-8 h-8 items-center justify-center rounded-md">
                    <button onClick={() => {}}>
                      <Trash size={24} color='white'/>
                    </button>
                  </div>
                
                </div>
              )
            })
          }




          {/* <Form onSubmit={deleteProduct} className="flex flex-col w-1/2">
            <Input name="id" type='text' label="id" placeholder="Id do produto"/>
            <button type="submit" className="h-10 my-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">Enviar</button>
          </Form> */}
        </>
        
        }
      </div>
    </div>
  )
}

export default ProductsForm