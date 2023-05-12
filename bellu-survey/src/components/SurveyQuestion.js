import React, { useState, useEffect } from 'react';
import SurveyOption from './SurveyOption';

export default function SurveyQuestion (props)
{
	const { id, question, options } = props;

	// Get the previously selected option for this question from local storage
	const [selectedOption, setSelectedOption] = useState(() =>
	{
		const storedOptions = JSON.parse(localStorage.getItem('surveyOptions')) || {};
		return storedOptions[id] || null;
	});

	// Update the selected option in local storage whenever it changes
	useEffect(() =>
	{
		const storedOptions = JSON.parse(localStorage.getItem('surveyOptions')) || {};
		localStorage.setItem('surveyOptions', JSON.stringify({
			...storedOptions,
			[id]: selectedOption,
		}));
	}, [id, selectedOption]);

	const handleOptionSelect = (optionId) =>
	{
		setSelectedOption(optionId);
	};

	return (
		<div className="mx-64">
			<h1 className="mt-10 text-2xl text-center">{ question }</h1>
			<div className="flex flex-wrap justify-center -mx-4">
				{ options.map((option) => (
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 py-4" key={ option.id }>
						<SurveyOption
							image={ option.image }
							text={ option.text }
							id={ option.id }
							subtitle={ option.subtitle }
							onOptionSelect={ handleOptionSelect }
							isSelected={ selectedOption === option.id }
						/>
					</div>
				)) }
			</div>
		</div>
	);
}
