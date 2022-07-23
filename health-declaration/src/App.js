import './App.css';
import { Link, Outlet } from 'react-router-dom';
function App() {
    return (
        <div>
            <nav>
                <Link to="/VietnameseVersion">
                    <img
                        src="https://cdn.britannica.com/41/4041-004-D051B135/Flag-Vietnam.jpg"
                        alt="vn"
                        className='flag'
                    />
                </Link>
                <Link to="/EnglishVersion">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                        alt="en"
                        className='flag'
                    />
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default App;
