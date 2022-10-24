import  {useState} from 'react';


function App() {
  const[fname,setfname]=useState();
  const handler=e =>{
    setfname(e.target.value)
  }

  const[lname,setlname]=useState();
  const handle=e =>{
    setlname(e.target.value)
  }
  
  

  return (
    <>
    <div>
      <input type="text" placeholder='firstname' id='fname' value={fname}  onChange={handler}/>
    </div>
    <div>
    <input type="text" placeholder='lastname' id='lname' value={lname}  onChange={handle}/>
    </div>
    <h2>firstname:{fname}</h2>
    <h2>lastname:{lname}</h2>
    </>

  );
    

}

export default App;
