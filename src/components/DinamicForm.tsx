import React from "react";
import { Scope, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Input from './Input'
import { IFormData } from "../utils/types";
import { fields } from "../utils/consts";

type FormProps = {
  onSend: (e: IFormData) => void,
  formComponent: string

}

interface formInfo {
  scope: string
  name: string
  type: string 
  placeholder: string 
}

function DinamicForm({ onSend, formComponent}: FormProps) {

  console.log(fields);
  

  const forms: {[key: string]: formInfo[]} = {
    produtos: fields.produtos,
    cartao: fields.cartoes
  }  
  
  const handleSubmit: SubmitHandler<IFormData> = (data,  { reset }) => {
    onSend(data)
    alert("Cadastrado com sucesso")
    reset()
  }
  

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col w-1/2">
      {
        forms[formComponent].map(field => {
          return (  
            <Scope path={field.scope}>
              <Input 
                name={field.name}
                label={field.name}
                type={field.type}
                placeholder={field.placeholder}
              />
            </Scope>
          )
        }) 
      }
      <button type="submit" className="h-10 my-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">Cadastrar</button>
    </Form>
  )
}

export default DinamicForm
