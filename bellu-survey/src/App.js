import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSVLink } from "react-csv";



import Navbar from "./components/Navbar";
import Survey from "./components/TestSurvey";
import Landing from "./components/Landing";


import HairAndScalp from "./components/HairAndScalp/HairAndScalp";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import History from "./components/History/History";
import GoalsAndPreferences from "./components/GoalsAndPreferences/GoalsAndPreferences";
import Complete from './components/Complete';


function App ()
{


  return (
    <div className="text-gray-800">
      <form>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={ <Landing /> }></Route>
            <Route path="/hair-and-scalp/:question" element={ <HairAndScalp /> }></Route>
            <Route path="/lifestyle/:question" element={ <Lifestyle /> }></Route>
            <Route path="/history/:question" element={ <History /> }></Route>  {/* might want to change it from /history to avoid any conflicts */ }
            <Route path="/goals-and-preferences/:question" element={ <GoalsAndPreferences /> }></Route>
            <Route path="/complete" element={
              <>
                <Complete />
                {/* <CSVLink data={ formData }>Download CSV</CSVLink> */ }
              </>
            } />
          </Routes>
        </Router>
      </form>
    </div >
  );
}

export default App;
