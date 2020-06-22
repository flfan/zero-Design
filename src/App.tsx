import React from 'react';
import Button, {ButtonType,ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={(index) => {alert(index)} }>
          <MenuItem>item1</MenuItem>
          <MenuItem disabled>item2</MenuItem>
          <SubMenu title={"submenu"}>
            <MenuItem>item3</MenuItem>
            <MenuItem>item4</MenuItem>
          </SubMenu>
          <MenuItem>item2</MenuItem>
          <MenuItem >item2</MenuItem>
        </Menu>
        <Menu mode={'vertical'} defaultOpenSubMenus={['2']} defaultIndex='0' onSelect={(index) => {alert(index)} }>
          <MenuItem>item1</MenuItem>
          <MenuItem disabled>item2</MenuItem>
          <SubMenu title={"submenu"}>
            <MenuItem>item3</MenuItem>
            <MenuItem>item4</MenuItem>
            <MenuItem>item4</MenuItem>
            <MenuItem>item4</MenuItem>
          </SubMenu>
          <MenuItem>item4</MenuItem>
          <MenuItem>item4</MenuItem>
        </Menu>
        <Button onClick={e => console.log(e.clientX)}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.large}>large Danger</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Primary</Button>
        <Button disabled>disabled</Button>
        <Button btnType={ButtonType.Link} href={'https://www.baidu.com'} target={'_blank'}>baidulink</Button>
        <Button disabled btnType={ButtonType.Link} href={'https://www.baidu.com'}>baidulink</Button>
        <p>分割线</p>
        <Alert title={'this is a title'} showDetail={false}/>
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
