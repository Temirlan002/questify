import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Добро пожаловать в Questify!</h1>
        <p>Получай случайные задания и выполняй их!</p>
        <button>
            <Link to='/quests'>Начать квест</Link>      
        </button>
    </div>
  )
}

export default Home