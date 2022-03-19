import { useState, useRef, useCallback } from 'react'
export default function Timer (){
    const [ time, setTime] = useState(0)
    let timer = useRef(null)
    const startCounting = useCallback(()=>{
        timer.current = window.setInterval(()=> {
            console.log('counting------------', time)
            setTime((time)=>{
                console.log('here time ------------', time)
                return time+1
            })
        }, 100)
    }, [])
    const stopCounting = useCallback(()=>{
        console.log('stop ---------------')
        window.clearInterval(timer.current)
        timer.current = null
    }, [])
    return(
        <div>
            <button onClick={startCounting}>start</button><button onClick={stopCounting}>pause</button><span>{time/10}</span>
        </div>
    )
}