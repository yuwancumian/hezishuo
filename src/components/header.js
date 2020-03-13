import { Link } from 'umi';
import logo from '@/assets/logo2.png';

export default props => {
  console.log(props.isLogin);
  console.log(props.username);
  return (
    <div className={'top'}>
      <div className={'container top-center'}>
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
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/box">盒子</Link>
            </li>
            <li>
              <Link to="/article">文章</Link>
            </li>
            <li>
              <Link to="/download">下载</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
