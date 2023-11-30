import type {Meta, StoryObj} from '@storybook/react';
import {UncontroledInput} from './UncontroledInput';
import {useArgs} from "@storybook/preview-api";
import {useState} from "react";

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