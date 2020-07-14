import React, { createContext, useEffect, useState } from "react";
import { auth } from "firebase";

const AccountContext = createContext();

function AccountProvider (props) {
	const [ isValidationUser, setValidationUser ] = useState(false);
	const [ isLoadingInformation, setLoadingInformation ] = useState(true);

	useEffect(() => {
		// OBSERVER USER
		const eventAuth = auth().onAuthStateChanged( (user)=>{
			if(user) setValidationUser(true);
			else setValidationUser(false);

			setLoadingInformation(false);
		})
		
		return () => eventAuth();
	},[])

	const validationUser = (email,password) => {
		auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			console.log("Usuario o contraseña incorrecta")
		});
	}

	const registerUser = (email,password) => {
		auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			console.log(error.code)
			console.log(error.message)
		});
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
