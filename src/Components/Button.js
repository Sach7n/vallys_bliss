import styled from "styled-components";

export const Button1 = styled.button`
  font-size: 1rem;
  border: 0.02rem solid;
  border-color: var(--Font3);
  color: var(--Font3);
  background-color:var(--MainBackground);
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 0.2rem 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--LightBackground);
  }
  a{
    color: var(--Font3)!important;
    text-decoration:none;   
  }
  
`;