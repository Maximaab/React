import {reducer, StateType, ToggleConstant} from "./reducer";

test ("collapsed should be true", ()=>{
    //data
const state: StateType = {
    collapsed:false
}
    //action
const newState = reducer(state, {type:ToggleConstant})
    //expected
    expect(newState.collapsed).toBe(true)
})

test ("collapsed should be false", ()=>{
    //data
    const state: StateType ={
        collapsed:true
    }
    //action
    const newState = reducer(state,{type:ToggleConstant})
    //expected
    expect(newState.collapsed).toBe(false)
})