import { useMemo, useState } from "react";

export default function Sample(){
  const [count,setCount] = useState(0);
  const [theme,setTheme] = useState(true);
  const doubleNumber = useMemo (() =>{
    return doubleTheNumber(count)
  },[count]);
  
  const darktheme = {
    backgroundColor : theme ? 'black' : 'white',
    color : theme ? 'white' : 'black'
  }

  return (
    <>
      <input type="text" onChange={(e)=>setCount(e.target.value)}/>
      <button onClick={()=> setTheme(!theme)}> Change Theme</button>
      <div style={darktheme}>{doubleNumber}</div>
    </>
  )
}

function doubleTheNumber(count){
  for(let number =0;number < 1000000000 ;number++){}
  return count * 2;
}