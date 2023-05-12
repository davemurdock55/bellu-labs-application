import React, { useState } from 'react';
import SurveyOption from './SurveyOption';

export default function SurveyQuestion ({ id, section, title, subtitle, options, onSelect })
{
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionSelect = (optionValue) =>
	{
		setSelectedOption(optionValue);
		onSelect(id, optionValue);
	};

	return (
		<div className="survey-question">
			<h2>{ title }</h2>
			<h3>{ subtitle }</h3>
			<div className="survey-options">
				{ options.map((option) => (
					<SurveyOption
						key={ option.value }
						value={ option.value }
						subtitle={ option.subtitle }
						image={ option.image }
						selected={ option.value === selectedOption }
						onSelect={ handleOptionSelect }
					/>
				)) }
			</div>
		</div>
	);
}
