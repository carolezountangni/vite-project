import React, { useState,memo, useMemo ,useCallback, useId, useRef, useEffect} from "react";
import { Input } from "./forms/Input.jsx";


function  Callback() {

  const[name, setName] = useState('')
  const nameRef = useRef(name)
  nameRef.current = name

  const handleClick = useCallback(() => {
    console.log(nameRef.current)
  }, [])

  
  return <div className="container my-3 vstack gap-2">
    <div>

      <Input label="Prénom" value={name} onChange={setName}/>
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <InfoMemo onClick={handleClick}/>
  </div>

}
  // function Info(){

    // console.log('Info', 'render')
    // waitSync(500)
    const InfoMemo = memo (function Info({onClick}){
      console.log('Info', 'render')

      return <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, 
      ipsum accusantium facilis, similique repudiandae saepe distinctio
       iure ad amet, ex est ullam minima.
       Quae ab incidunt debitis vero a facere.
       </div>


    })
    
   
  // }

export default  Callback;



