import  {useParams}  from "react-router-dom"

export default function User(){
  //useParams returns an object containing URL parameters
  const params=useParams();
  const {abc}=useParams();
  return(
    <>
      <h1>User:{params.abc}</h1>
      <h1>User:{abc}</h1>
    </>
  )
}