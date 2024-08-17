import {styled} from "@linaria/react";

import {type PropsWithChildren, useState} from "react";
import type {PropsWithTheme} from "../../@types";
import {useTheme} from "./LinariaThemeProvider.tsx";




const Button = styled.button<PropsWithTheme<{ color:string }>>`
    color: ${(props)=>props.color};
    position: relative;
    background: ${(props)=>props.theme.primaryColor};
`

const LinariaButton: React.FC<PropsWithChildren> = ({children}) => {

    const [counter, setCounter] = useState(0);
    const theme = useTheme()

    const handleUpdateCounter =()=>{
        setCounter(counter + 1)
        console.log(counter + 1)
    }

    return ( <Button theme={theme} color={`rgb(${counter * 20},${counter * 10},${counter * 5})`} onClick={handleUpdateCounter} >{
             children
            }</Button>)
}

export default LinariaButton
