import React, { useContext } from 'react';

//Components
import TemplateBars from '../layers/TemplateBars';
import RoutesAuth from './subcomponents/RoutesAuth';
import RoutesNotAuth from './subcomponents/RoutesNotAuth';

//Extra
import { AccountContext } from '../../context/accountContext';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
	const { userData } = useContext(AccountContext);

	if (!userData) return <RoutesNotAuth />;

	return (
		<BrowserRouter>
			<TemplateBars>
				<RoutesAuth />
			</TemplateBars>
		</BrowserRouter>
	);
};

export default Router;
