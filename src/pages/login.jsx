import { useForm } from 'react-hook-form'
import AV from '../services/avInit'

export default ()=>{
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    AV.User.logIn(data.useName, data.password).then(function (user) {
      // 登录成功
      console.log('登录成功',user)
    }, function (error) {
      // 登录失败（可能是密码错误）
    });
  }
  return (
    <div className="login">
      <div className="container">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
            <label>用户名</label>
            <input name="userName" defaultValue="" ref={register({required: true})} />
            <label>密码</label>
            <input name="password"  type="password" ref={register({ required: true })} />
            <input type="submit" />
        </form>
      </div>
      </div>
    </div>
  )
}
