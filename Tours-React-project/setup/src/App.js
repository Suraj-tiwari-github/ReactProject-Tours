import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Tours from "./Tours";
import data from "./data";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/react-tours-project";
//* the above url is not working, but we are able to get the data in the browser while pasting this url.
//* we have copy the response and storing that response in data.js file to work further.

function App() {
  // const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(data);
  console.log(tours);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h3>No More Tours Left</h3>
          <button
            className="btn"
            onClick={() => {
              setTours(data);
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
