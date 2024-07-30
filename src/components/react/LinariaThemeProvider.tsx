import {type PropsWithChildren} from "react";
import {createTheming} from "@callstack/react-theme-provider";


export const { ThemeProvider, withTheme, useTheme } = createTheming({
    primaryColor: 'red',
    secondaryColor: 'green',
});


const LinariaThemeProvider:React.FC<PropsWithChildren> = ({children})=>{
    return <ThemeProvider>{children}</ThemeProvider>
}

export default LinariaThemeProvider
