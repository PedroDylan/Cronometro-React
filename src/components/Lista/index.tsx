import { Itarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface Props{
    tarefas:Itarefa[],
    selecionaTarefa: (tarefaSelecionada : Itarefa) => void
}



export default function Lista({tarefas, selecionaTarefa}:Props) {
    
  
  
    return (
    <aside className={style.listaTarefas}>
        <h2 >Daily tasks</h2>
        <ul>
            {tarefas.map(item=>(
               <Item
                  selecionaTarefa={selecionaTarefa}
                  {...item}
                  key={item.id}
               />
            ))}
        </ul>
    </aside>
  )
}
