import React, { createContext, useEffect, useState } from "react";
import { auth } from "firebase";

const AccountContext = createContext();

function AccountProvider (props) {
	const [ isValidationUser, setValidationUser ] = useState(false);
	const [ isLoadingInformation, setLoadingInformation ] = useState(true);

	useEffect(() => {
		// OBSERVER USER
		const eventAuth = auth().onAuthStateChanged(user => {
			if(user) setValidationUser(true);
			else setValidationUser(false);

			setLoadingInformation(false);
		})
		
		return () => eventAuth();
	},[])

	const validationUser = async (email,password) => {
		try {
			await auth().signInWithEmailAndPassword(email, password)
		}catch(e){
			console.log(e);
			alert("Usuario y Contraseña erronea.");
		}
	}

	const registerUser = async (email,password) => {
		try {
			await auth().createUserWithEmailAndPassword(email, password);
		}catch(error){
			console.log(error.code)
			console.log(error.message)
		}
	}

	const values = {
		isValidationUser,
		isLoadingInformation,
		validationUser,
		registerUser
	}

	return (
		<AccountContext.Provider value={values}>
			{props.children}
		</AccountContext.Provider>
	);
}

export { AccountContext, AccountProvider };
