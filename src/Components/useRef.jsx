import React, { useState, useMemo , useId, useRef, useEffect} from "react";
import { Input } from "./forms/Input.jsx";


function Ref() {
  const ref = useRef(null)

  console.log('App' , ref)

  const [prefix, setPrefix] = useState('')
 

  return <div className="container my-3 vstack gap-2">


      <Input
        ref={ref}
        label="Prefix"
        value={prefix}
        onChange={setPrefix}
        placeholder="Prefix..."
      />
       {prefix.length === 0 && <div ref={ref}>hello</div>}
      
    </div>
  
}



export default Ref;



