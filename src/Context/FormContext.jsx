import { createContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
	const [formData, setFormData] = useState({
		category: '',
		minAccessibility: 0,
		maxAccessibility: 0,
		minBudget: 0,
		maxBudget: 0,
		participants: 1,
	});
	const [page, setPage] = useState(0);

	const [activity, setActivity] = useState();
	const [loading, setLoading] = useState(false);

	return (
		<FormContext.Provider
			value={{
				formData,
				setFormData,
				page,
				setPage,
				activity,
				setActivity,
				loading,
				setLoading,
			}}>
			{children}
		</FormContext.Provider>
	);
}

export default FormContext;
