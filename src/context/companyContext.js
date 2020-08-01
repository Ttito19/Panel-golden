import React, { createContext, useState, useEffect } from "react";
import { firestore } from "firebase";
export const CompanyContext = createContext();

export const CompanyProvider = (props) => {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection("company")
      .onSnapshot((snapshot) => {
        const listCompany = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompany(listCompany);
      });
    return () => unsubscribe();
  }, []);

  return (
    <CompanyContext.Provider value={{ company }}>
      {props.children}
    </CompanyContext.Provider>
  );
};
