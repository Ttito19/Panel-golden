import React from 'react';
import CustomModal from '../../../../UIComponents/CustomModal';
import CustomSelect from '../../../../UIComponents/CustomSelect';
import useGetTravelDataToSelect from '../../../../../hooks/useGetTravelDataToSelect';
import Input from '../../../../UIComponents/Input';

const Update = ({ show , hide , data }) => {
  const { driverData , busData , destinyData } = useGetTravelDataToSelect();

  return <CustomModal title='Actualizar Viaje' isShow={show} hide={hide}>
    <CustomSelect 
      title='Conductor'
      defaultValue={data.driver.name}
      data={driverData}
    />
    <CustomSelect 
      title='Bus'
      defaultValue={data.bus.name}
      data={busData}
    />
    <CustomSelect
      title='Destino'
      data={destinyData}
    />
    <Input name='Hora de Salida' type='datetime-local' />
    <Input name='Hora de Llegada' type='datetime-local' />
  </CustomModal>
}

export default Update;