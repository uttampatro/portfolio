import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Project from './pages/project';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app_body">
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
