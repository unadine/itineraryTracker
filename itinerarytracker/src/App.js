import { useEffect, useState } from "react";
import List from './List';
import Form from './Form';

function App() {
  const [itineraries, setItinerary] = useState([]);
  const [ itineraryName, setItineraryName] = useState("");
  const [ date, setDate] = useState("");
  const [ time, setTime] = useState("");
  const [ status, setStatus] = useState("all");
  const [ filterItinerary, setFilterItinerary] = useState([]);

  useEffect(() => {
    switch(status){
      case 'completed':
        setFilterItinerary(itineraries.filter(x => x.completed === true));
        break;
      case 'uncompleted':
        setFilterItinerary(itineraries.filter(x => x.completed === false));
        break;
      default:
        setFilterItinerary(itineraries)
    }
  }, [itineraries,status]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div className="flex items-center justify-center mt-10 p-3 mx-5 ">
    <div className="w-1/2 font-bold border shadow-lg p-4">
      <div className=" mx-5 flex justify-between mt-8 mb-4 ">
        <h1 className="font-bold text-xl ">Itinerary tracker</h1>
        <div >
        <select onChange={handleStatus} className=" w-full border border-black p-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      </div>
      <Form  
      itineraryName={itineraryName}
      date={date}
      time={time}
      setItineraryName={setItineraryName}
      setDate={setDate}
      setTime={setTime}
      itineraries={itineraries}
      setItinerary={setItinerary} 

      /> 

      <List
      itineraries={itineraries}
      setItinerary={setItinerary}
      filterItinerary={filterItinerary} 

      />
    </div>
    </div>

  
  );
}

export default App;
