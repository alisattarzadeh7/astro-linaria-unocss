import {useState} from "react";


const FlyingButton = ()=>{

    const [counter,setCounter] = useState(0);


    return (<button className={`mt-${counter}`} onClick={()=>setCounter(counter + 1)}>I'm flying!!!</button>)
}

export default FlyingButton