import type {Meta, StoryObj} from '@storybook/react';
import {UncontroledAccordion} from './UncontroledAccordion';
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof UncontroledAccordion> = {
    component: UncontroledAccordion,
};

export default meta;
type Story = StoryObj<typeof UncontroledAccordion>;
export const FirstStory: Story = {

    render: function Component(args) {
            const [_, setArgs] = useArgs()



        return <UncontroledAccordion
            {...args}
            title='Test title'
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