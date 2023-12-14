import reactMemoStories from "./ReactMemo.stories";
import React from "react";

export const ReactMemo = (props: { users: Array<any>, count: number }) => {
    return <>
        <Users users={props.users}/>
        <NewMassagesCount count={props.count}/>
    </>

}

const Users1 = (props: { users: Array<any> }) => {
    return <div>
        {props.users.map((el, i) => <div key={i}>{el}</div>)}

    </div>

}
const Users = React.memo(Users1)
const NewMassagesCount = (props: { count: number }) => {
    return <div>
        {props.count}
    </div>
}