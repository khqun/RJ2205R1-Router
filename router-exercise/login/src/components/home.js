import { useLocation } from "react-router-dom";

function Home() {
    const { state } = useLocation();
    return (
        <div>
            <div>
                <p>Your username: {state.username}</p>
            </div>
            <div>
                <p>Your password: {state.password}</p>
            </div>
        </div>
    )
}
export default Home;