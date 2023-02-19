import style from './Relogio.module.scss'

interface Props{
  tempo:number | undefined
}

export default function Relogio({tempo=0}:Props) {
    
  const minutos = Math.floor(tempo/60);
  const segundos = tempo%60;
  const [minutosDez, minutosUni] = String(minutos).padStart(2,'0');
  const [segundoDez, segundosUni] = String(segundos).padStart(2,'0');
    
  return (<>
    <span className={style.relogioNumero}>{minutosDez}</span>
    <span className={style.relogioNumero}>{minutosUni}</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>{segundoDez}</span>
    <span className={style.relogioNumero}>{segundosUni}</span>
  </>
  )
}
