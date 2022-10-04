import Item from './Item';
import style from './list.module.scss';
import ITask from "../../types/ITask";

export default function List({ tasks, selectedTask }: IListProps) {
  return (
    <aside className={style.listTask}>
      <h2>Estudo do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            selectedTask={selectedTask}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

interface IListProps {
  tasks: ITask[],
  selectedTask: (taskSelected: ITask) => void
}
