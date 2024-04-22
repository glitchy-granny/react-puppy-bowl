import { useState } from "react";

function Nav({ puppies, setPuppies }) {
  const [searchValue, setSearchValue] = useState(""); // Declare state for search input

  const searchArray = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchValue);
    // You might want to filter `puppies` here or call a function passed from the parent component
  };

  return (
    <>
      <form onSubmit={searchArray}>
        <label>
          search:
          <input
            name="search"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
        </label>
        <input name="submit" type="submit" value="search"></input>
      </form>
    </>
  );
}

export default Nav;
