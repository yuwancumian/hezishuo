import { Link } from 'umi';
import logo from '@/assets/logo6.png';
import styles from './header.less';

export default props => {
  console.log(props.isLogin);
  console.log(props.username);
  return (
    <div className={styles.header}>
      <div className={`${styles['top-center']}`}>
        <h1 className="title">
          <Link to="/">
            <img alt="" src={logo} />
          </Link>
        </h1>
        <div className="menu">
          <div className="login-tools">
            {/* {props.isLogin ? (
              <Link to="login">退出</Link>
            ) : (
              <Link to="/registor">注册</Link> / <Link to="login">登录</Link>
            )} */}
            {props.isLogin && (
              <>
                欢迎
                {props.username}
                <Link to="login">, 退出</Link>
              </>
            )}
          </div>
          <ul>
            <li>
              <Link to="/">首 页</Link>
            </li>
            <li>
              <Link to="/box">盒 子</Link>
            </li>
            <li>
              <Link to="/article">文 章</Link>
            </li>
            <li>
              <Link to="/blog">博 客</Link>
            </li>
            <li>
              <Link to="/download">下 载</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
