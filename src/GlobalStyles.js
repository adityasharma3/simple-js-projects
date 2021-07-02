import styled from "styled-components";

export const GlobalApp = styled.div`
    text-align: center;
    margin: 5vh 15vw;
    border: 1px solid white;
    height: 100vh;
    background-color: rgba(0,0,0,0.35);
    border-radius: 5rem;
`

export const Input = styled.input`
    width: 50vw;
    font-size: large;
    padding: 0.5rem;
    font-family: 'Comfortaa';
    outline: none;
`

export const Button = styled.button`
    padding: 15px;
    background-color: green;
    color: whitesmoke;
    width: max-content;
    align-items: center;
    font-family: 'Comfortaa', cursive;
    border-radius: 30px;
    outline: none;
    border: 0;
    margin: 1rem;
    
    :hover {
        opacity: 0.7;
    }
`