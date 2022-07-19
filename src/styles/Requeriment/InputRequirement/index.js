import styled from "styled-components";

export const Input = styled.input`
  background-color: #d0d5e8;
  color: var(--PrimaryColor);
  display: ${props => props.display };
`;

export const LabelInput = styled.label`
  height: ${props => props.height};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

export const LabelInputTitle = styled.label`
  font-size: 2rem;
  padding: 0.1rem 0 1rem 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
`;

export const Selected = styled.select`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  background-color: var(--ColorWhite);
  border: 2px solid var(--PrimaryColor);
  margin-top: 1rem;
  font-weight: 600;
  color: var(--PrimaryColor);
`;