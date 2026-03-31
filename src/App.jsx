import { useState } from 'react'
import './App.css'

export default function App() {
 
  const CLASSES = [
    { nome: "Mago", emoji: "🧙‍♂️"},
    { nome: "Guerreiro", emoji: "⚔️"},
    { nome: "Arqueiro", emoji: "🏹"},
    { nome: "Curandeiro", emoji: "➕"},
  ];

  const [nome, setNome] = useState(""); //Texto
  const [hp, setHp] = useState(100); //Número
  const [vivo, setVivo] = useState(true); //Boolean
  const [classe, setClasse] = useState(CLASSES[0]); //Objeto

  const recebeDano = () => {
    const novoHp = Math.max(0, hp-10);
    setHp(novoHp);
    setVivo(novoHp > 0);
  }

  const curar = () => {
    setHp(100);
    setVivo(true);
  }

  const pct = hp/100;
  const corBarra = pct > 0.5 ? "#5DCAA5" : pct > 0.25 ? "#EF9F27" : "#E24B4A";

  return (
    <>
      <main>
        <h1>RPG useStates</h1>
        <div className="emoji">🧙‍♂️</div>
        <input type="text" className='heroi' placeholder='Nome do Herói...'/>
        <div id="status">
          <h2>Status</h2>
          <h2>Vivo (boolean)</h2>
          <p>VIVO</p>
          <p>true</p>
        </div>
        <h2 id="pontosVida">
          Pontos de vida <span>100/ 100</span>
        </h2>
        <div id="barravida"></div>
        <button className='dano'>⚔️Receber Dano</button>
        <button className='dano'>➕Curar</button>
        <div id="classes">
          <h3>Classe do Herói</h3>
          <button className="classeBT">🧙‍♂️Mago</button>
          <button className="classeBT">⚔️Guerreiro</button>
          <button className="classeBT">🏹Arqueiro</button>
          <button className="classeBT">➕Curandeiro</button>
        </div>
      </main>
    </>
  )
}
