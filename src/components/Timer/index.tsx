import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import ITask from "../../types/ITask"
import Button from "../Button"
import Clock from "./Clock"
import style from "./timer.module.scss"

export default function Timer({ taskSelected, completedTask }: ITimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (taskSelected?.time) {
      setTime(timeToSeconds(taskSelected.time))
    }
  }, [taskSelected])

  const regressive = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count -1);
        return regressive(count -1);
      }
      completedTask();
    }, 1000);
  };

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>
        Começar
      </Button>
    </div>
  )
}

interface ITimerProps {
  taskSelected: ITask | undefined
  completedTask: () => void
}
