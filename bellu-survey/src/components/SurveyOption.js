import React from 'react';

export default function SurveyOption (props)
{
	const { image, text, id, subtitle } = props;

	return (
		<label htmlFor={ id } className="inline-block p-10 border-2 border-solid border-[#778996] rounded-md cursor-pointer">
			<input type="radio" id={ id } name="option" value={ text } required="true" className="hidden" />
			<div className="flex flex-col items-center justify-center w-full h-full">
				{ image && <img src={ image } alt={ id } className="w-32 h-32 mb-2" /> }
				<h2 className="text-md">{ text }</h2>
				{ subtitle && <h3 className="text-sm">{ subtitle }</h3> }
			</div>
		</label>
	);
}
