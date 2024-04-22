import { useState } from "react";
import axios from "axios";

const APIURL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACCT-ET-PT-B/teams";
function AllPlayerView({ puppies, setPuppies }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchedPuppies, setSearchedPuppies] = useState(puppies);
  const searchArray = (e) => {
    e.preventDefault();
    const newArray = puppies.filter((puppy) => {
      const puppyName = puppy.name;
      if (puppyName.indexOf(searchValue) > -1) {
        return true;
      }
    });
    console.log(newArray);
    setSearchedPuppies(newArray);
  };

  return (
    <>
      <div className="AllPlayers">
        {searchedPuppies.map((puppy) => (
          <img src={puppy.imageURL} alt={puppy.name} />
        ))}
      </div>
    </>
  );
}

export default AllPlayerView;
