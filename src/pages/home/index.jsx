import React, { useEffect, useState } from 'react';
import { update } from '../../services/index';
import AV from '../../services/avInit';
import bg from '@/assets/home_bg4.png';
import icon1 from '@/assets/home_icon1.png';
import icon2 from '@/assets/home_icon2.png';
import icon3 from '@/assets/home_icon3.png';
import icon4 from '@/assets/home_icon4.png';

import styles from './style.less';

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
            <img src={icon1} alt="" />
            <h4>Raspberry pi</h4>
            <p>Raspberry</p>
          </div>
          <div className="box box-4">
            <img src={icon2} alt="" />
            <h4>scratch</h4>
            <p>
              scratch
            </p>
          </div>
          <div className="box box-4">
            <img src={icon3} alt="" />
            <h4>Micro:: Bit</h4>
            <p>Micro:: Bit</p>
          </div>
          <div className="box box-4">
            <img src={icon4} alt="" />
            <h4>arduino</h4>
            <p>arduino</p>
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
