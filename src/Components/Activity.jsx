import { useContext } from 'react';
import FormContext from '../Context/FormContext';

function Activity({ activity }) {
	const { page, setPage, setActivity, setLoading } =
		useContext(FormContext);
	console.log('activity', activity);
	return (
		<div className='activity-cnt'>
			{activity.error ? (
				<p>{activity.error}</p>
			) : (
				<>
					<h1>You Should...</h1>
					<p>{activity.activity}</p>
				</>
			)}
			{activity.link ? (
				<p>
					here is a{' '}
					<a target='_blank' href={activity.link}>
						LINK
					</a>{' '}
					to help you get started
				</p>
			) : null}
			<button
				onClick={() => {
					setPage(0);
					setActivity(undefined);
					setLoading((prev) => !prev);
				}}>
				Reset
			</button>
		</div>
	);
}

export default Activity;
