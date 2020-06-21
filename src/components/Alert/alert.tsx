import React, {useState} from 'react'
import classNames from 'classnames'

type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
  title ?: string
  detail ?: string
  alertType ?: AlertType
  showDetail ?: boolean
  showClose ?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const [close, setClose]  = useState(false)
  const {title, detail, alertType,showDetail,showClose} = props
  const classes = classNames('alert-container', {
    [`alert-${alertType}`]: alertType
  })
  if (!close) {
    return (
      <div className={classes}>
        <div className={'alert-title'}>{title}</div>
        {showDetail ? <div className={'alert-detail'}>{detail}</div> : null}
        {showClose ? <div onClick={e => {setClose(true);e.nativeEvent.stopImmediatePropagation()}} className={'alert-close'}>close</div> : null}
      </div>
    )
  } else {
    return null
  }
  
}

Alert.defaultProps = {
  title: 'hello world',
  detail: 'hello world java',
  alertType: 'default',
  showDetail: true,
  showClose: true
}

export default Alert