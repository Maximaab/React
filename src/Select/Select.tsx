import s from "./Select.module.css"
import {useState} from "react";


type BodyType = {
    title: string
    value: any
}
type SelectType = {
    items: BodyType[]
    value?: any
    onChange: (value: any) => void
}
export const Select = (props: SelectType) => {
    const [active, setActive] = useState(true)
    const [hovered, setHovered] = useState(props.value)

    const SelectItem = props.items.find(el => el.value === props.value)
    const HoveredItem = props.items.find(el => el.value === hovered)

    const onClickActiveHandler = () => {
        setActive(!active)
    }
    const onChangeValueHandler = (value:any) =>{
        props.onChange(value)
        onClickActiveHandler()
    }

    return (
        <>
            <div className={s.select + " " + (active ? s.active : " ")}>
                <span className={s.span} onClick={onClickActiveHandler}>{SelectItem && SelectItem.title}</span>
                {active &&
                    <div className={s.div}>
                        {props.items.map(el => <div
                            onMouseEnter={()=>{setHovered(el.value)}}
                            className={s.item + " " + (HoveredItem === el ? s.selected : " ")}
                            key={el.value}
                            onClick={()=>{onChangeValueHandler(el.value)}}
                        >{el.title}</div>)}
                    </div>
                }
            </div>
        </>
    )


};

