import React, { useState, useMemo , useId, useRef, useEffect} from "react";
import { Input } from "./forms/Input.jsx";
import {useToggle} from "./hooks/useToggle.js"
import {useIncrement} from "./hooks/useIncrement.js"
import {useDocumentTitle} from "./hooks/useDocumentTitle.js"
import {useFetch} from "./hooks/useFetch.js"

//site pour hook : usehooks.com ,usehooks-ts.com,react-use

function MyHook() {
 
  //useToggle
  const [checked, toggleCheck] = useToggle()
  //useIncrement
  const {count,decrement,increment} = useIncrement({
    base:0,
    max:10,
    min:0,
  })
  // useDocumentTitle.
  const[name, setName] = useState('')


  useDocumentTitle(name ? `Editer ${name}` : null);

  //useFetch
  const{loading, data , errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  return <div className="container my-3 vstack gap-2">
    <p>Hook personnalisé! useToggle</p>


      <input
       type="checkbox"
       checked={checked}
       onChange={toggleCheck}
      />
      {checked && 'Je suis coché'}


      <p>Hook personnalisé! useIncrement</p>
      Compteur {count}
      <button onClick={increment}> Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>


      <p>Hook personnalisé! useDocumentTitle</p>
      <Input value={name} onChange={setName} label="Nom"/>

      <p>Hook personnalisé! useFetch</p>
      
      <div className="container my-2">
        {loading && <div className="spinner-border" role="status">  
               <span className="visually-hidden">Chargement...</span>
            </div>}
            {errors && <div className="alert alert-danger">{errors.toString()}</div> }
        { data && <div>
            <ul>
              {data.map(post => (<li key={post.id}>{post.title}</li>))}
              
            </ul>
          </div>}
      </div>


    </div>

    
}



export default  MyHook;



