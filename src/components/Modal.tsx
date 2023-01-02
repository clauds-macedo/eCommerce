import React from "react";
import { X } from 'phosphor-react'
import ModalButton from "./ModalButton";

interface ModalProps {
  id?: string
  onClose: () => void
  deleteButton: () => void
}

interface IEventTarget extends React.MouseEvent<Element, MouseEvent> {
  id: string
}

function Modal({id = 'modal', onClose, deleteButton }: ModalProps) {

  const handleOutsideClick = (e: IEventTarget) => {
    if(e.target.id === id)
      console.log(e.target);
    
  }

  return(
    <div 
      id={id}
      onClick={(e) => handleOutsideClick(e)}
      className="w-screen h-screen bg-opacity-90 bg-neutral-900 absolute z-10 flex justify-center items-center "
    >
      <div className="flex items-center flex-col justify-around w-96 h-48 bg-slate-50 rounded-3xl z-20 relative">
        <button 
          onClick={() => onClose()}
          className="absolute right-4 top-4"
        >
          <X size={24}/>
        </button>
        
        <h1 className="text-2xl font-bold">
          Deseja Excluir?
        </h1>
        <ModalButton 
          name="Excluir"
          onAction={() => deleteButton()}
        />
      </div>
    </div>
  )
}


export default Modal