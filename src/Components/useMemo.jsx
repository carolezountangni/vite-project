import React, { useState, useMemo , useId} from "react";
import { Input } from "./forms/Input.jsx";
import { Checkbox } from "./forms/Checkbox.jsx";


function Memo() {
  const [firstname, setFirstname] = useState('John');
  const [password, setPassword] = useState('MotDePasse');
  const security = useMemo(()=> {
    return passwordSecurity(password)

  },[password])
  //valeur généré une seul fois tout le long du cycle du composant en ne lui passant rien en mémloire :
   const random = useMemo(() => Math.random(),[])

  return <div className="container my-3 vstack gap-2">

      {random}
      <Input
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
        placeholder="Nom d'utilisateur..."
      />

      <div>
        <Input
          label=" Mot de passe"
          value={password}
          onChange={setPassword}
          placeholder="Mot de passe ..."
        />
        <p> Sécurité: {security} </p>
      </div>
      
    </div>
  
}

function passwordSecurity(password) {
  // Fausse lenteur
  let startTime = performance.now();
  while (performance.now() - startTime < 200){

  }
  if(password.length < 3) {
    return 'Faible'
  } else if (password.length < 6){
    return 'Moyen'
  }

  return 'Fort';
}

export default Memo;



