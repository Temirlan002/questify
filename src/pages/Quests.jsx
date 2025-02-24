import { useDispatch, useSelector } from "react-redux"
import { fetchQuest } from "../store/questSlice"
import { Button, Card, Spin } from "antd";
import { addPoints } from "../store/userSlice";

const Quests = () => {

    const dispatch = useDispatch()
    const { quest, status } = useSelector(state => state.quest);
    const { isAuthenticated, points } = useSelector(state => state.user)

    const completeQuest = () => {
        dispatch(addPoints(10));
        dispatch(fetchQuest())
    }

  return (
    <div>
        <h1>Ваше случайное задание</h1>
        {isAuthenticated ? (
              <>
                {status === "loading" && <Spin />}
                {quest && (
                    <Card style={{width: 300, margin: '20px auto'}}>
                        <p>{quest.activity}</p>
                    </Card>      
                )}
                  <Button type="primary" onClick={completeQuest}>
                    Выполнить и получить 10 очков
                  </Button>  
                  <p>Ваши очки: {points}</p>
              </>
        ) : (
            <p>Войдите, чтобы получать квесты</p>
        )}
    </div>
  )
}

export default Quests