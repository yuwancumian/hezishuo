import React, { useEffect, useState } from 'react';
import { update } from '../../services/index';
import AV from '../../services/avInit';
import bg from '@/assets/home_bg4.png';
import cato1 from '@/assets/circuits.jpg';
import cato2 from '@/assets/arduino.jpg';

import styles from './style.css';

export default function() {
  // home/user
  // const [user, setUser ]= useState({});
  useEffect(() => {
    var currentUser = AV.User.current();
    console.log(currentUser.attributes.username);
    update();
  }, []);
  return (
    <div className="home" style={{background: "#fff"}}>
      <div className={styles['home-show']}>
      </div>
      <div className={styles['home-sp']}>
      </div>
      <div className="cato ">
        <div className="container">
          <div className="box box-4">
            <img src={cato1} alt="" />
            <p>arduino</p>
          </div>
          <div className="box box-4">
            <img src={cato2} alt="" />
            <p>Raspberry Pi</p>
          </div>
          <div className="box box-4">
            <img src={cato1} alt="" />
            <p>Micro:: Bit</p>
          </div>
          <div className="box box-4">
            <img src={cato2} alt="" />
            <p>Orange Pi</p>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="container">
          <h3>最近发布</h3>
        </div>
        <div className="container">
          <div className="box box-3"></div>
          <div className="box box-3"></div>
          <div className="box box-3"></div>
        </div>
      </div>

      {/* <div className="show1">
        <div className="container">
          <img src={show1} alt="" />
        </div>
      </div>
      <div className=" show2">
        <div className="container">
          <img src={show2} alt="" />
        </div>
      </div>
      <div className="show3">
        <div className="container">
          <img src={show3} alt="" />
        </div>
      </div> */}
    </div>
  );
}
