import type {Meta, StoryObj} from '@storybook/react';
import {Rating} from './Rating';
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof Rating> = {
    component: Rating,
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const SecondStory: Story = {
    render: function Component(args){


        return <div>
            <Rating value={1} onClick={()=>{}}/>
            <Rating value={2} onClick={()=>{}}/>
        </div>


    }

}
