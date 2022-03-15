import { useState, useEffect } from 'react';
const Demo = ()=>{
    const size  = useWindowSize();
    return <div>{size} component</div>
}
 const useWindowSize = () => {
     const [size, setSize] = useState(getSize());
     useEffect(()=>{
         const handler = () => setSize(getSize())
         window.addEventListener('resize', handler)
         return ()=>{
            window.removeEventListener('resize',handler )
        }
     }, [])
     return size
 }

 const getSize = () => {
    if(window.innerHeight > 300) return 'tall'
     return 'dwarf'
 }
 export default Demo
