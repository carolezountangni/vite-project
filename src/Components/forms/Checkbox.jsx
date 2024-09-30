import React from 'react';
import PropTypes from 'prop-types';

/**
 * Checkbox avec un libelle sur la droite 
 * @param {boolean} checked - Etat de la checkbox
 * @param {(v: boolean) => void} onChange - Fonction de rappel pour changer l'état
 * @param {string} label - Libellé de la checkbox
 * @param {string} id - ID unique pour la checkbox
 */
export function Checkbox({ checked, onChange, label, id }) {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="form-check">
      <input
        id={id}
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
  );
}

// PropTypes pour vérifier les types des props
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
