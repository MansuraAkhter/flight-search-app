import DatePicker from "react-datepicker";
import { useState } from "react";
import data from "../data/data.json";
import AvailableFlights from "./AvailableFlights";

const FlightForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [tripType, setTripType] = useState("One Way");
  const [flights, setFlights] = useState([]);
  const [age, setAge] = useState("Adult");
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [extraOptions, setExtraOptions] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleTripType = (value) => {
    setTripType(value);
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const handleCheckBox = () => {
    setExtraOptions(!extraOptions);
  };

  //performs the search and prints out all the form data in the console
  const handleSubmit = () => {
    setFlights(data.flightOffer);
    console.log(data);
    console.log(
      "from: " +
        from +
        "\n" +
        "to: " +
        to +
        "\n" +
        "start Date: " +
        startDate +
        "\n" +
        "end Date: " +
        endDate +
        "\n" +
        "adult(s): " +
        adultCount +
        "\n" +
        "child(s): " +
        childCount +
        "\n" +
        "infant:" +
        infantCount +
        "\n" +
        "environment: " +
        selectedValue +
        "\n" +
        "extra value: " +
        extraOptions
    );
  };

  return (
    <div className="">
      <div className="border-grey-300 border-b-2">
        <h1 className="pl-32 text-xl font-bold">Master Price</h1>
      </div>
      <div className="text-center flex justify-center mx-36 border-blue-200 border-b-2 p-4">
        <div className="flex justify-stretch items-stretch m-0 p-0">
          <input
            type="radio"
            id="One Way"
            name="One Way"
            value="One Way"
            checked={tripType === "One Way"}
            onChange={() => handleTripType("One Way")}
            className="hidden peer "
          />

          <label
            htmlFor="One Way"
            className="peer-checked:bg-blue-800 peer-checked:text-white  p-2 m-0 border-2 border-blue-800"
          >
            One Way
          </label>
        </div>

        <div className="flex justify-stretch items-stretch m-0 p-0">
          <input
            type="radio"
            id="Round Trip"
            name="Round Trip"
            value="Round Trip"
            checked={tripType === "Round Trip"}
            onChange={() => handleTripType("Round Trip")}
            className="hidden peer"
          />

          <label
            htmlFor="Round Trip"
            className="peer-checked:bg-blue-800 peer-checked:text-white p-2 m-0 border-y-2 border-blue-800 border-collapse "
          >
            Round Trip
          </label>
        </div>
        <div className="flex justify-stretch items-stretch m-0 p-0">
          <input
            type="radio"
            id="Multicity"
            name="Multicity"
            value="Multicity"
            checked={tripType === "Multicity"}
            onChange={() => handleTripType("Multicity")}
            className="hidden peer"
          />

          <label
            htmlFor="Multicity"
            className="peer-checked:bg-blue-800 peer-checked:text-white  p-2 m-0 border-2 border-blue-800 border-collapse"
          >
            Multicity
          </label>
        </div>
      </div>
      <div>
        <div className="flex justify-center mx-36 border-blue-200 border-b-2 p-4">
          <input
            type="text"
            placeholder="from.."
            onChange={(e) => setFrom(e.target.value)}
            className="border-2 border-gray-500 ml-2 px-2"
          />
          <input
            type="text"
            placeholder="to.."
            onChange={(e) => setTo(e.target.value)}
            className="border-2 border-gray-500 ml-2 px-2"
          />
          <DatePicker
            placeholder="start date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border-2 border-gray-500 ml-2"
          />
          {tripType !== "One Way" && (
            <DatePicker
              placeholder="end date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="border-2 border-gray-500 ml-2 px-2"
            />
          )}
          <select
            name="Age"
            id="Age"
            onChange={(e) => setAge(e.target.value)}
            className=" text-gray-800 focus:outline-none border-2 border-gray-500 ml-2"
          >
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
            <option value="Infant">Infant</option>
          </select>
          {age === "Adult" && (
            <select
              name="adultCount"
              id="adultCount"
              onChange={(e) => setAdultCount(e.target.value)}
              className="text-gray-800 focus:outline-none border-2 border-gray-500 ml-2"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
          {age === "Child" && (
            <select
              name="childCount"
              id="childCount"
              onChange={(e) => setChildCount(e.target.value)}
              className="text-gray-800 focus:outline-none border-2 border-gray-500 ml-2"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
          {age === "Infant" && (
            <select
              name="infantCount"
              id="infantCount"
              onChange={(e) => setInfantCount(e.target.value)}
              className="text-gray-800 focus:outline-none border-2 border-gray-500 ml-2"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          )}
        </div>
        <div className="flex justify-between items-center border-b-2 border-blue-200 mx-36 p-4">
          <div>
            <input
              value="extra Options"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <span> Extra Options </span>
          </div>
          <div className="flex">
            <h1>Environment </h1> {" "}
            <input
              type="radio"
              id="Dummy"
              name="Dummy"
              value="Dummy"
              checked={selectedValue === "Dummy"}
              onChange={() => handleRadioChange("Dummy")}
            />
              <label htmlFor="Dummy">Dummy</label> {" "}
            <input
              type="radio"
              id="PDT"
              name="PDT"
              value="PDT"
              checked={selectedValue === "PDT"}
              onChange={() => handleRadioChange("PDT")}
            />
              <label htmlFor="PDT">PDT</label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-800 text-white rounded-md px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>
      <AvailableFlights flights={flights} />
    </div>
  );
};

export default FlightForm;
