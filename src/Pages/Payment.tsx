import Container from "../components/Container";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Payment = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const maxDate = new Date("December 31, 2025");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-col bg-gradient-to-r from-cyan-100 to-blue-100 min-h-screen ">
        <h1 className="px-5 mt-10 text-3xl md:text-7xl  text-dark-alta flex mx-auto font-sans font-bold">
          Payment & Confirm
        </h1>

        <div className="grid grid-cols-2 lg:cols-row-2 w-full mx-5 md:mx-auto mt-20 md:mt-24 gap-5 pb-32 px-32">
          {/* Card 1 */}

          <div className="card w-full bg-base-100 shadow-xl border mb-5 h-full">
            <div className="card-body">
              
            </div>
          </div>
          {/* Card 2 */}
          <div className="grid grid-rows-2 gap-5">
            <div className="card w-full bg-base-100 shadow-xl border md:w-full">
              <div className="card-body lg:px-32">
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
                <div className="flex flex-col md:flex-row md:gap-3 mt-5">
                  <input
                    className="input input-bordered max-w-2xl w-full bg-white border border-gray-400 h-10 md:w-1/2"
                    type="text"
                    placeholder="name on card"
                  />
                  <input
                    className="input input-bordered max-w-2xl w-full bg-white border border-gray-400 h-10 md:w-1/2"
                    type="text"
                    placeholder="name on card"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:gap-2 mt-5">
                  <p className="flex my-auto w-60 md:w-auto">
                    Expiration Date :
                  </p>
                  <select className="text-primary select select-bordered">
                    <option value="">Visa</option>
                    <option value="">Alta-pay</option>
                    <option value="">OVO</option>
                    <option value="">Gopay</option>
                  </select>
                  <input
                    className="input input-bordered w-full bg-white border border-gray-400 md:w-60"
                    type="text"
                    placeholder="name on card"
                  />
                </div>
              </div>
            </div>

            {/* End Card 2 */}
            {/* Card 3 */}
            <div className="card w-full bg-base-100 shadow-xl border mb-5 h-full">
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
                  <p className="font-bold">
                    <span className="text-orange-alta">$200</span> x 2night
                  </p>
                  <p className="font-bold">
                    total price : <span className="text-orange-alta">$400</span>
                  </p>
                </div>
                <div className="flex justify-center md:justify-end mt-10">
                  <button
                    className="btn btn-wide flex bg-dark-alta text-white hover:bg-dark-alta hover:text-white hover:translate-y-1"
                    onClick={() => navigate("/trip")}
                  >
                    Confirm and Pay
                  </button>
                </div>
              </div>
            </div>
            {/* End Card 3 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
