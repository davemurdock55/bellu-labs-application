import React from 'react';
import SurveyOption from '../SurveyOption';

export default function HairTypeQuestion ()
{
	return (
		<div className="mx-64">
			<h1 className="mt-10 text-2xl text-center">
				Select the hair type that most closely resembles your hair
			</h1>
			<div className="flex flex-wrap justify-center -mx-4">
				{ hairTypes.map((type) => (
					<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4" key={ type.id }>
						<SurveyOption
							image={ type.image }
							text={ type.text }
							id={ type.id }
							subtitle={ type.subtitle }
						/>
					</div>
				)) }
			</div>
		</div>
	);
}

const hairTypes = [
	{
		id: 'straight',
		text: 'Straight',
		subtitle: '',
		image: '',
		required: true,
	},
	// add other hair types here
];
