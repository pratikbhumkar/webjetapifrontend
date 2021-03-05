import React from 'react'
import Button from '@material-ui/core/Button';

const CustomizedButton = ({className, title, onClick}) => {
    return (
        <Button color="inherit" disableRipple={true} className={className} onClick={onClick}>{title}</Button>
    )
}

export default CustomizedButton
