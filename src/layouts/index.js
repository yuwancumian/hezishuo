import { useEffect, useState } from 'react';
import AV from '../services/avInit';

import Header from '../components/header';
import Footer from '../components/footer';

function BasicLayout(props) {
  // layout/index
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    var currentUser = AV.User.current();
    if (currentUser.attributes.username) {
      setIsLogin(true);
      setUsername(currentUser.attributes.username);
      console.log(11111, username);
    } else {
      setIsLogin(false);
    }
  }, [username]);
  return (
    <>
      <Header isLogin={isLogin} username={username}></Header>
      <div className="page">
        {props.children}
        <Footer></Footer>
      </div>
    </>
  );
}

export default BasicLayout;
