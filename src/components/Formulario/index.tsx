import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { Itarefa } from "../../types/tarefas";
import {v4 as uuidv4} from "uuid";

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {

    state = {
        tarefa:"",
        tempo:"00:00"
    }

    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas=>
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado:false,
                    completo:false,
                    id:uuidv4()
                }
            ])
        this.setState({
            tarefa:"",
            tempo:"00:00"
        })
    }


    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
                <div className={style.inputContainer}>
                    <label htmlFor="Task">
                        Add a new task
                    </label>
                    <input
                        type='text'
                        name="Task"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento=>this.setState({...this.state,tarefa:evento.target.value})}
                        placeholder="What do you want to study?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Time
                    </label>
                    <input
                        type='time'
                        step='1'
                        name="Time"
                        value={this.state.tempo}
                        onChange = {evento => this.setState({...this.state,tempo:evento.target.value})}
                        id="tempo"
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Botao
                    texto="Adicionar"
                    type="submit"
                />
            </form>
        )
    }
}

export default Formulario