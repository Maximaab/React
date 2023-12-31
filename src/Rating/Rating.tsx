import React from 'react';

export type ValueNumberType = 1 | 2 | 3 | 4 | 5;


type RatingType = {
    value: ValueNumberType
    onClick:(value:ValueNumberType)=>void
}
export const Rating = (props: RatingType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )



};

type StarType = {
    selected: boolean
    value:ValueNumberType
    onClick:(value:ValueNumberType)=>void
}

function Star(props: StarType) {

    return <span onClick={()=>{props.onClick(props.value)}}> {props.selected ? <b>Star</b> : "Star"}</span>

    // if (props.selected === true) {
    //     return <span> <b>Star</b>  </span>
    // } else {
    //     return <span> Star  </span>
    // }

}