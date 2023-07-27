export default function LoginForm({onLogin}){
  async function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    onLogin(event.target.username.value, event.target.password.value); 
  }
  return(
    <div className="container flex w-3/4 flex-col items-center p-2 mx-auto my-3 rounded-md border border-emerald-500 bg-emerald-200">
    <form onSubmit={handleSubmit}>
    <fieldset autoComplete="off">
        <legend>Log In</legend>
        <label htmlFor="username">Username</label>
        <input name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Log In</button>
    </fieldset>
</form>
</div>
);
}