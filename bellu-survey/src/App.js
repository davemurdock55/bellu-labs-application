import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Survey from "./components/TestSurvey";
import Landing from "./components/Landing";


import HairAndScalp from "./components/HairAndScalp/HairAndScalp";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import History from "./components/History/History";
import GoalsAndPreferences from "./components/GoalsAndPreferences/GoalsAndPreferences";


function App ()
{

  const surveyData = [
    {
      section: 'Hair & Scalp',
      questions: [
        {
          id: 1, text: 'Select the hair type that most closely resembles your hair'
        },
        {
          id: 2, text: 'In general, your scalp is:'
        },
        {
          id: 3, text: 'In general, your hair is:'
        },
        {
          id: 4, text: 'Your hair is:'
        },
        {
          id: 5, text: 'How thick is your hair? Rub a single strand of hair between your fingers. What does it feel like?'
        },
        {
          id: 6, text: 'How long does it take for your hair to air dry?'
        },
        {
          id: 7, text: 'How long is your hair?'
        },
        {
          id: 8, text: 'Hair growth per month'
        },
      ],
    },
    {
      section: 'Lifestyle',
      questions: [
        {
          id: 9, text: 'Do you bleach?'
        },
        {
          id: 10, text: 'How often?'
        },
        {
          id: 11, text: 'Do you color?'
        },
        {
          id: 12, text: 'How often? What type?'
        },
        {
          id: 13, text: 'Heat use'
        },
        {
          id: 14, text: 'Which products'
        },
        {
          id: 15, text: 'Specific brands'
        },
        {
          id: 16, text: 'How often do you condition?'
        },
        {
          id: 17, text: 'Swim in chlorine'
        },
        {
          id: 18, text: 'Do you protect hair in chlorine?'
        },
        {
          id: 19, text: 'Wash frequency'
        },
        {
          id: 20, text: 'Grease after washing'
        },
        {
          id: 21, text: 'Wear in tight styles'
        },
        {
          id: 22, text: 'Hours outside'
        },
        {
          id: 23, text: 'Exercise frequency'
        },
        {
          id: 24, text: 'Grease after exercise'
        },
        {
          id: 25, text: 'Diet'
        },
        {
          id: 26, text: 'Medication'
        },
      ],
    },
    {
      section: 'History',
      questions: [
        {
          id: 27, text: 'Events that damaged hair more than normal?'
        },
        {
          id: 28, text: 'Experience hair loss?'
        },
        {
          id: 29, text: 'Pregnant, birth, or breastfeeding'
        },
        {
          id: 30, text: 'Menopause'
        },
        {
          id: 31, text: 'Age'
        },
        {
          id: 32, text: 'Any other important info?'
        },
        {
          id: 33, text: 'Flaking/dandruff problems?'
        },
        {
          id: 34, text: 'Describe dandruff if present'
        },
        {
          id: 35, text: 'What is your natural hair color'
        },
      ],
    },
    {
      section: 'Goals & Preferences',
      questions: [
        {
          id: 36, text: 'I would like my hair to be… (goals)'
        },
        {
          id: 37, text: 'Preferences for ingredients'
        },
        {
          id: 38, text: 'Products you are against or don’t like (and why)'
        },
        {
          id: 39, text: 'Sensitive skin/scalp?'
        },
      ],
    }
  ];

  return (
    <div className="text-gray-800">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Landing /> }></Route>
          <Route path="/hair-and-scalp" element={ <HairAndScalp /> }></Route>
          <Route path="/lifestyle" element={ <Lifestyle /> }></Route>
          <Route path="/history" element={ <History /> }></Route>  {/* might want to change it from /history to avoid any conflicts */ }
          <Route path="/goals-and-preferences" element={ <GoalsAndPreferences /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
