// 用 useState 实现一个计数器
import { useState } from 'react'
const Counter = () => {
    const [count, setCount ] = useState(0)
    return <button onClick={()=>{setCount(count + 1)}}>{count}</button>
}
export default Counter