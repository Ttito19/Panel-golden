import React from 'react';
import CustomModal from '../../../../UIComponents/CustomModal';
import CustomSelect from '../../../../UIComponents/CustomSelect';
import useGetTravelDataToSelect from '../../../../../hooks/useGetTravelDataToSelect';
import Input from '../../../../UIComponents/Input';
import useUpdateTravelData from '../../../../../hooks/useUpdateTravelData';

const Update = ({ show , hide , data }) => {
  const { driverData , busData , destinyData } = useGetTravelDataToSelect();
  const { setDriver , setBus , setDestiny , setArrivalDate , setDepartureDate , onSubmit , isUpdating } = useUpdateTravelData(data.id,hide);

  const departureDate = data.departureDate.time;
  const arrivalDate = data.arrivalDate.time;

  return <CustomModal title='Actualizar Viaje' isShow={show} hide={hide}>
    <form onSubmit={onSubmit}>
      <CustomSelect 
        title='Conductor'
        defaultValue={data.driver.name}
        data={driverData}
        onChange={ev => setDriver(ev.value)}
      />
      <CustomSelect 
        title='Bus'
        defaultValue={data.bus.name}
        data={busData}
        onChange={ev => setBus(ev.value)} 
      />
      <CustomSelect
        title='Destino'
        data={destinyData}
        onChange={ev => setDestiny(ev.value)}
      />
      <Input defaultValue={departureDate} onChange={ev => setArrivalDate(ev.target.value)} name='Hora de Salida' type='datetime-local' />
      <Input defaultValue={arrivalDate} onChange={ev => setDepartureDate(ev.target.value)} name='Hora de Llegada' type='datetime-local' />    
      <div className='pt-2'>
        <button disabled={isUpdating} className='btn btn-sm btn-primary' >Actualizar Datos</button>{' '}
        <button disabled={isUpdating} onClick={hide} type='button' className='btn btn-sm btn-danger' >Cerrar Modal</button>  
      </div>
    </form>
  </CustomModal>
}

export default Update;