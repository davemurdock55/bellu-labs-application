import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HairTypeQuestion from './HairTypeQuestion';
import ScalpConditionQuestion from './ScalpConditionQuestion';
// import other question components

export default function HairAndScalp ()
{
	const { question } = useParams();
	const navigate = useNavigate();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOptions, setSelectedOptions] = useState({});

	useEffect(() =>
	{
		if (!question)
		{
			navigate(`/hair-and-scalp/hair-type`);
		} else
		{
			const index = questions.findIndex((q) => q.id === question);
			setCurrentQuestionIndex(index);
		}
	}, [question]);

	const questions = [
		{ id: 'hair-type', component: HairTypeQuestion },
		{ id: 'scalp-condition', component: ScalpConditionQuestion }];
	// add other question components here  ];

	const currentQuestion = questions[currentQuestionIndex];
	const nextQuestion = questions[currentQuestionIndex + 1];

	function handleNext ()
	{
		if (nextQuestion)
		{
			navigate(`/hair-and-scalp/${nextQuestion.id}`);
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else
		{
			// do something when there are no more questions
		}
	}

	function handleBack ()
	{
		if (currentQuestionIndex > 0)
		{
			const prevQuestion = questions[currentQuestionIndex - 1];
			navigate(`/hair-and-scalp/${prevQuestion.id}`);
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	}

	function handleOptionSelect (optionId)
	{
		setSelectedOptions((prevState) => ({
			...prevState,
			[currentQuestion.id]: optionId,
		}));
	}

	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1">
				{ currentQuestion && <currentQuestion.component /> }
				<div className="mt-auto flex justify-between">
					<button
						onClick={ handleBack }
						className="my-10 py-2 px-4 bg-[#778996] text-white font-bold rounded-md mx-72"
					>
						Back
					</button>
					<button
						onClick={ handleNext }
						className="my-10 py-2 px-4 bg-[#778996] text-white font-bold rounded-md mx-72"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
