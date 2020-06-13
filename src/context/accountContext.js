import React, { createContext,useEffect, useState } from 'react';

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
	const [ userData, setUserData ] = useState("");
	const [ isLoadingInformation, setLoadingInformation ] = useState(true);

	useEffect(() => {
		const user = localStorage.getItem('token_user');

		// if (user) setUserData(user);
		
		setUserData("Bearer asmdañsdas23d5");
		setLoadingInformation(false);	
	},[])


	return <AccountContext.Provider value={{ userData, isLoadingInformation  }}>
		{props.children}
	</AccountContext.Provider>;
}

export { AccountContext, AccountProvider };
