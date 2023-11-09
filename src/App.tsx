import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Rating/Rating";
import OnOff from "./Components/onOff/onOff";
import {UncontroledAccordion} from "./UncontroledAccordion/UncontroledAccordion";
import {UncontroledRating} from "./UncontroledRating/UncontroledRating";


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
              <UncontroledAccordion title={"Menu"}/>
              <UncontroledAccordion title={"User"}/>
              <UncontroledRating value={3}/>
              <UncontroledRating value={3}/>
          </div>
          {/*<div>*/}
          {/*    <Rating value={4}/>*/}
          {/*    Article 1*/}
          {/*    <Accordion title={"Accordion title"} collapsed={true}/>*/}
          {/*    <Rating value={3}/>*/}
          {/*    Article 2*/}
          {/*    <Accordion title={"Title of accordion"} collapsed={false}/>*/}
          {/*</div>*/}
      </div>

  );
}

export default App;
