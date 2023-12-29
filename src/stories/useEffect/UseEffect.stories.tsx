import {Meta, StoryObj} from "@storybook/react";
import UseEffect from "./UseEffect";
import {useEffect, useState} from "react";

const meta: Meta<typeof UseEffect> = {
    component: UseEffect,
};

export default meta;
type Story = StoryObj<typeof UseEffect>;

export const SomeEffect: Story = {
    render: function Component(args) {
        const [count, setCount] = useState(0)

        useEffect(() => {
            setTimeout(() => {
                document.title = count.toString()
            })
        })


        return <>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
        </>
    }
}
