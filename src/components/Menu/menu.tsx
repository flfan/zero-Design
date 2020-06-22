import React, {createContext, useState} from 'react'
import classNames from 'classnames'

import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

export interface MenuProps {
  defaultIndex ?: string
  className ?: string
  mode ?: MenuMode
  style ?: React.CSSProperties
  onSelect ?: SelectCallback
  defaultOpenSubMenus ?: string[]
}

interface IMenuContext {
  index: string
  onSelect ?: SelectCallback
  mode ?: MenuMode
  defaultOpenSubMenus ?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<MenuProps> = (props) => {
  const {children, defaultIndex, mode, style, className, onSelect, defaultOpenSubMenus} = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('zero-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const callback = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
    
  }
  const passContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: callback,
    mode,
    defaultOpenSubMenus
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {displayName} = childElement.type
      // console.log(displayName)
      if (displayName === "MenuItem" || "SubMenu") {
        return React.cloneElement(childElement, {index: index.toString()})
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testId={'test-menu'}>
      <MenuContext.Provider value={passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu