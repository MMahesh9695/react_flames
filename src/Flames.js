import logo from './logo.svg';
import './Flames.css';
import {  useState } from 'react';

let flamesList = {
  1 : "Friend",
  2 : "Love",
  3 : "Affection",
  4 : "Marriage",
  5 : "Enemy",
  6 : "Sibling"
}

function Flames() {
  
  const [name,setName] = useState("");
  const [partnerName,setpartnerName] = useState("");
  const [result,setResult] = useState("");

  function findMatch(){
    if(name === ""){
      setResult("Please enter your name");
      return false;
    }
    else if(partnerName === ""){
      setResult("Please enter your partner's name");
      return false;
    }

    let charInName = splitWords(name);
    let charInPartnerName = splitWords(partnerName);
  
    let flamesResult = checkingFlames(charInName,charInPartnerName);

    flamesResult ===0 ? setResult(flamesList[1]) : setResult(flamesList[flamesResult]);
  }


  function checkingFlames(charInName,charInPartnerName){

    for(let inc =0; inc < partnerName.length;inc++){
      let char = partnerName.charAt(inc);

      if(charInName[char] && charInPartnerName[char]){
        if(charInName[char] > 0){
          charInName[char]--;
        }

        if(charInPartnerName[char] > 0){
          charInPartnerName[char]--;
        }
      }
    }

    let count = 0;

    for(const nameChar in charInName){
      if(charInName[nameChar] >0)
        count = count + charInName[nameChar];
    }

    for(const partnerChar in charInPartnerName){
      if(charInPartnerName[partnerChar] >0)
        count = count + charInPartnerName[partnerChar];
    }

    let start =1;
    let flamesArr = [1,2,3,4,5,6];

    while(flamesArr.length > 1){
      let remaining = count % flamesArr.length;
      let cutDown = (start + remaining -1) % flamesArr.length;
      start = cutDown === 0 ? flamesArr.length: cutDown;
      flamesArr.splice(start-1, 1);
    }

    return flamesArr[0];
  }

  function splitWords(name){
    let arr = {};
      for(let inc = 0;inc<name.length;inc++){
        let char = name.charAt(inc);

        if (arr[char])
          arr[char]++;
        else
          arr[char] = 1;
      }
      return arr;
  }

  return (
    <div className="container">
       <div className="container-items">
            <label>Enter your name</label>
            <input type="text" id="name" onChange={(e)=>setName(e.target.value)}></input>
       </div>
       <div className="container-items">
            <label>Enter your partner's name</label>
            <input type="text" id="partnerName" onChange={(e)=>setpartnerName(e.target.value)}></input>
       </div>
       <div className="container-items">
          <button onClick={findMatch}>Find the match</button>
       </div>
       <div className="output-container">
          <div id="output">{result}</div>
       </div>
    </div>
  );
}

export default Flames;
