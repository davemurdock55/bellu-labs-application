import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Survey from "./components/TestSurvey";
import Landing from "./components/Landing";
import HairAndScalp from "./components/HairAndScalp/HairAndScalp";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import History from "./components/History/History";
import GoalsAndPreferences from "./components/GoalsAndPreferences/GoalsAndPreferences";


function App ()
{
  return (
    <Router>
      {/* <Navbar /> */ }
      <div style={ { marginTop: '90px' } }></div>
      <Routes>
        <Route path="/" element={ <Landing /> }></Route>
        <Route path="/hair-and-scalp" element={ <HairAndScalp /> }></Route>
        <Route path="/lifestyle" element={ <Lifestyle /> }></Route>
        <Route path="/history" element={ <History /> }></Route>  {/* might want to change it from /history to avoid any conflicts */ }
        <Route path="/goals-and-preferences" element={ <GoalsAndPreferences /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
