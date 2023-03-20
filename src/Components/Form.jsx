import { motion } from 'framer-motion';
import React, {
	useContext,
	useEffect,
	useState,
} from 'react';
import FormContext from '../Context/FormContext';
import Accessibiility from './Accessibility';
import Activity from './Activity';
import Budget from './Budget';
import Category from './Category';
import Participants from './Participants';
function Form() {
	const {
		activity,
		setActivity,
		loading,
		setLoading,
		page,
		setPage,
		formData,
	} = useContext(FormContext);

	const WelcomePrompt = `Welcome to Activi! let's get started by picking a category!`;
	const AccessibilityPrompt =
		'Great! Next pick an Accessibility level and budget. ';
	const participantsPrompt =
		' Finally, how many participants are there? (max:8)';
	const FormPrompt = [
		WelcomePrompt,
		AccessibilityPrompt,
		participantsPrompt,
	];
	const fetchActivity = ({
		category,
		minaccessibility,
		maxAccessibility,
		minBudget,
		maxBudget,
		participants,
	}) => {
		const url = `http://www.boredapi.com/api/activity?type=${formData.category}&
		&participants=${formData.participants}&minprice=${formData.minBudget}&maxprice=${formData.maxBudget}&minaccessibility=${formData.minAccessibility}&maxaccessibility=${formData.maxAccessibility}`;
		console.log(url);
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setActivity(() => {
					return data;
				});
			});
	};
	const PageDisplay = () => {
		if (page === 0) {
			return <Category />;
		} else if (page === 1) {
			return <Accessibiility />;
		} else {
			return <Participants />;
		}
	};

	return (
		<div className='form'>
			<div className='progressbar'>
				<div
					className='progressbar-target'
					style={{
						width:
							page === 0
								? '33.3%'
								: page == 1
								? '66.6%'
								: '100%',
						transitionDuration: '.3s',
						transitionTimingFunction: 'ease-in-out',
					}}></div>
			</div>
			<div className='form-container'>
				{activity ? (
					<Activity activity={activity} />
				) : loading ? (
					<p>loading...</p>
				) : (
					<>
						<div className='header'>
							<h1>{FormPrompt[page]}</h1>
						</div>
						<div className='body'> {PageDisplay()}</div>
						<div className='nav-btns-container'>
							<button
								className='nav-btns'
								disabled={page == 0}
								onClick={() => {
									setPage((currPage) => currPage - 1);
								}}>
								Prev
							</button>
							<button
								className='nav-btns'
								onClick={() => {
									if (page === FormPrompt.length - 1) {
										// BORED API CALL HERE
										setLoading((prev) => !prev);

										fetchActivity(formData);
									} else {
										setPage((currPage) => currPage + 1);
									}
								}}>
								{page === FormPrompt.length - 1
									? 'Submit'
									: 'Next'}
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Form;
