import { useState } from "react";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { hourlySales } from "./data";
import Header from "./Header";
import Footer from "./Footer"; 

export default function Main(){
  const [stands,setStands] = useState([]); 

  function handleFormSubmit(event){
    event.preventDefault(); 
    const info ={
      location: event.target.locationName.value,
      minimum_customers_per_hour: event.target.minCustomers.value,
      maximum_customers_per_hour: event.target.maxCustomers.value,
      average_cookies_per_sale: event.target.avgCookiesPerSale.value,
      hourlySales:hourlySales
    }
    setStands((prevStands) => [...prevStands, info]);
    console.log(info);
  }
  
return(
  <>
  <Header/>
  <CreateForm formSubmitHandler={handleFormSubmit}/>
  <ReportTable stands={stands}/>
  <Footer stands={stands}/>
  </>
)
}
