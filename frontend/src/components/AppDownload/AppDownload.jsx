import React from 'react'
import './AppDownload.css'
import playStore from '../../assets/play_store.png';
import appStore from '../../assets/app_store.png';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better Experience Download <br />Fama App</p>
        <div className="app-download-platforms">
            <img src={playStore} alt="" />
            <img src={appStore} alt="" />

        </div>
      
    </div>
  )
}

export default AppDownload
