import {Meta, StoryObj} from "@storybook/react";
import {ReactMemo} from "./ReactMemo";
import {useMemo, useState} from "react";

const meta: Meta<typeof ReactMemo> = {
    component: ReactMemo,
};

export default meta;
type Story = StoryObj<typeof ReactMemo>;

export const Ninestory: Story = {
    render:function Component(args) {
        const [a, setA] = useState(0)
        const [b, setB] = useState(0)

        let resultA = 1
        let resultB = 1

        resultA = useMemo(()=>{
            let TemplarA = 1
            for (let i= 1; i <= a; i++) {

                TemplarA = TemplarA * i
            }
            return TemplarA
        },[a])


        for (let i= 1; i <= a; i++) {

            resultA = resultA * i
        }
        for (let i= 1; i <= b; i++) {

            resultB = resultB * i
        }



        return <>
            <input value={a} onChange={(e)=>setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
    <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {b}</div>
        </>

    }
}