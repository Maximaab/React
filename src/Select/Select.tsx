import s from "./Select.module.css"
import {useState, KeyboardEvent, useEffect} from "react";


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

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const onClickActiveHandler = () => {
        setActive(!active)
    }
    const onChangeValueHandler = (value: any) => {
        props.onChange(value)
        onClickActiveHandler()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp")
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const PretendentElevent = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (PretendentElevent) {
                        props.onChange(PretendentElevent.value)
                        break
                    }

                }
            }
        if(e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select + " " + (active ? s.active : " ")} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={s.span} onClick={onClickActiveHandler}>{SelectItem && SelectItem.title}</span>
                {active &&
                    <div className={s.div}>
                        {props.items.map(el => <div
                            onMouseEnter={() => {
                                setHovered(el.value)
                            }}
                            className={s.item + " " + (HoveredItem === el ? s.selected : " ")}
                            key={el.value}
                            onClick={() => {
                                onChangeValueHandler(el.value)
                            }}

                        >{el.title}</div>)}
                    </div>
                }
            </div>
        </>
    )


};

