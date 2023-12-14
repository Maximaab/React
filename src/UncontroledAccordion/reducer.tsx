type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const ToggleConstant = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case ToggleConstant:
            return {
                ...state,
                collapsed: !state.collapsed
            };

        default:
            throw new Error("Bad action")
    }
    return state
}