import style from "./clock.module.scss"

export default function Clock({ time = 0 }: IClockProps) {
  const [minuteTens, minuteUnit] = String(Math.floor(time / 60)).padStart(2, '0');
  const [secondTens, secondUnit] = String(time % 60).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{minuteTens}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondTens}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  )
}

interface IClockProps {
  time: number | undefined
}
