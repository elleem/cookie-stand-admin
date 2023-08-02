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
    <form onSubmit={handleSubmit} className="flex flex-col w-2/4 mx-auto">
      <legend className="block text-gray-700 font-bold mb-2"> REGISTER NEW USER</legend>

      <label className="font-bold text-gray-700 mb-2" htmlFor="username">USERNAME</label>
      <input id="username" type = "text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="font-bold text-gray-700 mb-2" htmlFor="password">PASSWORD</label>
      <input id="password" type = "text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="font-bold text-gray-700 mb-2" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
      <input id="confirmPassword" type = "text" placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      <label className="font-bold text-gray-700 mb-2" htmlFor="email">EMAIL</label>
      <input id="email" type = "text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} className="p-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-non focus:border-blue-300"/>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-400">REGISTER</button>
    </form>
  );
}
