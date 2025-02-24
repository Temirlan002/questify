import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logout } from "../store/userSlice";


const Header = () => {
    const { isAuthenticated, username } = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    return (
        <header style={{
            display: "flex",
            justifyContent: 'space-between',
            padding: '10px 20px',
            background: "#eee"
        }}>
            <h2>Questify</h2>
            <nav style={{ display: 'flex', alignItems: 'center', gap: "10px"}}>
                <Link to="/">Главная</Link>
                <Link to="/quests">Квесты</Link>
                <Link to="/leaderboard">Лидерборд</Link>
            </nav>
            {isAuthenticated ? (
                <div>
                    <span style={{marginRight: 10}}>{username}</span>
                    <Button onClick={() => dispatch(logout())}>Выйти</Button>
                </div>
            ) : (
                <Link to="/login">
                    <Button>Войти</Button>
                </Link>
            )}
        </header>
    )
}

export default Header;