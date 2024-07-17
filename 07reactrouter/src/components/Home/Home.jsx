export default function Home(){
  return(
    <div className="flex flex-col m-5">
    <div className="flex justify-around mb-10">
      <div>
        <img src="https://images.pexels.com/photos/1322466/pexels-photo-1322466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width='350' />
      </div>
      <div className="flex flex-col justify-center">
        <p>Download Now</p>
        <p>Lorem ipsum</p>
        <button className="bg-green-500 rounded-lg px-2 py-1">Download now</button>
      </div>
    </div>
    <div className="flex flex-col self-center">
      <img src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width='350'/>
      <p>Lorem, ipsum dolor.</p>
    </div>
    </div>
  )
}