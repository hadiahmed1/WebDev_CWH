import React from 'react'
const Counter = ({val,setVal}) => {
    return (
        <div>
            <div>
            <p>Count={val}</p>
        </div>
        <button onClick={()=>{
            setVal(val+1);
        }}>
            Click Me
        </button>
        </div>
    )
}
export default Counter