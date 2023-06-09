import React, { useEffect, useState } from 'react';

export default function SurveyOption (props)
{
	const { image, text, id, subtitle, groupName, onOptionSelect } = props;

	const [isSelected, setIsSelected] = useState(
		JSON.parse(localStorage.getItem(id)) || false
	);

	const handleOptionChange = () =>
	{
		setIsSelected(true);
		onOptionSelect(id);
	};

	useEffect(() =>
	{
		localStorage.setItem(id, JSON.stringify(isSelected));
	}, [id, isSelected]);

	return (
		<label
			htmlFor={ id }
			className={ `inline-block p-6 border-2 border-solid rounded-md cursor-pointer text-[#778996] flex flex-col items-center justify-center ${isSelected ? 'border-[#e1c2bd] text-[#e1c2bd]' : 'border-[#778996]'
				}` }
		>
			<input
				type="radio"
				id={ id }
				name={ groupName }
				value={ id }
				checked={ isSelected }
				className="hidden"
				onChange={ handleOptionChange }
			/>
			<div className="flex flex-col items-center justify-center w-full h-full">
				{ image && <img src={ image } alt={ id } className="w-32 h-32 mb-2" /> }
				<h2 className="text-md font-bold">{ text }</h2>
				{ subtitle && <h3 className="text-xs text-center">{ subtitle }</h3> }
			</div>
		</label>
	);
}
