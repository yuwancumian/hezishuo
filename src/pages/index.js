import React, { useEffect, useState } from 'react';
import { update } from '../services/index';
import AV from '../services/avInit';

export default function() {
  // home/user
  // const [user, setUser ]= useState({});
  useEffect(() => {
    var currentUser = AV.User.current();
    console.log(currentUser.attributes.username);
    update();
  }, []);
  return (
    <div className="home">
      <div className={'container'}>123</div>
    </div>
  );
}
