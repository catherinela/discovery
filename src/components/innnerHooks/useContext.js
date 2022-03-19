import React, { useState, useContext, useCallback} from 'react'
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  }
const MyContext = React.createContext(themes.light)
const ColorfulDiv = () => {
    const context = useContext(MyContext) 
    return (
        <div style={{
            background: context.background,
            color: context.foreground,
            width: '200px', height: '250px'}}>I'm the block be colored~</div>
    )
}
export default function ConDemo(){
    const [mode, setMode] = useState('light')
    const switchTheme = useCallback(()=>{
        setMode(mode => (mode === 'light' ? 'dark' : 'light'))
    }, [])
    return (
        <MyContext.Provider value={themes[mode]}>
            <div>
                <button onClick={switchTheme}>switch</button>
                <ColorfulDiv></ColorfulDiv>
            </div>
        </MyContext.Provider>
        
    )
}
