import Item from './Item';
import style from './list.module.scss';

export default function List() {
  const task = [{
    task: 'React',
    time: '02:00:00'
  }, {
    task: 'Javascript',
    time: '01:00:00'
  }]
  return (
    <aside className={style.listTask}>
      <h2>Estudo do dia</h2>
      <ul>
        {task.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
