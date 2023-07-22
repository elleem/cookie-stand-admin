import {hours, hourlySales} from './data'

export default function ReportTable({stands}){
  console.log('Rendering ReportTable with stands:', stands);
  if(!stands || stands.length === 0){
    return <h2 className="text-center my-5 font-semibold text-2xl">No Cookie Stands Available</h2>;
  }
  return(
    <table className="w-3/4 mx-auto my-5">
      <thead>
      <tr className="border border-gray-700 bg-green-500">
                    <th className="border border-gray-700 text-center">Location</th>
                    {hours.map((hour) => {
                        return <th key={hour} className="border border-gray-700 text-center">{hour}</th>
                    })}
                    <th>Totals</th>
                </tr>
      </thead>
      <tbody >
        {stands.map((stand, index)=>(
            <tr key={index}>
            <td>{stand.location}</td>
            {stand.hourlySales.map((sale, saleIndex) => (
              <td key={saleIndex}>{sale}</td>
              ))}
          </tr>
        ))}
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  )
}