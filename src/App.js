import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import PracticalInfo from './components/PracticalInfo';


function App() {
  return (
    <div className="App">
      <h1>Curriculum Vitae</h1>
      <GeneralInfo />
      <EducationInfo />
      <PracticalInfo />
    </div>

  );
}

export default App;
