import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, onDeleteClick}) {

  const listingDisplay = listings.map((listing) => {
    return (
    <ListingCard 
    listing={listing} 
    onDeleteClick={onDeleteClick}
    />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
