import React , { useState , useRef, useEffect, useContext } from "react";
import { MdModeEdit } from "react-icons/md";
import "./index.scss";

//Context
import { SeatContext } from "../../../../../../context/seatContext";

const Seat = (props) => {
  //Props
  const { id , name , edit , view , hideSeatProp } = props;

  //Context
  const { updateSeat, hideSeat } = useContext(SeatContext);

  //States
  const [ hide , setHide ] = useState(hideSeatProp);
  const [ editState , setEditState ] = useState(false);

  //Referencias
  const refInput = useRef();

  //Input Actions
  const onClick = () => setEditState(true);
  const onBlur = () => !refInput.current.value ? setEditState(false) : null;
  const onChange = (ev) => updateSeat(id,ev.target.value)

  //Effects
  useEffect(() => {
    if(editState) refInput.current.focus();
  },[editState])

  useEffect(() => {
    if(editState) setEditState(false);
  },[edit])


  if(!edit){
    if(view){
      return <div className={`seat-box edit view ${hide ? "hide" : ""}`}>
        <p className="name">{name}</p>
      </div>
    }

    const onClick = () => {
      setHide(!hide);
      hideSeat(id,hide);
    }

    return <div className={`seat-box edit ${hide ? "hide" : ""}`} onClick={onClick}>
      <p className="name">{name}</p>
    </div>
  }

  return <div className={`seat-box ${hide ? "hide" : ""}`}>
    {
      editState ? 
        <input 
          type="text"
          className="input-box-name"
          defaultValue={name}
          maxLength="4"
          onBlur={onBlur}
          onChange={onChange}
          ref={refInput}
        /> :
        <div className="icon" onClick={onClick}>
          <MdModeEdit />
        </div>
    }
  </div>
};

Seat.defaultProps = {
  hideSeatProp : false
}

export default Seat;