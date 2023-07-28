export default function LoginForm({onLogin}){
  async function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    onLogin(event.target.username.value, event.target.password.value); 
  }
  return(
    <div className="container flex w-3/4 flex-col items-center p-2 mx-auto my-3 rounded-md border border-emerald-500 bg-emerald-200">
    <form onSubmit={handleSubmit}>
    <fieldset autoComplete="off" className="items-center">
    {/* <legend className="text-center text-2xl font-bold">Log In</legend> */}

      <label htmlFor="password" className="text-center block mb-2 text-sm font-bold text-gray-900">USER NAME</label>
      <input name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="User Name"/>
      <label htmlFor="password" className="text-center block mb-2 text-sm font-bold text-gray-900">PASSWORD</label>
      <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="password"/>
      <div className="container flex flex-col items-center">
      <button className="text-gray-900 bg-emerald-600 hover:bg-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mt-2 text-center content-center w-full">SIGN IN</button>
      </div>
    </fieldset>
</form>
</div>
);
}