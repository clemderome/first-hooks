import React, {useState} from 'react'
import './App.css'

function Counter() {
    let [count, setCount] = useState(0);
    return (
        <div className="contain">
            <label>Choisis un nombre : </label>
            <input type="number" placeHolder="Your number" onChange={(e) => setCount(parseInt(count = e.target.value))}></input>
            <p>Le compteur est à : {count}</p>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(count - 1)}> - </button>
        </div>
    )
}

export default Counter