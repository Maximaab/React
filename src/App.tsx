import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Rating, ValueNumberType} from "./Rating/Rating";
import OnOff from "./Components/onOff/onOff";
import {UncontroledAccordion} from "./UncontroledAccordion/UncontroledAccordion";
import {UncontroledRating} from "./UncontroledRating/UncontroledRating";
import {useState} from "react";
import UncontroledOnOff from "./Components/UncontroledOnOff/UncontroledOnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<ValueNumberType>(1)
    const [accordionCollapset, setAccordionCollapset] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)
    console.log('alalal', accordionCollapset)



    const handleChange = (collapsed: boolean) => setAccordionCollapset(collapsed)
  return (
      <div>
          <input type={"date"}/>
          <input checked={true} value={"yo"}/>
          <div >
              <UncontroledOnOff onChange={setOnOff} /> {setOnOff.toString()}
              {/*<OnOff on={onOff} onChange={setOnOff}/>*/}

          </div>
          {/*<div>*/}
          {/*    <UncontroledAccordion title={"Menu"}/>*/}
          {/*    <UncontroledAccordion title={"User"}/>*/}
          {/*    <UncontroledRating value={3}/>*/}
          {/*    <UncontroledRating value={3}/>*/}
          {/*</div>*/}
          <div>
              <Rating value={ratingValue} onClick={setRatingValue}/>
              Article 1
              <Accordion
                  title={"Accordion title"}
                  collapsed={accordionCollapset}
                  onChange={handleChange}
              />
              <Rating value={ratingValue} onClick={setRatingValue}/>
              Article 2
              <Accordion title={"Title of accordion"} collapsed={accordionCollapset} onChange={()=>{setAccordionCollapset(!accordionCollapset)}}/>
          </div>
      </div>

  );
}

export default App;
