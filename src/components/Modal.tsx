import React from "react";
import { X } from 'phosphor-react'
import ModalButton from "./ModalButton";

interface ModalProps {
  id?: string
  onClose: () => void
  deleteButton: () => void
}


function Modal({id = 'modal', onClose, deleteButton }: ModalProps) {

  const handleOutsideClick = (e: React.ChangeEvent<HTMLDivElement>) => {
    if(e.target.id === id) onClose()
  }

  return(
    <div 
      id={id}
      onClick={(e) => handleOutsideClick(e)}
      className="w-screen h-screen bg-opacity-90 bg-neutral-900 absolute z-10 flex justify-center items-center "
    >
      <div className="flex items-center flex-col justify-around w-96 h-48 bg-slate-50 rounded-3xl relative">
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