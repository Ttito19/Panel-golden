import React , {useState} from 'react';

const Select = (props) => {

    const { onChange , optionsValues ,refs , value} = props;

    return (
        <select ref={refs} onChange={onChange}  >
        {       
            optionsValues.map( (e,i) => {
                return (
                    <option key={i} value={e.value}> { e.name } </option>
                )
            })
        }
        </select>
    )
}

export default Select;