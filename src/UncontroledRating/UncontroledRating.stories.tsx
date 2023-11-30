import type {Meta, StoryObj} from '@storybook/react';
import {RatingNumberType, UncontroledRating} from './UncontroledRating';
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof UncontroledRating> = {
    component:UncontroledRating,

};
export default meta;
type Story = StoryObj<typeof UncontroledRating>;

export const SecondStory: Story = {
    render: function Component(args){
        const [_, setArgs] = useArgs()
const CallBack = (defaultValue:RatingNumberType)=>{
    args.onChange(defaultValue)
    setArgs({defaultValue})
}
        return <div>
            <UncontroledRating defaultValue={1} onChange={CallBack}  />
            <UncontroledRating defaultValue={2} onChange={CallBack}  />
        </div>


    }

}
