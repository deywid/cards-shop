import React, { useState } from "react"
import Input from "../../components/input";


export default function Checkout() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault();
    let currentErrors = {};
    if (!email) {
      currentErrors.email = 'Email é obrigatório';
    }
    if (!password) {
      currentErrors.password = 'Password é obrigatório';
    }
    setErrors(currentErrors);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="text"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
          placeholder="Digite seu email"
          errorMessage={errors.email}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
          placeholder="Digite sua senha"
          errorMessage={errors.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}