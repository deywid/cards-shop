import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`;

export const InputText = styled.input`
  width: 100%;
  height: 24px;
  border-radius: 2px;
  outline: none;
  border: 1px solid ${(props) => props.errorMessage ? "#DC3545" : "#CED4DA"};
  padding-left: 5px;

  &:focus {
    border-color: #ec6d08;
  }
`;

export const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 10px;
  margin-top: 2px;
`;