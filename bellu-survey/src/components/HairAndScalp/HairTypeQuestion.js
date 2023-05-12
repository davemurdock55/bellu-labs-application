import React, { useState } from 'react';
import SurveyOption from '../SurveyOption';
import SurveyQuestion from '../SurveyQuestion';

export default function HairTypeQuestion ()
{
	const Options = [
		{
			id: '1a',
			text: '1A',
			subtitle: 'Straight and Fine',
			image: '',
		},
		{
			id: '1b',
			text: '1B',
			subtitle: 'Straight and medium, more body than 1A',
			image: '',
		},
		{
			id: '1c',
			text: '1C',
			subtitle: 'Straight and coarse, hard to curl',
			image: '',
		},
		{
			id: '2a',
			text: '2A',
			subtitle: 'Very loose S-shape',
			image: '',
		},
		{
			id: '2b',
			text: '2B',
			subtitle: 'More defined S-shape, can be frizzy',
			image: '',
		},
		{
			id: '2c',
			text: '2C',
			subtitle: 'Defined  S-shaped waves',
			image: '',
		},
		{
			id: '3a',
			text: '3A',
			subtitle: 'Loose curls, can have combination texture',
			image: '',
		},
		{
			id: '3b',
			text: '3B',
			subtitle: 'Tight curls, can have combination texture',
			image: '',
		},
		{
			id: '3c',
			text: '3C',
			subtitle: 'Tight corkscrew curls',
			image: '',
		},
		{
			id: '4a',
			text: '4A',
			subtitle: 'Defined kinky coil with O-shaped pattern',
			image: '',
		},
		{
			id: '4b',
			text: '4B',
			subtitle: 'Tight coil with Z-shaped pattern, kink pattern less defined',
			image: '',
		},
		{
			id: '4c',
			text: '4C',
			subtitle: 'Very tight O-shaped pattern, no defined kink pattern unless up close',
			image: '',
		}

	];


	return (
		<SurveyQuestion options={ Options } />
	);
}