import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import { Forum } from '@mui/icons-material';
function header() {
  return (
    <div className='header'>
        <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>
        <img className='header_logo' src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-2.png" alt=''/>
    <IconButton>
    <Forum fontSize='large' className='header_icon'/>
    </IconButton>
    
    </div>
  )
}

export default header