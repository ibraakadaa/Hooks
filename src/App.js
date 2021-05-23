import {useRef , useState , useEffect } from'react'

import './App.css';
import Movie from'./Movie'
import AddMovie from'./AddMovie'

function App() {


const [show,setshow]=useState([]);
const[copy,setmovie]=useState([]);
const [movie,addMovie]=useState([]);
var a=[]

function add1(newmovie){
  
  addMovie([...movie,newmovie])
}


function showallmovie(){
 setshow (movie.map((elm)=><Movie  fn={elm.photo} name={ elm.name} /> ))
}


 return(
 <div>
<input type="text" placeholder="search the name here" 
onChange={(e)=>{setmovie(movie.filter(elm => elm.name.substr(0,e.target.value.length)===e.target.value))
  console.log("e.target",e.target.value)
  console.log("length is",copy.length)
  console.log("copy is ",copy) }} />
  <div> copy is </div>
   {copy.map((elm)=><Movie  fn={elm.photo} name={ elm.name} />)} 
    <AddMovie Add={add1}/>

    <button onClick={showallmovie}>all movie is  </button>
    {show}
  </div>)
}

export default App;
