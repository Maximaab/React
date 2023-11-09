import React, {useState} from 'react';

type RatingType = {
    value: number
}
export const UncontroledRating = (props: RatingType) => {
    const [value, setValue] = useState(0)


    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/><button>1</button>
            <Star selected={value > 1} setValue={setValue} value={2}/><button>2</button>
            <Star selected={value > 2} setValue={setValue} value={3}/><button>3</button>
            <Star selected={value > 3} setValue={setValue} value={4}/><button>4</button>
            <Star selected={value > 4} setValue={setValue} value={5}/><button>5</button>
        </div>
    )



};

type StarType = {
    selected: boolean
    value:1 | 2 | 3 | 4 | 5
    setValue:(value:1 | 2 | 3 | 4 | 5)=>void
}

function Star(props: StarType) {


return <span onClick={()=>{props.setValue(props.value)}}>{props.selected ? <b>star</b> : "star"}   </span>
}
