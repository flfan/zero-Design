import React, {FC,createContext, useState} from 'react'
import classNames from 'classnames'

import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex ?: string
  className ?: string
  /**菜单类型 横向或者纵向 */
  mode ?: MenuMode
  style ?: React.CSSProperties
  /**点击菜单项触发的回掉函数 */
  onSelect ?: SelectCallback
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus ?: string[]
}

interface IMenuContext {
  index: string
  onSelect ?: SelectCallback
  mode ?: MenuMode
  defaultOpenSubMenus ?: string[]
}

export const MenuContext = createContext<IMenuContext>({index: '0'})
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'zeroship'
 * ~~~
 */
export const Menu: FC<MenuProps> = (props) => {
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

export default Menu;