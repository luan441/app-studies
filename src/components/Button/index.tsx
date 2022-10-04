import style from './button.module.scss';

export default function Button(prop: ButtonProps) {
  const { type = 'button' } = prop
  return (
    <button type={type} className={style.button}>
      {prop.children}
    </button>
  )
}

interface ButtonProps {
  children: string,
  type?: 'button' | 'submit' | 'reset' | undefined
}
