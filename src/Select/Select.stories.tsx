import {Meta, StoryObj} from "@storybook/react";
import {Accordion} from "../Accordion/Accordion";
import {Select} from "./Select";
import {useState} from "react";


const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Eightstory: Story = {
    render:function Component(args) {
        const [value, setValue] = useState("1")
        return <Select

            onChange={setValue}
            value={value}
            items={[{title:"Doctor", value:"1"},{title:"It-Spetialists", value:"2"},{title:"Kosmetology", value:"3"}]}/>
    }
}
