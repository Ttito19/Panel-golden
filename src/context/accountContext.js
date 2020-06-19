import React, { createContext, useEffect, useState } from "react";
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

function AccountProvider(props) {
  const [isValidationUser, setValidationUser] = useState(false);
  const [isLoadingInformation, setLoadingInformation] = useState(true);

  const firebase = useFirebaseApp();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setValidationUser(true);
      } else {
        setValidationUser(false);
      }
      setLoadingInformation(false);
    });
  }, []);

  // OBSERVER USER

  const validationUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log("Usuario o contraseña incorrecta");
      });
  };

  const registerUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const closeSession = () => {};

  const values = {
    isValidationUser,
    isLoadingInformation,
    validationUser,
    registerUser,
  };

  return (
    <AccountContext.Provider value={values}>
      {props.children}
    </AccountContext.Provider>
  );
}

export { AccountContext, AccountProvider };
