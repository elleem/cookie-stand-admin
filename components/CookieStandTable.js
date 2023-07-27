import {hours} from './data'

export default function CookieStandTableTable({stands}){
  // console.log('Rendering ReportTable with stands:', stands);
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
      {stands.map((stand, index)=> {
        stand.hourlySales.forEach((sale, saleIndex) => {
          totalsByHour[saleIndex] += sale;
        });

        return (
          <tr className ='border border-gray-700 even:bg-green-500 odd:bg-green-300' key={index}>
            <td className ='border border-gray-700'>{stand.location}</td>
            {stand.hourlySales.map((sale, saleIndex) => (
              <td className ='border border-gray-700' key={saleIndex}>{sale}</td>
            ))}
            <td className ='border border-gray-700'>
              {stand.hourlySales.reduce((a, b) => a + b, 0)}
            </td>
          </tr>
        );
      })}
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