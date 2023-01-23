import React from 'react';
import { Data } from './SocialMediaData';

const SocialMedia = () => {
	return (
		<div className='icons'>
			{Data.map((item, index) => {
				return (
					<a
						href={item.path}
						target='_blank'
						className={item.styleClass}
						rel='noreferrer'
						key={index}
					>
						{item.icon}
					</a>
				);
			})}
		</div>
	);
};

export default SocialMedia;
