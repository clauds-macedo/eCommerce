import React from "react"

type ButtonProps = {
  color?: string
  name: string
  onAction: () => void
}

function ModalButton({ name, onAction, color } : ButtonProps) {
 return (
  <div 
    style={{background: color}}
    className="flex items-center justify-center w-24 h-10 bg-red-500 text-slate-50 rounded-lg"
  >
    <button
      onClick={() => onAction()}
    >
      {name}
    </button>
  </div>
 ) 
}

export default ModalButton