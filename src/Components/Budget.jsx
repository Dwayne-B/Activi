import { motion } from 'framer-motion';
import { useContext } from 'react';
import FormContext from '../Context/FormContext';

function Budget() {
	const { formData, setFormData } = useContext(FormContext);
	const budgetArr = ['Free', '$', '$$', '$$$'];
	const convertValue = (value) => {
		if (value === '$') {
			setFormData((prevState) => {
				return {
					...prevState,

					minBudget: 0.2,
				};
			});
			return 0.4;
		} else if (value === '$$') {
			setFormData((prevState) => {
				return {
					...prevState,

					minBudget: 0.4,
				};
			});
			return 0.6;
		} else if (value === '$$$') {
			setFormData((prevState) => {
				return {
					...prevState,

					minBudget: 0.6,
				};
			});
			return 0.8;
		} else {
			// free
			setFormData((prevState) => {
				return {
					...prevState,

					minBudget: 0.0,
				};
			});
			return 0.0;
		}
	};
	return (
		<div className='budget-cnt'>
			{/* budget */}
			<motion.label
				initial='hidden'
				whileInView='visible'
				viewport={{
					margin: '19000px',
				}}
				transition={{
					duration: 0.4,
					delay: 0.5,
				}}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0 },
				}}
				htmlFor='maxAccessibility'>
				Budget
			</motion.label>
			{budgetArr.map((val, i) => {
				return (
					<motion.input
						transition={{
							duration: 0.4,
							delay: 1,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						key={i}
						type='button'
						name='maxBudget'
						value={val}
						id=''
						onClick={(e) => {
							console.log('clicked', formData.maxBudget);
							setFormData((prevState) => {
								return {
									...prevState,

									[e.target.name]: convertValue(
										e.target.value,
									),
								};
							});
							console.log(formData.maxBudget);

							// if (formData[e.target.name] === 0.4) {
							// 	console.log(
							// 		formData[e.target.name],
							// 		formData['minBudget'],
							// 	);
							// 	setFormData((prevState) => {
							// 		return {
							// 			...prevState,

							// 			minBudget: 0.2,
							// 		};
							// 	});
							// }
							// else if (formData[e.target.name] === 0.6) {
							// 			setFormData((prevState) => {
							// 				return {
							// 					...prevState,

							// 					minBudget: 0.4,
							// 				};
							// 			});
							// 	} else if (formData[e.target.name] === 0.8) {
							// 		setFormData((prevState) => {
							// 			return {
							// 				...prevState,

							// 				minBudget: 0.6,
							// 			};
							// 		});
							// 	} else {
							// 		setFormData((prevState) => {
							// 			return {
							// 				...prevState,

							// 				minBudget: 100.0,
							// 			};
							// 		});
							// 	}
							//
						}}
					/>
				);
			})}
		</div>
	);
}

export default Budget;
