import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGoal from './components/MainGoal'
import FirstComponent from './components/FirstComponent'
import Card from './components/Card'

let mySubject = "React";

const subjects = ['JS','CSS','React','Bases de dados']

const objectvs = ['Aprender React e construir aplicações incríveis!', 'Fazer interfaces user friendly!', 'Ter o meu código optimizado!']
// const metas = [
//   { id: 1, titulo: "Aprender React", descricao: "Construir apps com componentes reutilizaveis" },
//   { id: 2, titulo: "Praticar Logica", descricao: "Resolver desafios e exercicios diários" },
//   { id: 3, titulo: "Organizar Rotina", descricao: "estudar, praticar e descansar com equilibrio" }
// ];
//Criacao do objeto
const userData = {
  firstName: 'Taís',
  lastName: 'Pestana',
  title: 'Desenvolvedora'
} ;

function getRandomForSubject(max){
  return Math.floor(Math.random() * max);
}

mySubject = subjects[getRandomForSubject(4)];

// Criaçao do objeto e suas propriedades
let product = {
  name: 'caneta',
  price: 5,
  color: 'amarelo'
};

// function GoalList(props){
// <div>
//   <p>{props.meta}</p>
// </div>
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstComponent/>
    <MainGoal objetivo = {objectvs[0]}/>
    <MainGoal objetivo = {objectvs[1]}/>
    <MainGoal objetivo = {objectvs[2]}/>
    <MainGoal objetivo = 'Construir uma aplicaçao com servidor!'/>
      
    {/* <GoalList meta = {metas[0]}/>
    <GoalList meta = {metas[1]}/>
    <GoalList meta = {metas[2]}/> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Front End Developer: React</h1>
   <Card firstName = 'Cristina'
   lastName = 'Correia'
   title = 'Gestora Pedagógica'/>
   <Card firstName = 'Antonio'
   lastName = 'Silva'
   title = 'Gestor'/>
    <Card firstName = {userData.firstName}
   lastName = {userData.lastName}
   title = {userData.title}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
