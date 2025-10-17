import { Button } from "./Button"

export function CourseGoal({title, description}){
    return (
        <>
    <h2>TITLE:{title}</h2>
    <p>DESCRIPTION:{description}</p>
    <Button>Enviar</Button>
    </>
)
}