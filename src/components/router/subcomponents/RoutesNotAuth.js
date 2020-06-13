import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../screens/Login';

const RoutesNotAuth = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default RoutesNotAuth;
