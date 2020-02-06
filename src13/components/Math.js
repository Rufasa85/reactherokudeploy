import React from 'react'

function Math(props) {
    let total;
    if(props.operator==='+'){
        total = props.num1+props.num2
    }
    else if(props.operator==='-'){
        total = props.num1-props.num2
    }
    else if(props.operator==='*'){
        total = props.num1*props.num2
    }
    else if(props.operator==='/'){
        total = props.num1/props.num2
    }
    return <span>{total}</span> 
}

export default Math