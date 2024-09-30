import{useState} from "react";


function Formulaire() {
    
    const [firstname, setFirstname] = useState('John Doe')

    const handleChange = (e) => {
        setFirstname(e.target.value)
    }

    const reset = () => {
        setFirstname(' ')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target))
    }
    //jamais mettre undefined comme valeur pour ne pas avoir un champ controlé lors du changement de valeur aleur que c"est à la base un champ controlé  
    const [value , setValue] = useState('')

    const valueChange = (e) => {
        setValue(e.target.value)
        
    }

    const [checked , setChecked] = useState(true)

    const toggleCheck = () => {
        setChecked(!checked)
        
    }
    // console.log('render')

  return  <form onSubmit={handleSubmit}>
        
        {/* champs controlées par react quand il set à mettre à jour le rendu de la page  */}
        {/* <input  type ="text" name="firstname" value={firstname} onChange={handleChange}/>
           <p>{firstname}</p> 
        <button onClick={reset} type ="button">Reset</button> */}

        {/* champs  non controlées par react pour la soumission simple de données n'a pas besoin de value */}
       <p>Text</p>
        <input  type ="text" name="laststname" value={value} onChange={valueChange}/> <br/>
        <p/>
       <input  type ="text" name="firstname" defaultValue="John Doe"/> 
        
        <p>Textarea </p>
        <textarea  type ="text" name="text" value={value} onChange={valueChange}/>
        
        <p>Checkbox</p>
        <input type="checkbox" name="checkbox" id="checkbox" checked={checked} onChange={toggleCheck} />
        
        <p>Bouton</p>
        <button disabled={!checked} >Envoyer</button>

    </form>
}


export default Formulaire






