import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import HairAndScalp from './components/HairAndScalp/HairAndScalp';
import Lifestyle from './components/Lifestyle/Lifestyle';
import History from './components/History/History';
import GoalsAndPreferences from './components/GoalsAndPreferences/GoalsAndPreferences';
import Complete from './components/Complete';

function App ()
{
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) =>
  {
    event.preventDefault(); // prevent the form from submitting normally
    const form = event.target;
    const data = new FormData(form); // create a new FormData object from the form
    const formDataObject = {}; // create an empty object to hold the form data
    for (let [key, value] of data.entries())
    {
      formDataObject[key] = value; // set each form field value as a property on the object
    }
    setFormData(formDataObject); // set the object as the state of the component
  };

  const [answers, setAnswers] = useState([]);

  function handleAnswerSelect (questionId, optionId)
  {
    const newAnswer = { questionId, optionId };
    setAnswers([...answers, newAnswer]);
  }


  return (
    <div className="text-gray-800">
      <form onSubmit={ handleSubmit }>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="/hair-and-scalp/:question" element={ <HairAndScalp onAnswerSelect={ handleAnswerSelect } /> } />
            <Route path="/lifestyle/:question" element={ <Lifestyle /> } />
            <Route path="/history/:question" element={ <History /> } />
            <Route
              path="/goals-and-preferences/:question"
              element={ <GoalsAndPreferences /> }
            />
            <Route
              path="/complete"
              element={
                <>
                  <Complete />
                  <div style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
                    <button type="submit" className="mb-6 p-4 bg-[#e1c2bd] text-white font-bold">Submit</button>
                    <CSVLink data={ [formData] } className="mb-6 p-4 bg-[#778996] text-white font-bold">Download Results</CSVLink>
                    {/* Right now I'm not able to get the form data submitted, so when you download, it downloads nothing for now */ }
                  </div>

                </>
              }
            />
          </Routes>
        </Router>
      </form>
    </div>
  );
}

export default App;
