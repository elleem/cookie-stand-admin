import {hours} from './data.js';
import ReportTable from "./ReportTable.js";


export default function CreateForm({formSubmitHandler}){


  return(
    <>
    <form onSubmit={formSubmitHandler} className='w-3/4 p-2 mx-auto my-auto rounded-md border bg-green-300 mt-8' >
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
    <ReportTable/>
    </>
  )
}