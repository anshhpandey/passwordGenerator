import { useCallback } from "react";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {

  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword]= useState("")

  const passGenerator = ()=>{
    let pass = ''
    let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'

    if(numAllowed){
      str += '2345678910'
    }
    if(charAllowed){
      str += '!@#$%^&*()_+<>?'
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    } 
    setPassword(pass)
  }

  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password)
  }  

   useEffect(()=>{passGenerator()},[length,numAllowed,charAllowed]) 
  return (
    <>
      <h1 id="heading">Random Password Generator</h1>
      <div className="container">
        <div className="top">
          <input
           id="input"
            type="text"
             readOnly
              placeholder="Password" 
              value={password}
              />
          <Popup trigger=
                {<button onClick={copyPassword()}>Copy</button>}
                position="right center">
                <span className="popup">Password copied !</span>
               
            </Popup>

          
        
        
        </div>



        <div className="bottom">
          <input type="range"
           id="range"
           min={6}
           max={24}
           value={length}
           onChange={(e)=>{setLength(e.target.value)}}
           />
          <label htmlFor="" >Length: {length}</label>
          <input type="checkbox"
            className="btm-items"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
            />
          <label htmlFor="" >Characters</label>

          <input type="checkbox"
          className="btm-items"
          defaultChecked={numAllowed}
            onChange={()=>{
              setNumAllowed((prev)=> !prev)
            }}
            />
          <label htmlFor="">Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
