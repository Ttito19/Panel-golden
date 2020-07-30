import { firestore } from "firebase";
import { useEffect, useState } from "react";

const useGetTravelDataToSelect = () => {
  const [ busStopData , setBusStopData ] = useState([]);
  const [ clientsData , setClientsData ] = useState([]);
  const [ destinyData , setDestinyData ] = useState([]);
  const [ busData , setBusData ] = useState([]);

  const _GetData = async (table , callback) => {
    try {
      const data = await firestore().collection(table).get();
      let arrayData = [];
      
      callback(data,arrayData);
    }catch(e){
      console.log(e);
    }
  }

  const GetBusStopData = () => {
    _GetData("busStop", (data,array) => {
      data.forEach(v => {
        const id = v.id;
        const { name } = v.data();
        array.push({ value : id , label : name });
      });

      setBusStopData(array);
    });
  }

  const GetClients = () => {
    _GetData("clients", (data,array) => {
      data.forEach(v => {
        const id = v.id;
        const { fullName } = v.data();
        array.push({ value : id , label : fullName });
      })

      setClientsData(array);
    });
  }

  const GetDestinyData = () => {
    _GetData("location", (data,array) => {
      data.forEach(v => {
        const id = v.id;
        const { name } = v.data();
        array.push({ value : id , label : name });
      });

      setDestinyData(array);
    })
  }

  const GetBusData = () => {
    _GetData("bus", (data,array) => {
      data.forEach(v => {
        const id = v.id;
        const { name } = v.data();
        array.push({ value : id , label : name });
      });

      setBusData(array);
    });
  }

  useEffect(() => {
    GetDestinyData();
    GetBusData();
    GetBusStopData();
    GetClients();
  })

  return {
    busStopData,
    clientsData,
    destinyData,
    busData
  }
}

export default useGetTravelDataToSelect;