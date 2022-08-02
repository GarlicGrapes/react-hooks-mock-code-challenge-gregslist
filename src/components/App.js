import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then((data) => {
      setListings(data)
      console.log(data)
    })
  }, [])
  
  function onDeleteClick(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }





    const displayedListings = listings.filter((listing) => listing.description.includes(search))


  


  return (
    <div className="app">
      <Header 
        handleSearch={setSearch}
      />
      <ListingsContainer 
        listings={displayedListings} 
        setListings={setListings} 
        onDeleteClick={onDeleteClick} 
      />
    </div>
  );
}

export default App;
