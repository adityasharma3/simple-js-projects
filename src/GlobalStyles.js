import styled from "styled-components";

export const GlobalApp = styled.div`
    padding: 1.5rem;
    text-align: center;
    margin: 5vh 15vw;
    box-shadow: 10px 10px 5px #000;
    height: 100vh;
    background-color: rgba(0,0,0,0.35);
    border-radius: 5rem;
`

export const Input = styled.input`
    width: 50vw;
    font-size: large;
    padding: 0.75rem;
    font-family: 'Comfortaa';
    outline: none;
    background-color: black;
    color: whitesmoke;
    border: none;
    outline: none;
    border-radius: 30px;
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

export const ListItem = styled.li`
    list-style: none;
    display: inline-flex;
    

`

export const ListContainer = styled.div `
    border: 1px solid white;
    margin: 1rem;
`