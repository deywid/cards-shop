import React, { useState } from "react"
import Input from "../../components/input";

export default function Checkout() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <Input 
    label="Email"
    type="text"
    value={email}
    onChange={event =>{
      setEmail(event.target.value)
    }}
    placeholder="Digite seu nome"
    />
    <Input
    label="password"
      type="password"
      value={password}
      onChange={event =>{
        setPassword(event.target.value)
      }}
      placeholder="Digite seu nome"
    /> 
    <button type="submit">Login</button>
    </form>
    </>
  )
}