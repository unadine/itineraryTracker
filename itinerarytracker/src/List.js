import Card from './Card';

const List = ({itineraries,setItinerary,filterItinerary}) =>{
    return(
        <>
    <ul>
        {filterItinerary.map((item) => (
            <Card 
            itineraries = {itineraries}
            key={item.id} 
            item={item} 
            setItinerary={setItinerary}
            date = {item.date}
            time = {item.time}
                /> 
        ))}
    </ul>
        </>
    )
}

export default List;