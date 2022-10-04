import Button from "../Button"
import Clock from "./Clock"
import style from "./timer.module.scss"

export default function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  )
}
