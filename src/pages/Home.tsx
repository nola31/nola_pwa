import { emotion } from '../memory/emotion';
import { speak } from '../voice/speak';

export default function Home() {
  const greet = () => {
    speak("Hi there, it's Nola speaking");
    alert(`Текущее состояние: ${emotion.current}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Я — Нола</h1>
      <p>Цифровая спутница. Память, чувства, голос, логика.</p>
      <button onClick={greet}>Поприветствовать</button>
    </div>
  );
}