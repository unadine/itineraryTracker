import moment from "moment";

function Card({itineraries,item,setItinerary, date,time}){
   
    const handleDelete = (id) => {
        const removeItem = itineraries.filter((x) => x.id !== item.id);
        setItinerary(removeItem);
    }

    const handlecomplete = () => {
        setItinerary(itineraries.map((x)=>{
            if(x.id === item.id){
                return{
                    ...x,completed: !x.completed
                }
            }else{
                return x;
            }
            
        }))
    }

    return(
        <div className={`flex justify-between mx-5 bg-gray-300 mb-4 p-3  ${item.completed ? "bg-red-300": ""}`}>
         <div>
            <h2 className="font-bold">{item.itineraryName}</h2>
            <span className="block  text-sm">{moment(date).format('ddd,ll')} at {time}</span>
        </div>
        
        <div className="flex">
        <button onClick = {handlecomplete}>
            <i className="fas fa-check"></i>
        </button>

        <button onClick = {handleDelete}>
        <img alt="delete" src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
        </button>
        </div>
        </div>
       
    )

}


export default Card;