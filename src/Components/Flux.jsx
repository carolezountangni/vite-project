import{useState} from "react";


function Flux() {
    
    const [isTermAccepted ,setIsTermAccepted] = useState(false)

    return  <form>
        
        <p>CGUCheckbox</p>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        
        <p>Bouton</p>
        <button disabled={!isTermAccepted} >Envoyer</button>

    </form>


    function CGUCheckbox({checked,onCheck}){

        return <div>
            <label>
                <input 
                
                    type="checkbox"
                    
                    onChange={(e) => onCheck(e.target.checked)}
                        checked={checked}/>
                Accepter les conditions d'utilisation
            </label>
        </div>

    }

 
  
}


export default Flux






