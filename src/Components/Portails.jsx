import React, { useState,memo, useMemo ,useCallback, useId, useRef, useEffect} from "react";
import {createPortal} from "react-dom"

function  Portail() {

  const[name, setName] = useState('')
  const nameRef = useRef(name)
  nameRef.current = name

  const handleClick = useCallback(() => {
    console.log(nameRef.current)
  }, [])

  
  return <div style ={{
    height: 300,
    overflowY : 'scroll',
    background : '#EEE',
    margin: 20,
    position: 'relative'

  }}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem et minus sequi magnam tempore accusamus, ab dicta. Perferendis odit sed, magnam sequi, possimus odio, minus aperiam quas quo accusamus molestiae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quis! Ad quo nulla, cupiditate placeat iste ipsam fuga? Deserunt voluptas architecto in obcaecati possimus quos maxime perferendis facilis numquam. Nesciunt.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo perspiciatis sed autem hic quae unde quia ipsam? Cupiditate id veritatis nobis dolores perspiciatis blanditiis laborum libero sit hic necessitatibus.</p>
     
  <Modal/>
  </div>

}
function Modal(){

    return createPortal(<div style={{
    background : '#FFF',
    padding: 10,
    position: 'absolute',
    top : 0,
    right: 0,
    border: 'solid 1px grey',
    }}>

        Je suis un modale.
   </div>,document.body)
}

export default  Portail;



