import prop from "prop"
import {useState} from "react"

const SecondApp = ({value}) =>{
    const [counter, setCounter ] = useState(value)

    const handleAdd = () =>{
        setCounter(counter + 1)
    }

    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handleReset = () =>{
        setCounter(value)
    }

    return (
        <>
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={()=>handleAdd()}>+1</button>
            <button onClick={()=>handleSubstract()}>-1</button>
            <button onClick={()=>handleReset()}>Reset</button>
        </>
    )
}

export default SecondApp