import React from 'react'
import Button from '@material-ui/core/Button';

const CustomizedButton = ({className, title}) => {
    return (
        <Button color="inherit" disableRipple={true} className={className}>{title}</Button>
    )
}

export default CustomizedButton
