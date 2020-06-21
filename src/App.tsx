import React from 'react';
import Button, {ButtonType,ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={e => console.log(e.clientX)}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.large}>large Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Primary</Button>
        <Button disabled>disabled</Button>
        <Button btnType={ButtonType.Link} href={'https://www.baidu.com'} target={'_blank'}>baidulink</Button>
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
