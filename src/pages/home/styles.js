import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CategoryItems = styled.div`
  height: 42px;
  width: 100%;
  padding: 12px 24px;
  margin: 6px;
  background-color: #304E74;
  border-radius: 4px;

  display: flex;
  align-items: center;

  font-size: 1.2em;
  color: floralwhite;

  a {
    color: floralwhite;
    font-size: .9em;

    text-decoration: none;
  }

  &:hover {
    background: #EC6D06;
  }
`;