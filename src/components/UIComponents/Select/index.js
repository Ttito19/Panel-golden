import React , {useState} from 'react';

const Select = (props) => {

    // type -  optionValues = { id : valueOption }
    const { onChange , optionsValues ,refs , value} = props;
    const [ optionsJsx ] = useState([]);
    const [ isloadingInformation,setLoadingInformation ] = useState(false);

    const loadingSelect = () => {
        return (
            <select onChange = {onChange} ref={refs} value={value} >
                {
                    optionsJsx.map( e => {
                        return e;
                    })
                }
            </select>   
        )
    }
    
    const loadingOptions = () => {

        for (var key in optionsValues){
            optionsJsx.push(<option value={key} > {optionsValues[key]} </option>);
        }
        setLoadingInformation(true);
        
    }
    
    return (
        <div>
        {       
            isloadingInformation
            ? loadingSelect()
            : loadingOptions()
        }
        </div>
    )
}

export default Select;