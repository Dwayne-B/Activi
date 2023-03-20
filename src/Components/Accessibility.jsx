import { motion } from 'framer-motion';
import { useContext } from 'react';
import FormContext from '../Context/FormContext';
import Budget from './Budget';
function Accessibiility() {
	const { formData, setFormData } = useContext(FormContext);
	const convertVal = (value) => {
		console.log(typeof value);
		if (value === '1') {
			console.log(value, '@ 1 ');

			setFormData((prevState) => {
				return {
					...prevState,

					minAccessibility: 0.0,
				};
			});
			return 0.25;
		} else if (value === '2') {
			console.log(value, '@ 2');

			setFormData((prevState) => {
				return {
					...prevState,

					minAccessibility: 0.25,
				};
			});
			return 0.5;
		} else if (value === '3') {
			console.log(value, '@ 3 ');

			setFormData((prevState) => {
				return {
					...prevState,

					minAccessibility: 0.5,
				};
			});
			return 1;
		} else {
			// free
			setFormData((prevState) => {
				return {
					...prevState,

					minAccessibility: 0.0,
				};
			});
			return 0.0;
		}
	};
	return (
		<div className='range-container'>
			<div className='accessibility-cnt'>
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
					Accessibility
				</motion.label>
				<motion.input
					transition={{
						duration: 0.4,
						delay: 1,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					type='range'
					name='maxAccessibility'
					value={
						formData.maxAccessibility === '0'
							? 0
							: formData.maxAccessibility === 0.25
							? 1
							: formData.maxAccessibility === 0.5
							? 2
							: formData.maxAccessibility === 1
							? 3
							: 0
					}
					id=''
					min='0'
					max='3'
					step='1'
					onChange={(e) => {
						setFormData((prevState) => {
							return {
								...prevState,
								[e.target.name]: convertVal(e.target.value),
							};
						});
						console.log(formData.maxAccessibility);
					}}
				/>
				<motion.span
					transition={{
						duration: 0.4,
						delay: 1,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}>
					{formData.maxAccessibility === '0'
						? 0
						: formData.maxAccessibility === 0.25
						? 1
						: formData.maxAccessibility === 0.5
						? 2
						: formData.maxAccessibility === 1
						? 3
						: 0}
				</motion.span>
			</div>
			<Budget />
		</div>
	);
}

export default Accessibiility;
