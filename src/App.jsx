/* eslint-disable react/jsx-no-target-blank */
import { React, useState } from 'react';
import './App.scss';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from './components/Button/Button';
import { Alert } from './components/Feedback/Alert/Alert';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Button
        label="Button"
        leftIcon={'las la-bell'}
        rightIcon={'las la-bell'}
        size={'sm'}
        disabled={false}
        type={'button'}
      />
      <Alert
        title="Alert"
        status="success"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ligula a quam cursus scelerisque at non justo. Ut mi ipsum, ullamcorper eget risus non, dictum finibus elit. Sed vestibulum dui nec placerat interdum. Donec tincidunt enim at nisi pellentesque accumsan. Proin faucibus lobortis dignissim. Suspendisse potenti. Mauris vestibulum ipsum quis odio faucibus posuere. Ut non porta nibh."
        url="https://marca.com"
        urlName="Marca"
      />
    </div>
  );
}

export default App;
