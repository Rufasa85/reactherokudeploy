import React from 'react'

export default function NameHeader(props) {
    return (
        <div>
            <h3>{props.userName||"no one"} is here</h3>
        </div>
    )
}
