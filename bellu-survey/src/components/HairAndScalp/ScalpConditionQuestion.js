import React, { useState } from 'react';
import SurveyOption from '../SurveyOption';

export default function ScalpConditionQuestion ()
{
	const [selectedOption, setSelectedOption] = useState(null);

	const Options = [
		{
			id: 'scalp-dry',
			text: 'Dry',
			subtitle: '',
			image: '',
		},
		{
			id: 'scalp-avg',
			text: 'Average',
			subtitle: '',
			image: '',
		},
		{
			id: 'scalp-greasy',
			text: 'Greasy',
			subtitle: '',
			image: '',
		},
	];


	const handleOptionSelect = (optionId) =>
	{
		setSelectedOption(optionId);
	};

	return (
		<div className="mx-64">
			<h1 className="mt-10 text-2xl text-center">
				In general, your scalp is:
			</h1>
			<h2 className="mt-3 mb-10 text-xl text-center text-[#778996]">
				Natural hair is treatment, product, and style-free.
			</h2>
			<div className="flex flex-wrap justify-center -mx-4">
				{ Options.map((type) => (
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4" key={ type.id }>
						<SurveyOption
							image={ type.image }
							text={ type.text }
							id={ type.id }
							subtitle={ type.subtitle }
							onOptionSelect={ handleOptionSelect }
							isSelected={ selectedOption === type.id }
						/>
					</div>
				)) }
			</div>
			<div className="mt-8 text-center">
				{ selectedOption && (
					<p className="text-lg font-bold">
						You have selected option { selectedOption }
					</p>
				) }
			</div>
		</div>
	);
}
