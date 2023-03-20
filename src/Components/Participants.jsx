import { motion } from 'framer-motion';
import { useContext } from 'react';
import FormContext from '../Context/FormContext';

function Participants() {
	const { formData, setFormData } = useContext(FormContext);
	return (
		<div className='participants-container'>
			<motion.input
				transition={{
					duration: 0.4,
					delay: 0.5,
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				name='participants'
				type='number'
				placeholder='1-8'
				value={formData.participants}
				onChange={(e) => {
					setFormData((prevState) => {
						return {
							...prevState,
							[e.target.name]: e.target.value,
						};
					});
				}}
			/>
		</div>
	);
}

export default Participants;
