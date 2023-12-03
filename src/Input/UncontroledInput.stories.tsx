import type {Meta, StoryObj} from '@storybook/react';
import {UncontroledInput} from './UncontroledInput';
import {useArgs} from "@storybook/preview-api";
import {useRef, useState} from "react";

const meta: Meta<typeof UncontroledInput> = {
    component: UncontroledInput,
};
export default meta;
type Story = StoryObj<typeof UncontroledInput>;

export const FourStory: Story = {
    render: function UncontroledInput() {
        const [value, setValue] = useState("")

        return <><input onChange={(event)=>{
            const ActualInput = event.currentTarget.value
            setValue(ActualInput)
        }}/> -{value}</>

    }
}

export const FiveStory: Story = {
    render: function UncontroledInput() {
        const [value, setValue] = useState("")
        const inputRef = useRef<HTMLInputElement>(null);

        const save = () => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }
        return <div>
            <input ref={inputRef}/>
            <button onClick={save}>+</button>
            - actual value {value}
        </div>

    }
}