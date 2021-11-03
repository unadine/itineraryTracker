function Form ({itineraryName,date,time,setItineraryName,setDate,setTime,itineraries,setItinerary}){

    const handlingChange = (e) => {
        if(e.target.name === 'itinerary'){
            setItineraryName(e.target.value);
        }
        if(e.target.name === 'time'){
            setTime(e.target.value);
        }
        if(e.target.name === 'date'){
            setDate(e.target.value);
        }

    }

    function submitForm(e) {
        e.preventDefault();
        const newItinerary = {
            id: itineraries.length + 1,
            itineraryName: itineraryName,
            date: date,
            time: time,
            completed:false
        };
        const updateItinerary = [...itineraries, newItinerary];
        setItinerary(updateItinerary);

        setItineraryName("");
        setDate("");
        setTime("");
    
      }


    return (
        <div className="text-center mb-2">
        <form onSubmit={submitForm} >
        <label htmlFor="itinerary">itinerary: </label>
        <input
        onChange={handlingChange}
        value={itineraryName}
          type="text"
          name="itinerary"
          className="p-2 ml-2 mb-3 border border-black w-1/2"
          id="itinerary"
          required
        />
        <br />
        <label htmlFor="date">date: </label>
        <input
        onChange={handlingChange}
        value={date}
          type="date"
          name="date"
          className="p-2 ml-9 mb-3 border border-black w-1/2"
          id="date"
          required
        />
        <br />
        <label htmlFor="time"> time: </label>
        <input
        onChange={handlingChange}
        value={time}
          type="time"
          name="time"
          className="p-2 ml-9 border border-black w-1/2"
          id="time"
          required
        />
        <br />
        <button className="px-3 ml-9 py-2 mt-3 text-sm text-white bg-green-600">Add</button>
      </form>
      </div>
    )
}

export default Form;