import { useForm } from 'react-hook-form'

export default ()=>{
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }
  return (
    <div className="login">
      <div className="container">
        <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
            <label>用户名</label>
            <input name="example" defaultValue="" ref={register} />
            <label>邮箱</label>
            <input name="example" defaultValue="" ref={register} />
            {/* include validation with required or other standard HTML validation rules */}
            <label>密码</label>
            <input name="exampleRequired" ref={register({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <label>重复密码</label>
            <input name="exampleRequired" ref={register({ required: true })} />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
