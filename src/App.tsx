import React, {useState} from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const element = (
  <>
    <Icon icon="arrow-down" theme="secondary" size="10x" />
    <FontAwesomeIcon icon={faCoffee} size={'10x'}/>
  </>
)

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {element}
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
        <Button btnType={'danger'} size={'lg'}>large Danger</Button>
        <Button btnType={'primary'} size={'sm'}>Small Primary</Button>
        <Button disabled>disabled</Button>
        <Button btnType={'link'} href={'https://www.baidu.com'} target={'_blank'}>baidulink</Button>
        <Button disabled btnType={'link'} href={'https://www.baidu.com'}>baidulink</Button>
        <p>分割线</p>
        <Alert title={'this is a title'} showDetail={false}/>
        <p>分割线</p>
        
        <Button onClick={() => {setShow(!show)}} >switch</Button>
        <Transition 
          in={show}
          timeout={300}
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition 
          in={show}
          timeout={300}
        >
          <Button btnType={'primary'} size={'lg'}>Small Primary</Button>
        </Transition>
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
