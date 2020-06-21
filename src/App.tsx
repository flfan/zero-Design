import React from 'react';
import Button, {ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button disabled>Hello</Button>
        <Button disabled btnType={ButtonType.Link} href={'https://www.baidu.com'}>baidulink</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
