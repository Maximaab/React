import React, {useReducer} from 'react';
import {reducer, ToggleConstant} from "./reducer";

type AccordionType = {
    title:string
    // collapsed:boolean

}

export const UncontroledAccordion = (props:AccordionType) => {
    // const [collapsed, setCollapsed] = useState(false)
    let [state, dispatchCollapsed] = useReducer(reducer, {collapsed:false})

    // const OnButtomHandler =()=>{
    //     setOn(collapsed)
    // }
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{

                dispatchCollapsed({type:ToggleConstant})}}/>

            {!state.collapsed &&  <AccordionBody/>}
        </div>
    );
};

export type AccordionTytelProps = {
    title:string
    onClick:()=>void
}
function AccordionTitle(props:AccordionTytelProps) {
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}