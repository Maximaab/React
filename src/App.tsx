import './App.css';
import OnOff from "./Components/onOff/OnOff";
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Rating/Rating";


function App() {
    console.log('alalal')
  return (
      <div>
          <input type={"date"}/>
          <input checked={true} value={"yo"}/>
          <div >
              <OnOff on={false}/>
              <OnOff on={true}/>
              <OnOff on={false}/>
          </div>
          <div>
              <Rating value={4}/>
              Article 1
              <Accordion title={"Accordion title"}/>
              <Rating value={3}/>
              Article 2
              <Accordion title={"Title of accordion"}/>
          </div>
      </div>

  );
}

export default App;
