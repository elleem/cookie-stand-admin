import { useState } from "react"; 
export default function Form(){

  const [cookieStandData,setCookieStandData] = useState([]); 
  const [lastCreatedCookieStand, setLastCreatedCookieStand] = useState(null)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target); 
    const newCookieStand = {
      locationName: formData.get('locationName'),
      minCustomers: formData.get('minCustomers'),
      maxCustomers: formData.get('maxCustomers'),
      avgCookiesPerSale: formData.get('avgCookiesPerSale'),
    };

    setCookieStandData((prevData)=>[...prevData,newCookieStand]); 

    setLastCreatedCookieStand(newCookieStand);
    
    event.target.reset(); 
  }; 
  return(
    <>
    <form className='w-3/4 p-2 mx-auto my-auto rounded-md border bg-green-300 mt-8' >
      <div className='flex items-center justify-center text-2xl pt-2 pb-4 font-semibold'>Create Cookie Stand</div>
    <div className="">
      <div className=" w-3/4 p-2 mx-4 flex items-center">
      <label className=' mb-2 text-center font-semibold'>Location</label>
      <input name='locationName' id='locationName' className=' w-full ml-2 pl-1' placeholder="Cookie Stand Location"/>
      </div>
    <div className='flex items-stretch justify-evenly'>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold'>Minimum Customers per Hour</label>
        <input name="minCustomers" className='block w-full m-1 pl-1 font-semibold' id='minCustomers' placeholder="0"/>
      </div>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold'>Maximum Customers per Hour</label>
        <input name="maxCustomers" className='block w-full m-1 pl-1 font-semibold' id='maxCustomers'placeholder="0"/>
      </div>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold'>Average Cookies Per Sale</label>
        <input name="avgCookiesPerSale" className='block w-full m-1 pl-1 font-semibold' id='avgCookiesPerSale'placeholder="0"/>
      </div>
      <button className='block w-1/5 mx-4 p-2 h-20 font-semibold bg-green-500 hover:bg-blue-300'>Create </button>
    </div>
    </div>
  </form>
    {/* Display the JSON string of the last created Cookie Stand */}
    {lastCreatedCookieStand && (
        <div className="flex items-center justify-center p-4 font-mono text-gray-700 bg-gray-100 mt-8">
          {JSON.stringify(lastCreatedCookieStand, null, 2)}
        </div>
      )}
    <p className="flex items-center justify-center pt-8 pb-16 font-semibold text-gray-700">Report Table Coming Soon...</p>
    </>
  )
}