import React , { useRef, useState } from "react";
import HideContent from "./HideContent";
import ItemList from "./ItemList";
import { Container , InputSearch, Label , InputContainer } from "./styles";

const SearchSelect = ({ title , placeholder , searchData }) => {
  const inputRef = useRef();
  const [ isShow , setIsShow ] = useState(false);
  const [ search , setSearch ] = useState(searchData);
  const [ items , setItems ] = useState([]);

  const onChangeSearchInput = ev => {
    if(!ev.target.value) setIsShow(false);
    else{
      setIsShow(true);
    }
  }

  const onClickAddList = value => {
    let arraySearch = [ ...search ];
    arraySearch[value.id] = null;

    setSearch(arraySearch);
    setItems([ ...items , value ]);
    setIsShow(false);

    inputRef.current.value = "";
  }

  const onClickRemoveList = (index,val) => {
    let arraySearch = [ ...search ];
    arraySearch[val.id] = {
      label : val.label,
      value : val.value
    };

    let arrayItems = [...items].filter((v,i) => i !== index);

    setSearch(arraySearch);
    setItems(arrayItems);
  }

  return <Container>
    <Container>
      <Label>{title}</Label>
      <InputContainer onBlur={() => setIsShow(false)}>
        <InputSearch 
          ref={inputRef} 
          type="text" 
          onFocus={() => setIsShow(true)} 
          onChange={onChangeSearchInput} 
          placeholder={placeholder} 
        />
        <HideContent data={search} show={isShow} onClickItem={onClickAddList} />
      </InputContainer>
    </Container>
    <ItemList data={items} onClickItem={onClickRemoveList} />
  </Container>
}

SearchSelect.defaultProps = {
  show : true,
  searchData : []
}

export default SearchSelect;