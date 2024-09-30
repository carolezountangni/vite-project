import {useId, forwardRef} from "react";
/**
 * @param {string} placeholder
 * @param {string} value
 * @param {string} label
 * @param  {(s: string) => void}onChange
 */

export const Input = forwardRef(({placeholder, value, onChange, label},ref) =>{
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>

        <input
            id ={id}
            ref={ref}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange ?.( e.target.value)}
        />
    </div>

})

 Input.displayName = 'Input'

//nom particulier dans la console pour vite retrouver l'element : displayName
//  Input.displayName = 'Input'
// export const Input = forwardRef( function Input ({placeholder, value, onChange, label},ref){

