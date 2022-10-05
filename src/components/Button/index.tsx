import style from './button.module.scss';

export default function Button(prop: IButtonProps) {
  const { type = 'button', onClick } = prop
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {prop.children}
    </button>
  )
}

interface IButtonProps {
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}
