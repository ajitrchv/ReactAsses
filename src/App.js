import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
/*
<form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          { <label>Title</label> }
          <input
            type="text"
            
            placeholder="Add your text here"
            // onChange={titleChangeHandler}
          />
        </div>
      </div>
    </form>
*/