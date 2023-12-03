import type {Meta, StoryObj} from '@storybook/react';
import {UncontroledInput} from './ControledInput';
import {ChangeEvent, useRef, useState} from "react";

const meta: Meta<typeof UncontroledInput> = {
    component: UncontroledInput,
};
export default meta;
type Story = StoryObj<typeof UncontroledInput>;

export const SixStory: Story = {
    render: function ControledInput() {
        const [value, setValue] = useState("")

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }

        return <><input value={value} onChange={onChangeHandler} /> -{value}</>

    }
}

export const SevenStory: Story = {
    render: function ControledCheckbox() {
        const [value, setValue] = useState(false)

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.checked)
        }

        return <>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>

        </>
    }
}
export const EightStory: Story = {
    render: function ControledCheckbox() {
        const [value, setValue] = useState("1")

        const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
            setValue(e.currentTarget.value)
        }

        return <select value={value} onChange={onChangeHandler}>
            <option>Kiev</option>
            <option>Doneck</option>
            <option>Charckow</option>
        </select>
    }
}