import React, { createContext,useEffect, useState  } from 'react';
import { useFirebaseApp } from "reactfire";


const AccountContext = createContext();

// class AccountProvider extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			userData: '',
// 			isLoadingInformation: true
// 		};
// 	}

// 	//CICLOS DE VIDA DE UN COMPONENTE
// 	//componentWillMount se ejecuta antes del render
// 	componentWillMount() {
// 		const user = localStorage.getItem('token_user');

// 		if (user) {
// 			this.setState({
// 				userData: user
// 			});
// 		}

// 		this.setState({ isLoadingInformation: false });
// 	}

// 	//componentDidMount se ejecuta despues del render
// 	componentDidMount() {}

// 	render() {
// 		const { state, props } = this;
// 		const { children } = props;

// 		return <AccountContext.Provider value={{ ...state }}>{children}</AccountContext.Provider>;
// 	}
// }

function AccountProvider (props) {
	const [ isValidationUser, setValidationUser ] = useState(false);
	const [ isLoadingInformation, setLoadingInformation ] = useState(true);
	/*
	id , username , password , nickname , avatar , tipoUsuario ...
	*/
	const [ userData , setUserData ] = useState({})
	
	const auth = useFirebaseApp().auth()
	const db = useFirebaseApp().firestore()


	useEffect(() => {
		setLoadingInformation(false);	
	},[])

	// OBSERVER USER
	auth.onAuthStateChanged( (user)=>{
		if(user){
			setValidationUser(true)
		}else {
			setValidationUser(false)
		}
	})


	const validationUser = (email,password) => {
		auth.signInWithEmailAndPassword(email, password)
		.then( (user)=>{
			console.log("Inicio session correctamente")
		})
		.catch( (e)=>{
			console.log("Usuario o contraseña incorrecta")
		})
	}

	const registerUser = (user) => {
		auth.createUserWithEmailAndPassword(user.email, user.password)
		.then( u => { 
			db.collection("admin").add({
				id : u.user.uid, 
				avatar : "default-avatar",
				name : user.nickName,
				type: user.tipoUsuario,
			})
			.then((doc)=>{ console.log("Administrador Creado correctamente") })
			.catch((e)=>{ console.log(e) })

			console.log("Usuario Creado exitosamente")
		})
		.catch( (e) => { console.log(e) } );
	}

	const closeSession = () => {
		auth.signOut()
		.then(()=>{
			// -- 
			console.log('Saliendo de la session')
		}).catch((e)=>{
			console.log(e)
		})
	}



	const values = {
		isValidationUser,
		isLoadingInformation,
		userData,
		validationUser,
		registerUser,
		closeSession
	}



	return (
		<AccountContext.Provider value={values}>
			{props.children}
		</AccountContext.Provider>
	);
}

export { AccountContext, AccountProvider };

