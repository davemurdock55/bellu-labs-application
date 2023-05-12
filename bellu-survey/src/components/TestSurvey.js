import { Formik, Field, Form } from "formik";
import { CSVLink } from "react-csv";

function Survey ()
{
	const questions = [
		"Question 1",
		"Question 2",
		// add more questions here
		"Question 39",
	];

	const initialValues = questions.reduce(
		(acc, question) => ({ ...acc, [question]: "" }),
		{}
	);

	const onSubmit = (values) =>
	{
		console.log(values); // output form values to console
	};

	return (
		<div>
			<Formik initialValues={ initialValues } onSubmit={ onSubmit }>
				{ ({ values }) => (
					<Form>
						{ questions.map((question) => (
							<div key={ question }>
								<label htmlFor={ question }>{ question }</label>
								<Field type="text" name={ question } id={ question } />
							</div>
						)) }
						<button type="submit">Submit</button>
					</Form>
				) }
			</Formik>
			<CSVLink data={ [initialValues] } filename={ "survey-results.csv" }>
				Download CSV
			</CSVLink>
		</div>
	);
}

export default Survey;
