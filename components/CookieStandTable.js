import {hours} from './data';
import CookieStandTableRow from './CookieStandTableRow';
import useResource from "@/hooks/useResource"

export default function CookieStandTableTable({stands, deleteStand}){
  // const {resources: stands} = useResource(); 

  if(!stands || stands.length === 0){
    return <h2 className="text-center my-5 font-semibold text-2xl">No Cookie Stands Available</h2>;
  }
  
  let totalsByHour = new Array(hours.length).fill(0);

  return(
    <table className="w-3/4 mx-auto my-5">
      <thead>
      <tr className=" bg-green-500">
        <th className=" text-center">Location</th>
        {hours.map((hour) => {
            return <th key={hour} className=" text-center">{hour}</th>
        })}
        <th>Totals</th>
      </tr>
      </thead>
      <tbody>
      {/* console.log(stands); */}
      {stands.map((stand)=> (
      <CookieStandTableRow key={stand.id} stand={stand} deleteStand={deleteStand}/>
          ))}
      </tbody>
      <tfoot>
      <tr className='bg-green-500 border border-gray-700 font-semibold'>
        <td className='border border-gray-700'>Total</td>
        {totalsByHour.map((total, index) => (
          <td className='border border-gray-700' key={index}>{total}</td>
        ))}
        <td>{totalsByHour.reduce((a, b) => a + b, 0)}</td>
      </tr>
      </tfoot>
    </table>
  )
}
