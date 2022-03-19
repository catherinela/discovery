import { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import WindowSizeComponentByClass from './components/01/listenBrowserSizeByClass'
import WindowSizeComponentByHook from './components/01/listenBrowserSizeByHook'
import Counter from './components/01/Counter' 
import BlogCounter from './components/02/useEffect'
import MemoCounter from './components/innnerHooks/useMemo'
import RefCounter from './components/innnerHooks/userRef'
import ContextDemo from './components/innnerHooks/useContext'
import './App.css'

// const routes = [
//     ['01 listenBrowserSizeByClass', WindowSizeComponentByClass],
//     ['01 listenBrowserSizeByHook', WindowSizeComponentByHook],
//     ['01 Counter', Counter],
//     ['02 useEffect', BlogCounter]
// ]

// 将重复的 li  这段逻辑优化
const App: FC = () => (
    <div className='app'>
        <div className='sider'>
            <ul>
                <li>
                    <Link to='/showWindowByClass' >showWindowByClass</Link>
                </li>
                <li>
                    <Link to='/showWindowByHook' >showWindowByHook</Link>
                </li>
                <li>
                    <Link to='/count' >count</Link>
                </li>
                <li>
                    <Link to='/BlogCounter' >BlogCounter</Link>
                </li>
                <li>
                    <Link to='/MemoCounter' >MemoCounter</Link>
                </li>
                <li>
                    <Link to='/RefCounter' >RefCounter</Link>
                </li>
                <li>
                    <Link to='/ContextDemo' >ContextDemo</Link>
                </li>
            </ul>
        </div>
        <div className='page-container'>
            <Routes>
                <Route path="/showWindowByClass" element={<WindowSizeComponentByClass/>}/>
                <Route path="/showWindowByHook" element={<WindowSizeComponentByHook />}/>
                <Route path="/count" element={<Counter/>}/>
                <Route path='/BlogCounter' element={<BlogCounter/>}/>
                <Route path='/MemoCounter' element={<MemoCounter/>}/>
                <Route path='/RefCounter' element={<RefCounter/>}/>
                <Route path='/ContextDemo' element={<ContextDemo/>}/>
            </Routes>
        </div>
    </div>
)

export default App;
