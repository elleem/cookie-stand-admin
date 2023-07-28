
import CreateForm from "./CreateForm";
import CookieStandTable from "./CookieStandTable";
import useResource from "@/hooks/useResource";


export default function CookieStandAdmin(){
  const {resources, deleteResource} = useResource(); 
  
return(
  <>
  <CreateForm/>
  <CookieStandTable stands={resources || []} deleteStand={deleteResource}/>
  </>
)
}
