import { useForm } from 'react-hook-form'
import AV from '../../services/avInit'

export default ()=>{
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      userName: "aaa",
      email: "bluebill1049@hotmail.com",
      password: '123',
      repeatPassword: '123'
    }
  })
  const onSubmit = data => {
    console.log(data);
    var user = new AV.User();
    user.setUsername(data.userName);
    user.setEmail(data.email);
    user.setPassword(data.password);
    console.log(user)
    user.signUp().then(function (user) {
      // 注册成功
      console.log('注册成功。objectId：' + user.id);
    }, function (error) {
      // 注册失败（通常是因为用户名已被使用）
    });
   }
  return (
    <div className="login">
      <div className="container">
        <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
            <label>用户名</label>
            <input name="userName" defaultValue="" ref={register} />
            <label>邮箱</label>
            <input name="email" defaultValue="" ref={register} />
            {/* include validation with required or other standard HTML validation rules */}
            <label>密码</label>
            <input name="password"  type="password" ref={register({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <label>重复密码</label>
            <input name="repeatPassword" type="password" ref={register({ required: true })} />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
