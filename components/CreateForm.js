import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResource";

export default function CreateForm(){
  const { user } = useAuth();
  const { createResource } = useResource();

  function localFormSubmitHandler(event) {
    event.preventDefault();
    const info = {
      location: event.target.locationName.value,
      minimum_customers_per_hour: parseInt(event.target.minCustomers.value),
      maximum_customers_per_hour: parseInt(event.target.maxCustomers.value),
      average_cookies_per_sale: parseFloat(event.target.avgCookiesPerSale.value),
      owner: user.id
    };
    createResource(info);
  }

  return(
    <>
    <form onSubmit={localFormSubmitHandler} className='w-3/4 p-2 mx-auto my-auto rounded-md border border-green-500 bg-green-300 mt-8' >
    <div className="flex justify-evenly items-end my-1">
      <div className=" block w-3/4 p-2 mx-4">
      <label className='block mb-2 text-center font-bold'>ADD LOCATION</label>
      <input name='locationName' id='locationName' className='block w-full ml-2 pl-1' placeholder="Cookie Stand Location"/>
      </div>
      <button className='block w-1/2 rounded-md mx-4 p-2 font-bold bg-green-500 hover:bg-blue-300'>CREATE STAND </button>
      </div>
    <div className='flex items-stretch justify-evenly'>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold'>MINIMUM CUSTOMERS PER HOUR</label>
        <input name="minCustomers" className='block w-full m-1 pl-1 mr-4 font-bold' id='minCustomers' placeholder="0"/>
      </div>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold '>MAXIMUM CUSTOMERS PER HOUR</label>
        <input name="maxCustomers" className='block w-full m-1 pl-1 font-bold ' id='maxCustomers'placeholder="0"/>
      </div>
      <div className='p-1 rounded-md'>
        <label className='block p-1 text-center font-semibold'>AVERAGE COOKIES FOR SALE</label>
        <input name="avgCookiesPerSale" className='block w-full m-1 pl-1 font-bold' id='avgCookiesPerSale'placeholder="0"/>
      </div>
    </div>
  </form>
    </>
  )
}