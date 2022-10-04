import ITask from '../../../types/ITask';
import style from './item.module.scss';

export default function Item({task, time, selected, completed, id, selectedTask}: IItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''}`}
      onClick={() => selectedTask({
        task,
        time,
        selected,
        completed,
        id
      })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}


interface IItemProps extends ITask {
  selectedTask: (taskSelected: ITask) => void
}
