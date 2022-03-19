// import { Button, Result } from 'antd'

import { useCallback, useState, useMemo } from 'react'

/**
 * useCallBack
 * useMemo
 * useRef
 * useContext
 * 一个计算器
 *  a + b = 计算出的结果 如果 b 改变，就提示 b 改变（），重新计算 a + b 的结果 => useMemo
 * 
 */
const Demo = () => {
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    // const [result, setResult] = useState(0)
    const result = useMemo(()=>numberA + numberB, [numberB])
    const handleAChange = useCallback(()=>setNumberA(numberA+1), [numberA])
    const handleBChange = useCallback(()=>setNumberB(numberB + 1), [numberB])
    return(
        <div>
            <button onClick={handleAChange}>{numberA}</button> + <button onClick={handleBChange}>{numberB}</button> = {result}
        </div>
    )
}
export default Demo