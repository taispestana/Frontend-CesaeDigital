import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGoal from './components/MainGoal'
import FirstComponent from './components/FirstComponent'
import Card from './components/Card'
import userData from './data/userData'
import objectvs from './data/objectivs'
import { CourseGoal } from './components/CourseGoal'
import course from './data/course'

let mySubject = "React";

const subjects = ['JS','CSS','React','Bases de dados']

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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstComponent/>
    <MainGoal objetivo = {objectvs[0]}/>
    <MainGoal objetivo = {objectvs[1]}/>
    <MainGoal objetivo = {objectvs[2]}/>
    <MainGoal objetivo = 'Construir uma aplicaçao com servidor!'/>

    <CourseGoal {...course}/>

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
    <Card {...userData}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
