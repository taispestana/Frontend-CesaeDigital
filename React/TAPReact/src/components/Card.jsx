//Criando função que é um componente e chamando objeto
function Card(props){
  return(
       <div className="card">
          <p>{props.firstName} {props.lastName}</p> 
          <p>{props.title}</p>
          </div> 
  )
};

export default Card;