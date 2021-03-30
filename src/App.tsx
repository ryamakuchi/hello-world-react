import React, { FC } from 'react';
import CharacterList, { Character } from './components/CharacterList';
import Greets from './components/Greets';
import SummaryText from './components/SummaryText';
import TextInput from './components/TextInput';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const name = 'Patty';
  const greet = (n: string) => <p>Hello, {n || 'Guest'}!</p>;
  const n = Math.floor(Math.random() * 10); // 0〜9 の整数を生成
  const threshold = 5;
  const list = ['Patty', 'Rolley', 'Bobby'];
  const elms = (
    // <React.Fragment> の省略記法
    <>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </>
  );

  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];

  const charactersElms = (
    <div className="container">
      <header>
        <h1>「SLAM DUNK」登場人物</h1>
      </header>
      <CharacterList school="湘南高校" characters={characters} />
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, world!</p>
        <Greets name="Patty" times={3}>
          <span role="img" aria-label="rabbit">
            🐰
          </span>
        </Greets>
        <SummaryText>
          &lt;Summary&gt;
          <br />
          Patty Hope-rabbit, along with her family, arrives in Maple Town, a
          small town inhabited by friendly animals. Soon, the Rabbit Family
          settles in Maple Town as mail carriers and the bitter, yet sweet
          friendship of Patty and Bobby begins to blossom.
        </SummaryText>
        <TextInput />
      </header>

      <div>{greet(name)}</div>
      <div>
        {n > threshold && (
          <p>
            {n} is larger than {threshold}
          </p>
        )}
        <p>
          {n} is {n % 2 === 0 ? 'even' : 'odd'}
        </p>
      </div>
      <ul>
        {list.map((listName) => (
          <li>Hello, {listName}!</li>
        ))}
      </ul>
      <div>
        {
          3 > 1 && 'foo' // インラインコメント
          /*
            複数行に
            渡るコメント
          */
        }
      </div>
      <div>{elms}</div>

      <section>{charactersElms}</section>
    </div>
  );
};

export default App;
