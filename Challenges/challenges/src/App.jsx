import './App.css'
import FirstApp from "./Challenge2/FirstApp";
import SecondApp from './Challenge3/secondApp';

const App = () => {
  return (
    <div>
      <FirstApp/>
      <SecondApp value={30}/>
    </div>
  );
};

export default App;

