import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import ITask from "../../types/ITask"
import Button from "../Button"
import Clock from "./Clock"
import style from "./timer.module.scss"

export default function Timer({ taskSelected }: ITimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (taskSelected?.time) {
      setTime(timeToSeconds(taskSelected.time))
    }
  }, [taskSelected])

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar</Button>
    </div>
  )
}

interface ITimerProps {
  taskSelected: ITask | undefined
}
