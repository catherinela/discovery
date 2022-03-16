import { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import WindowSizeComponentByClass from './components/01/listenBrowserSizeByClass'
import WindowSizeComponentByHook from './components/01/listenBrowserSizeByHook'
import Counter from './components/01/Counter' 
import BlogCounter from './components/02/useEffect'
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
            </ul>
        </div>
        <div className='page-container'>
            <Routes>
                <Route path="/showWindowByClass" element={<WindowSizeComponentByClass/>}/>
                <Route path="/showWindowByHook" element={<WindowSizeComponentByHook />}/>
                <Route path="/count" element={<Counter/>}/>
                <Route path='/BlogCounter' element={<BlogCounter/>}/>
            </Routes>
        </div>
    </div>
)

export default App;
