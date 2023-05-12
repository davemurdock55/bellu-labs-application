import React from 'react';

export default function Complete ()
{
	return (
		<div className="flex justify-center items-center h-1/2 p-10">
			<div>
				<h1 className="text-center text-3xl font-bold mb-4">Thank you for filling out the survey!</h1>
				<div className="text-center">
					<p className="text-gray-600">
						You will be sent your recommendations as soon as the lab process your results.
					</p>

					<div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
						<button type="submit" className="my-6 p-4 bg-[#e1c2bd] text-white font-bold">Download Results</button>
					</div>
				</div>
			</div>
		</div>
	);
}
