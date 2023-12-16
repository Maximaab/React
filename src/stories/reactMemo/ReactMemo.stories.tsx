import {Meta, StoryObj} from "@storybook/react";
import {ReactMemo} from "./ReactMemo";
import {useState} from "react";

const meta: Meta<typeof ReactMemo> = {
    component: ReactMemo,
};

export default meta;
type Story = StoryObj<typeof ReactMemo>;

export const Ninestory: Story = {
    render:function Component(args) {
        const [users, setUsers] = useState(["Oleg", "Ostap", "Anton", "Armagedon"])
        const [count, setCount] = useState(0)


        return <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ReactMemo
                count={count}
                users={users}/>

        </>
    }
}