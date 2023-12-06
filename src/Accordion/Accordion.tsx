import React, {ChangeEvent, useState, MouseEvent} from 'react';

type BodyType = {
    title:string
    value:any
}

type AccordionType = {
    title:string
    collapsed:boolean
    onChange:(collapsed: boolean)=>void
    items:BodyType[]
    onClick:(value:any)=>void
}
export const Accordion = (props:AccordionType) => {
    return (
        <div>
            <AccordionTitle  title={props.title} onChange={props.onChange}  collapsed={props.collapsed}  />
            {!props.collapsed &&  <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyType = {
    items:BodyType[]
    onClick:(value:any)=>void
}
function AccordionBody(props:AccordionBodyType) {

    return (
        <ul>
            {props.items.map((el,index)=><li key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</li>)}

        </ul>
    )
}