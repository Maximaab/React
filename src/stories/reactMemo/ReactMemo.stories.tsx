import {Meta, StoryObj} from "@storybook/react";
import {ReactMemo} from "./ReactMemo";

const meta: Meta<typeof ReactMemo> = {
    component: ReactMemo,
};

export default meta;
type Story = StoryObj<typeof ReactMemo>;

export const Ninestory: Story = {
    render:function Component(args) {

        return <ReactMemo/>
    }
}