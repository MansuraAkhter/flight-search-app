const AvailableFlights = ({ flights }) => {
  const handleclick = () => {
    alert("selected");
  };
  return (
    <div>
      {flights.length ? <p className="mx-36">data parsed successfully</p> : ""}
      <div className="flex justify-center m-4">
        {flights.length ? (
          <table className="table-auto border-collapse border w-9/12 text-gray-600 text-sm text-center ">
            <thead>
              <tr className="table-auto border-collapse border bg-gray-300">
                <th>FLIGHT</th>
                <th>AIRCRAFT</th>
                <th>CLASS</th>
                <th>FARE</th>
                <th>ROUTE</th>
                <th>DEPARTURE</th>
                <th>ARRIVAL</th>
                <th>DURATION</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              {flights.length &&
                flights.map((flight, index) => (
                  <tr
                    key={index}
                    className="table-auto border-collapse border-y-2 border-red-200 odd:bg-gray-100  even:bg-gray-300"
                  >
                    <td className="px-6">
                      {flight.itineraries[0].segments.map((flightNo, index) => (
                        <p>
                          {flightNo.carrierCode} {flightNo.aircraft}{" "}
                        </p>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map(
                        (aircraftNo, index) => (
                          <p>{aircraftNo.flightNumber} </p>
                        )
                      )}
                    </td>
                    <td>
                      {flight.class[0].map((each, index) => (
                        <p>{each}</p>
                      ))}
                    </td>
                    <td>
                      {flight.fareBasis[0].map((each, index) => (
                        <p>{each}</p>
                      ))}
                    </td>

                    <td>
                      {flight.itineraries[0].segments.map((each, index) => (
                        <p>
                          {" "}
                          {each.arrival.iataCode} - {each.departure.iataCode}
                        </p>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {flight.itineraries[0].segments.map((each, index) => (
                        <p> {each.arrival.at}</p>
                      ))}
                    </td>
                    <td>
                      {" "}
                      {flight.itineraries[0].segments.map((each, index) => (
                        <p> {each.departure.at}</p>
                      ))}
                    </td>
                    <td>
                      {flight.itineraries.map((each, index) => (
                        <p>{each.duration}</p>
                      ))}
                    </td>
                    <td>
                      <p>{flight.price}</p>
                      <button
                        type="submit"
                        onClick={handleclick}
                        className="bg-blue-800 text-white rounded-md p-2"
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default AvailableFlights;
