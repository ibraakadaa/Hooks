
function Movie(props)
{ 
    
    return( <div > {console.log("from moviejs",props.fn)}
      <img src={props.fn}  ></img>
    <p> {props.name}</p>
    
    </div>)
 
}



export default Movie 