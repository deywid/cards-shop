import React from "react";

import {
  ContainerInput,
  DescriptionInput,
  InputText,
  ErrorMessage
} from './styles'

function Input({ label, errorMessage, ...props }) {

  return (
    <ContainerInput>
      <DescriptionInput>{label}</DescriptionInput>
      <InputText
        {...props}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  )
}

export default Input;