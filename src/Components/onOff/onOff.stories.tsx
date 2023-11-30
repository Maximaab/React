import type {Meta, StoryObj} from '@storybook/react';
import onOff from './onOff';
import OnOff from "./onOff";
import {useState} from "react";


const meta: Meta<typeof onOff> = {
    component: onOff,
};
export default meta;
type Story = StoryObj<typeof onOff>;

export const ThirdStories: Story = {

    render: function Component(args)  {
        const [value, setValue] = useState(true)

        return <div>
            <OnOff on={false} onChange={()=>{}}/>
            <OnOff on={true} onChange={()=>{}}/>
            <OnOff on={value} onChange={setValue}/>
        </div>

    }
}