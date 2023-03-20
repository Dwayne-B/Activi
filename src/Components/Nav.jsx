import { motion } from 'framer-motion';
import React from 'react';
function Nav() {
	const icon = {
		hidden: {
			pathLength: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			pathLength: 1,
			fill: 'rgba(255, 255, 255, 1)',
		},
	};
	return (
		<div className='nav'>
			<svg
				width='161'
				height='24'
				viewBox='0 0 161 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<motion.path
					d='M21.336 23H0.344L10.84 0.247999L21.336 23ZM2.2 21.816H19.48L10.84 3.064L2.2 21.816ZM31.6795 14.488C31.6795 15.896 32.0315 17.1973 32.7355 18.392C33.4608 19.5867 34.4208 20.536 35.6155 21.24C36.8315 21.944 38.1435 22.296 39.5515 22.296C41.0022 22.296 42.3142 22.008 43.4875 21.432C44.6608 20.856 45.5782 20.056 46.2395 19.032C46.9222 18.008 47.2742 16.856 47.2955 15.576H48.4475C48.4475 17.048 48.0528 18.392 47.2635 19.608C46.4955 20.8027 45.4288 21.752 44.0635 22.456C42.7195 23.1387 41.2155 23.48 39.5515 23.48C37.9302 23.48 36.4262 23.0747 35.0395 22.264C33.6528 21.4533 32.5542 20.3653 31.7435 19C30.9328 17.6133 30.5275 16.1093 30.5275 14.488V9.24C30.5275 7.61867 30.9222 6.12533 31.7115 4.76C32.5222 3.37333 33.6102 2.27467 34.9755 1.464C36.3622 0.653332 37.8662 0.247999 39.4875 0.247999C41.1302 0.247999 42.6235 0.599999 43.9675 1.304C45.3328 1.98667 46.4102 2.936 47.1995 4.152C47.9888 5.34667 48.3835 6.68 48.3835 8.152H47.2315C47.2102 6.872 46.8582 5.72 46.1755 4.696C45.4928 3.672 44.5648 2.872 43.3915 2.296C42.2395 1.72 40.9382 1.432 39.4875 1.432C38.0795 1.432 36.7782 1.784 35.5835 2.488C34.3888 3.192 33.4395 4.14133 32.7355 5.336C32.0315 6.53067 31.6795 7.832 31.6795 9.24V14.488ZM76.807 0.727999V1.912H68.391V23H67.239V1.912H58.823V0.727999H76.807ZM103.535 0.727999V1.912H96.8785V21.816H103.535V23H89.1025V21.816H95.7265V1.912H89.1025V0.727999H103.535ZM116.246 0.727999L124.758 21.432L133.27 0.727999H134.518L125.366 23H124.118L114.966 0.727999H116.246ZM160.51 0.727999V1.912H153.854V21.816H160.51V23H146.078V21.816H152.702V1.912H146.078V0.727999H160.51Z'
					fill='transparent'
					strokeWidth='.5'
					stroke='rgb(255, 255, 255)'
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						duration: 3,
					}}
				/>
				<defs>
					<linearGradient
						id='paint0_linear_1_4'
						x1='82.5'
						y1='-6'
						x2='82.5'
						y2='26'
						gradientUnits='userSpaceOnUse'>
						<stop stop-color='white' />
						<stop
							offset='0.9999'
							stop-color='white'
							stop-opacity='0.6'
						/>
						<stop
							offset='1'
							stop-color='white'
							stop-opacity='0'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

export default Nav;
