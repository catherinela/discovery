import { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import WindowSizeComponentByClass from './components/01/listenBrowserSizeByClass'
import WindowSizeComponentByHook from './components/01/listenBrowserSizeByHook'
import './App.css'

const Comp3 = () => <button>comp3</button>

const App: FC = () => (
    <div className='app'>
        <div className='sider'>
            <ul>
                <li>
                    <Link to='/about' >about</Link>
                </li>
                <li>
                    <Link to='/users' >users</Link>
                </li>
                <li>
                    <Link to='/ending' >ending</Link>
                </li>
            </ul>
        </div>
        <div className='page-container'>
            <Routes>
                <Route path="/about" element={<WindowSizeComponentByClass/>}/>
                <Route path="/users" element={<WindowSizeComponentByHook />}/>
                <Route path="/ending" element={<Comp3/>}/>
            </Routes>
        </div>
    </div>
)

export default App;
