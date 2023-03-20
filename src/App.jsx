import { useContext } from 'react';
import Form from './components/Form';
import Nav from './components/Nav';
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
