import React from "react";
import style from './button.module.scss'

export default function Button(prop: ButtonProps) {
  return (
    <button className={style.button}>
      {prop.children}
    </button>
  )
}

interface ButtonProps {
  children: string
}
