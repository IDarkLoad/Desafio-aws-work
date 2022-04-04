import styled from 'styled-components'

export const Container = styled.div`//barra geral
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const List = styled.div` //contêiner(externo)
    width: 75%;
    align-self: center;
`

export const ComponentVehicle = styled.div`//contêiner(interno)
    padding: 30px;
    border: 1.5px solid black;
    margin: 10px 0;
    background-image: linear-gradient(to bottom, #f6f7f9 ,#add8e6);

    span {
    font-size: 18px;
    margin: 0 5px;
    font-weight: 540;
    }
`

export const FormVehicleContainer = styled.div` //inputs de adição
  display: flex;
  background-color: #add8e6;
   padding: 15px 0;
   height: 50px;
   border-radius:7px;
   align-self: center;
    input {
    margin: 0 10px;
    height: 30px;
    border-radius: 7px;
    border: 0.5px solid black;

    &.focus {
    border: 0.5px solid blue;  
       }
    }
  button {
  margin:2vh;
  background-color: dodgerblue;
  color:white;
  border:none;
  border-radius:4px;
  cursor:pointer;
  width:100px;
  height:5vh;
    }
  button:hover{
  background-color: deepskyblue;
  color: black;
    }
`