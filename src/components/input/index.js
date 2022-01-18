import React from "react";

function Input({label, ...props}) {



  return (
    <>
    <label>{label}</label>
    <input 
      {...props}
    />
    </>
  )
}

export default Input