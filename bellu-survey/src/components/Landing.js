import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing ()
{
	return (
		<div className="flex justify-center items-center h-1/2 p-10">
			<div>
				<h1 className="text-center text-3xl font-bold mb-4">Congratulations!</h1>
				<div className="text-center">
					<p className="text-gray-600">
						You are one step closer to achieving the happier, healthier hair of your dreams! We are excited to tell you what we learned about your hair.
					</p>
					<p className="text-gray-600">
						Remember, this report is in depth (AKA very long and sciencey). Feel free to take a break from reading before coming back to the report if you need one. Before we get started, let’s briefly go over the content for the in-depth analysis.
					</p>
					<p className="text-gray-600">
						In this report we will give you a little refresher on hair anatomy.<br /><br />
						Then, we’ll show you how your hair health compares to other Bellu customers.
					</p>
					<p className="text-gray-600">
						Next, we’ll show you what we learned from the micrographs (microscopic images) of your hair cuticle. We’ll also throw in a few images of your hair so you can see what we are seeing.
					</p>
					<p className="text-gray-600">
						Finally, we will repeat our product recommendations to you and give you even more detail about the lifestyle recommendations.
					</p>
					<div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
						<Link to="/hair-and-scalp" className="my-6 p-4 bg-[#e1c2bd] text-white font-bold">Let’s get into it!</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
