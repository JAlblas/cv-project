import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import PracticalInfo from './components/PracticalInfo';


function App() {
  return (
    <div className="App">
      <p>CV</p>
      <GeneralInfo />
      <EducationInfo />
      <PracticalInfo />
    </div>

  );
}

export default App;
