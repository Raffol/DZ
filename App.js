import React from 'react';
import TextBlock from './components/TextBlock';

function App() {
  const text1 = "Медленный человек внимательно изучает принцип, останавливаясь на всех его аспектах. Быстрый человек делает много выводов, но редко глубоко понимает свои слова...";
  const text2 = "Ничто так не способствует успеху, как постоянная, ежедневная тренировка. Гениальный русский пианист АГ Рубинштейн говорил, что если он не сядет за инструмент 1 день, то сам замечает, что играть стал хуже, 2 дня - замечают родные и близкие, 3-видят все...";

  return (
      <div style={{ backgroundColor: '#f5deb3', padding: '50px' }}>
        <TextBlock text={text1} />
        <TextBlock text={text2} />
      </div>
  );
}

export default App;
