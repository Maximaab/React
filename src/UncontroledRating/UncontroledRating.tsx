import React, {useState} from 'react';

export type RatingNumberType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingType = {
    defaultValue?:RatingNumberType
    onChange:(value:RatingNumberType)=>void
}
export const UncontroledRating = (props: RatingType) => {
    const [value, setValue] = useState<RatingNumberType>(props.defaultValue ? props.defaultValue : 0)


    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1); props.onChange(1)}}  /><button>1</button>
            <Star selected={value > 1} setValue={()=>{setValue(2); props.onChange(2)}} /><button>2</button>
            <Star selected={value > 2} setValue={()=>{setValue(3); props.onChange(3)}} /><button>3</button>
            <Star selected={value > 3} setValue={()=>{setValue(4); props.onChange(4)}} /><button>4</button>
            <Star selected={value > 4} setValue={()=>{setValue(5); props.onChange(5)}} /><button>5</button>
        </div>
    )



};

type StarType = {
    selected: boolean

    setValue:()=>void
}

function Star(props: StarType) {


return <span onClick={()=>{props.setValue()}}>{props.selected ? <b>star</b> : "star"}   </span>
}
