import React from 'react';

type RatingType = {
    value: number
}
export const Rating = (props: RatingType) => {

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )



};

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    if (props.selected === true) {
        return <span> <b>Star</b>  </span>
    } else {
        return <span> Star  </span>
    }

}