import Item from './Item';
import style from './list.module.scss';
import ITask from "../../types/ITask";

export default function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.listTask}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
