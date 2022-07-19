import styled from "styled-components";

export const Form = styled.form`
    background-color: var(--ColorWhite);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 4px solid var(--PrimaryColor);
`;

export const Introducction = styled.p`
    text-align: justify;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 4px solid var(--PrimaryColor);
`;

export const AditionalInformation = styled.span`
    margin-bottom: 1rem;
    font-weight: bold;
`;

export const Container1Col = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`;

export const Footer = styled.footer`
    padding: 1rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 720px) {
        flex-direction: row;
        position: sticky;
        top: 100%;
        width: 100%;
    }
`;

export const FooterImage = styled.img`
  width: 100%;
  &:first-child {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 720px) {
    width: initial;
    height: 5.5rem;
    &:first-child {
      margin-bottom: 0;
    }
  }
`;


export const MessageError = styled.div`
  background-color: var(--PrimaryColor);
  color: white;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const SendButton = styled.button`
  padding: 0.7rem;
  width: 20%;
  font-size: 1.2rem;
  text-align: center;
  background-color: var(--PrimaryColor);
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #3145D6;
  }
`;


export const FormSuccess = styled.form`
    background-color: var(--PrimaryColor);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
`;

export const FormSuccess2 = styled.form`
    background-color: #C5D6FF;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
`;
