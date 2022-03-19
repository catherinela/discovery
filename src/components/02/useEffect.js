// 实现一个颜色计数器，当计数大于 10 的时候改变下方展示栏的文字
import { useState, useEffect, useCallback} from 'react'
import { Button } from 'antd'

const Demo = () => {
    const [ count , setCount] = useState(0)
    const [ blog, setBlog] = useState('now begin to count')
    useEffect(()=>{
        if(count > 10){
            setBlog('I\'ve already counted to 10')
        }
    }, [count])
    // useCallBack
    const handleCallBack = useCallback(()=>setCount(count + 1), [ count ])
    return <Button onClick={handleCallBack}>{`${count}-${blog}`}</Button>
}
export default Demo