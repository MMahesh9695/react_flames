import react, {useState, useEffect } from 'react';


export default function SampleUseEffect(){
    const[data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setData(json))
    })

    return (
        <div>
            {data.map(val => {
                  return <p>{JSON.stringify(val)}</p>
                })
            }
        </div>
    )
}