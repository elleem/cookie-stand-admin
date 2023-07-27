

export default function CookieStandTableRow({stand, deleteStand}) {
  console.log (stand)
  function clickHandler(){
    deleteStand(stand.id); 
  }
  if (stand.hourly_sales.length == 0){
    stand.hourly_sales = new Array(hours.length).fill(0);
  }
  return (
    <tr className ='border border-gray-700 even:bg-green-500 odd:bg-green-300'>
      <td className ='border border-gray-700'> {stand.location} <button onClick={clickHandler}>[x]</button></td>
      {stand.hourly_sales.map((sale, saleIndex) => (
        <td className ='border border-gray-700' key={saleIndex}>{sale}</td>
      ))}
      <td className ='border border-gray-700'>
        {stand.hourly_sales.reduce((a, b) => a + b, 0)} 
      </td>
    </tr>
  );
}
