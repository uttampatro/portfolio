import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Project from './pages/project';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app_body">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/projects" element={<Project />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
