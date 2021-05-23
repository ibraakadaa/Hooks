import {useRef , useState , useEffect } from'react'
function AddMovie(props) {


    
    const fileInput=useRef()
    const [Data,setData]=useState("");
    const [previous,setPrevious]=useState();  
    const nameofmovie=useRef();

   var count=0
  
  
  
  
  
  function hand(e) {
     e.preventDefault();
    fileInput.current.click(); 
}
  
  function handl(e)
  {
  var file=e.target.files[0]   
      
  
  if(file)
  {
  setData(file)
  }
  
  }

 
   

  
  useEffect(()=>{
  if(Data)
    
  { const reader=new FileReader(); 
    reader.onloadend=()=>{ 
    
      setPrevious(reader.result)
      
    {props.Add({photo:previous,
      name:nameofmovie.current.value}) 
  
    }  
    /**/
     }
   reader.readAsDataURL(Data)
  
   }
      
    
}, [Data]) 

  
  return (<div>
  <button onClick ={hand}  > add
  </button> 
  <img src={previous}/>
  <input type="file"   ref={fileInput} style={{display:'none'}} onChange={handl} ></input> 
  <h2> the name fo the movie </h2>
  <input tupe="text" placeholder="writethe name here" ref={nameofmovie}  />
  </div>)

}
export default AddMovie
