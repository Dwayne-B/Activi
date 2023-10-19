import { useContext } from 'react';
import Form from './Components/Form';
import Nav from './Components/Nav';
import { FormProvider } from './Context/FormContext.jsx';
import './css/App.scss';
function App() {
	return (
		<FormProvider>
			<div className='App'>
				<Nav />

				<Form />
			</div>
		</FormProvider>
	);
}

export default App;
