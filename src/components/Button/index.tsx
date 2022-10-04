import style from './button.module.scss';

export default function Button(prop: IButtonProps) {
  const { type = 'button' } = prop
  return (
    <button type={type} className={style.button}>
      {prop.children}
    </button>
  )
}

interface IButtonProps {
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined
}
