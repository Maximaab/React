import React, {useEffect, useState} from 'react';

// let CurrentData = new Date
// let HourData = CurrentData.getHours().toString()
// let MinuteData = HourData + CurrentData.getMinutes().toString()
// let SecondData = MinuteData + CurrentData.getSeconds().toString()
// console.log(SecondData)
const get2digitstring = (num:number) => num < 10 ? "0" + num : num
export const UseEffect = () => {
    const [count, setCount] = useState(new Date())
    const [Clock, setClock] = useState()



    useEffect(() => {
        const IntervalId = setInterval(() => {
            setCount(new Date())
        }, 1000)
        return ()=>{
            clearInterval(IntervalId)
        }
    }, [])


    return (
        <div>
            <span>{get2digitstring(count.getHours())}</span>
            :
            <span>{get2digitstring(count.getMinutes())}</span>
            :
            <span>{get2digitstring(count.getSeconds())}</span>
        </div>

    );
};

export default UseEffect;