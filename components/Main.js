import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";

export default function Main(){
  function handleFormSubmit(event){
    event.preventDefault(); 
    const info ={
      location: event.target.locationName.value,
      minimum_customers_per_hour: event.target.minCustomers.value,
      maximum_customers_per_hour: event.target.maxCustomers.value,
      average_cookies_per_sale: event.target.avgCookiesPerSale.value,
    }
    console.log(info)
  }
  
return(
  <>
  <CreateForm formSubmitHandler={handleFormSubmit}/>
  </>
)
}
