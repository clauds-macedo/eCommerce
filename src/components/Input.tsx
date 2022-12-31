import React, {useEffect, useRef } from "react";
import { useField } from "@unform/core"

type InputProps = {
  name: string,
  label: string,
  placeholder: string,
  type: string
}

function Input({name, label, ...rest} : InputProps) {
  const inputRef = useRef(null)
  
  const { fieldName, defaultValue = "", registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    })
  }, [fieldName, registerField])

  return(
    <input
      ref={inputRef}
      id={fieldName}
      required
      defaultValue={defaultValue}
      className="h-10 border my-2 pl-2 rounded-lg"
      {...rest}
    />
  )
}

export default Input