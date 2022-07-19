import styled from "styled-components";

export const TypeFileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--PrimaryColor);
    margin-bottom: 0.5rem;
`;

export const ActionFile = styled.div`
  height: 60%;
  width: 1.5rem;
  position: absolute;
  top: 50%;
  right: -2.5rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const FileContainer = styled.div`
  border-top: 2px solid var(--PrimaryColor);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
