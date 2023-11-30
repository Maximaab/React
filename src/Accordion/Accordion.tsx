import React, {ChangeEvent, useState, MouseEvent} from 'react';
type AccordionType = {
    title:string
    collapsed:boolean
    onChange:(collapsed: boolean)=>void

}
export const Accordion = (props:AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}  collapsed={props.collapsed} />
            {!props.collapsed &&  <AccordionBody/>}
        </div>
    );
};



type AccordionTitleType = {
    title:string
collapsed:boolean
    onChange:(collapsed: boolean)=>void


}
function AccordionTitle(props:AccordionTitleType) {

    const onHandleCollapsed = (e: MouseEvent<HTMLElement>) => {
      //  console.log('event', e)
       // if (e.ctrlKey) alert(2222)

        props.onChange(!props.collapsed)
    }

    return (
        <h3 onClick={onHandleCollapsed} >{props.title}</h3>
    )
}

function AccordionBody() {

    const [value, setValue] = useState<string>('')


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.value)
    }

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>


            <input type="text" value={value} onChange={handleChange}/>

        </ul>
    )
}