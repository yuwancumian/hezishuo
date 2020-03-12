import { Link } from 'umi';

export default params => {
  return (
    <div className={'top'}>
      <div className={'container top-center'}>
        <h1 className="title">Yay! Welcome to Playbox!</h1>
        <div className="menu">
          <div className="login-tools">
            <Link to="/registor">注册</Link> /<Link to="login">登录</Link>
          </div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/article">文章</Link>
            </li>
            <li>
              <Link to="/box">盒子</Link>
            </li>
            <li>
              <Link to="/download">下载</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
