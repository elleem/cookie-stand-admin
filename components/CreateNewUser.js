import {useState} from "react";

export default function CreateNewUser({onRegister}){

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSubmit= (e)=>{
    e.preventDefault(); 
    if (password !==confirmPassword){
      setErrorMessage('Passwords do not match'); 
      return;
    }
    onRegister(username, password, email); 
  }

  return(
    <div className="container flex w-3/4 flex-col items-center p-2 mx-auto my-3 rounded-md border border-emerald-500 bg-emerald-200">
    <form onSubmit={handleSubmit} className="flex flex-col w-2/4 mx-auto">
      <legend className="text-center text-md font-bold border-t-2 border-b-2 border-gray-500"> REGISTER NEW USER</legend>

      <label className="text-center block mb-2 text-sm font-bold text-gray-900" htmlFor="username">USER NAME</label>
      <input id="username" type = "text" placeholder="User Name" onChange={(e)=> setUsername(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="text-center block mb-2 text-sm font-bold text-gray-900" htmlFor="password">PASSWORD</label>
      <input id="password" type = "text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="text-center block mb-2 text-sm font-bold text-gray-900" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
      <input id="confirmPassword" type = "text" placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="text-center block mb-2 text-sm font-bold text-gray-900" htmlFor="email">EMAIL</label>
      <input id="email" type = "text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      {errorMessage && <p className="text-red-500 bg-red-100 border border-red-400 p-2 rounded">{errorMessage}</p>}

      <button type="submit" className="text-gray-900 bg-emerald-600 hover:bg-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mt-2 text-center content-center w-full">REGISTER</button>
    </form>
    </div>
  );
}
