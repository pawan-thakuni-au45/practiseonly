
import './App.css';


function App() {
  const[search,setSearch]=useState([]);

  const[searchText,setSearchText]=useState("");
 

 const handleClick=(e)=>{
  console.log(e);
  
  if(searchText.trim() !==" "){
      setSearch(searchText)
      setSearchText('')
      console.log('this');
    
  }
}
  
  
  

  
  return (
    <div className="App">
        <input type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button onClick={()=>handleClick}></button>

        {
search.map(()=>{
  return(
    <h1>{search}</h1>
  )
})
        }

         
    </div>
  );
}

export default App;
