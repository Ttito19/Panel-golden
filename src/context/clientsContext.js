import React, { createContext, useEffect, useState } from "react";
import { useFirebaseApp } from "reactfire";
export const ClientContext = createContext();

export const ClientProvider = (props) => {
  const { firestore } = useFirebaseApp();
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection("clients")
      .onSnapshot((snapshot) => {
        const lisClients = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(lisClients);
      });
    return () => unsubscribe();
  }, []);

  const deleteClient = (id) => {
    firestore().collection("clients").doc(id).delete();
  };

  return (
    <ClientContext.Provider value={{ clients, deleteClient }}>
      {props.children}
    </ClientContext.Provider>
  );
};
