import { Button, Card, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/userSlice";

const Login = () => {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login(username))
        navigate("/quests")
    }

    return (
        <div>
            <Card style={{ width: 300 }} >
                <h2>Вход</h2>
                <Input
                    placeholder="Введите имя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Button type="primary" onClick={handleLogin} style={{marginTop: 10}}>
                    Войти
                </Button>
            </Card>
        </div>
    )
}

export default Login;