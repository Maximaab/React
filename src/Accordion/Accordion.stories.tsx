import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;
export const FirstStory: Story = {

    render: function Component(args) {
            const [_, setArgs] = useArgs()

        const onCollapsedChange = (value: boolean) => {
                args.onChange(value)
           setArgs({collapsed: value})
        }



        return <Accordion
            {...args}
            title='Test title'
            onChange={onCollapsedChange}
            items={[{title:"Voktor", value:1},{title:"WANA", value:2},{title:"MAX", value:3},{title:"SANA", value:4}]}
            onClick={(value)=>{ alert(`AAAA ${value}`)}}
        />
    }



    //
    // args: {
    //     title: 'Test title',
    //     collapsed:true,
    //     onChange: () =>
    // },
}
// const onChangeHandler = action("onChange")
//     export const CollapsedAccordion = () => {
//     return <Accordion
//         title={"Collapsed Accordion"}
//         collapsed={true}
//         onChange={onChangeHandler}
//     />
// }
// export const OpenedAccordion = () => {
//     return <Accordion
//         title={"Opened Accordion"}
//         collapsed={false}
//         onChange={()=>{}}
//     />
// }
//
// export const AccordionDemo = () => {
//     const [collapsed, setCollapsed] = useState(false)
//     return <Accordion
//         title={"Accordion"}
//         collapsed={collapsed}
//         onChange={()=>{setCollapsed(!collapsed)}}
//     />
// }