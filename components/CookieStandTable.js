import {hours} from './data';
import CookieStandTableRow from './CookieStandTableRow';
import useResource from "@/hooks/useResource"

export default function CookieStandTable({stands, deleteStand}){
  // const {resources: stands} = useResource(); 
  

  if(!stands || stands.length === 0){
    return <h2 className="text-center my-5 font-semibold text-2xl">No Cookie Stands Available</h2>;
  }
  
  let totalsByHour = new Array(hours.length).fill(0);
  stands.forEach(stand => {
    stand.hourly_sales.forEach((sale, index) => {
      totalsByHour[index] += sale;
    });
  });
  // console.log(stands);

  return(
    <table className="border border-green-600 w-3/4 mx-auto my-5">
      <thead clasName= "border border-green-600">
      <tr className="border border-green-600 bg-green-500">
        <th className="border border-green-600 text-center">Location</th>
        {hours.map((hour) => {
            return <th key={hour} className="border border-green-600 text-center">{hour}</th>
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
      <tr className='bg-green-500 border border-green-600 font-semibold'>
        <td className='border border-green-600'>Totals</td>
        {totalsByHour.map((total, index) => (
          <td className='border border-green-600' key={index}>{total}</td>
        ))}
        <td>{totalsByHour.reduce((a, b) => a + b, 0)}</td>
      </tr>
      </tfoot>
    </table>
  )
}
