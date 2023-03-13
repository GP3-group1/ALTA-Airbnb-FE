import Container from "../components/Container";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";

const Payment = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const maxDate = new Date("December 31, 2025");
  return (
    <div className="flex flex-col">
      <Navbar />
     <div className="flex flex-col bg-gradient-to-r from-cyan-200 to-blue-300 h-screen">
     <h1 className="px-5 mt-20 text-7xl mb-20 text-dark-alta flex mx-auto font-sans font-bold">Payment & Confirm</h1>

<div className="flex flex-row mx-auto mt-20 gap-5 ">
  {/* Card 1 */}
  <div className="card w-full bg-base-100 shadow-xl border">
    <div className="card-body">
      <select className="text-primary select select-bordered">
        <option value="">Visa</option>
        <option value="alta-pay">Alta-pay</option>
        <option value="">OVO</option>
        <option value="">Gopay</option>
      </select>
      <input
        className="input input-bordered max-w-2xl w-full bg-white border border-gray-400 h-10 mt-5"
        type="text"
        placeholder="name on card"
      />
      <div className="flex flex-row gap-3 mt-5">
        <input
          className="input input-bordered max-w-2xl w-full bg-white border border-gray-400 h-10"
          type="text"
          placeholder="name on card"
        />
        <input
          className="input input-bordered max-w-2xl w-full bg-white border border-gray-400 h-10"
          type="text"
          placeholder="name on card"
        />
      </div>
      <div className="flex flex-row gap-2 mt-5">
        <p className="flex my-auto w-60">Expiration Date :</p>
        <select className="text-primary select select-bordered">
          <option value="">Visa</option>
          <option value="">Alta-pay</option>
          <option value="">OVO</option>
          <option value="">Gopay</option>
        </select>
        <input
          className="input input-bordered w-full bg-white border border-gray-400  "
          type="text"
          placeholder="name on card"
        />
      </div>
    </div>
  </div>
  {/* Card 2 */}
  <div className="card w-full bg-base-100 shadow-xl border">
    <div className="card-body">
      <h1 className="text-2xl">Ocean Beachfront Luxury</h1>
      <div className="flex flex-row gap-2 mt-5">
       
        <DatePicker
        placeholderText="Check-in"
          id="start_date"
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          maxDate={maxDate}
          className="border border-gray-400 py-2 px-4 rounded-lg w-full"
        />
           <FaCalendar className="h-6 w-6 my-auto text-gray-500" />
        <DatePicker
          placeholderText="Check-Out"
          id="end_date"
          selected={endDate}
         onChange={(date: Date | null) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          maxDate={maxDate}
          className="border border-gray-400 py-2 px-4 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-3 mt-10">
      <p className="font-bold"><span className="text-orange-alta">$200</span> x 2night</p>
      <p className="font-bold">total price : <span className="text-orange-alta">$400</span></p>
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
  );
};

export default Payment;
