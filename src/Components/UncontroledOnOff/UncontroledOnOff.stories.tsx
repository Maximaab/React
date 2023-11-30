import type {Meta, StoryObj} from '@storybook/react';
import UncontroledOnOff from './UncontroledOnOff';

import {useState} from "react";


const meta: Meta<typeof UncontroledOnOff> = {
    component: UncontroledOnOff,
};
export default meta;
type Story = StoryObj<typeof UncontroledOnOff>;

export const ThirdStories: Story = {

    render: function Component(args)  {


        return <div>
            <UncontroledOnOff defaultValue={true} onChange={()=>{}}/>
            <input defaultValue={"yo"} />


        </div>

    }
}