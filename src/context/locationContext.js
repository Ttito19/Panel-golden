import React, { createContext, useState, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import { firestore } from "firebase";
export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const { firestore } = useFirebaseApp();
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("location")
      .onSnapshot((snapshot) => {
        const listLocation = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLocation(listLocation);
      });
    return () => unsubscribe();
  }, []);

  const deleteLocation = (id) => {
    firestore().collection("location").doc(id).delete();
  };
  return (
    <LocationContext.Provider value={{ location, deleteLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
};
