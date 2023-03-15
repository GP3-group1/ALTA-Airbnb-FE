import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Navbar from "../components/Navbar";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import axios from "axios";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const Account = () => {
const [saldo, setSaldo] = useState<number>()
const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const Navigate = useNavigate();

    const updateSaldo = async() => {

      try {
        const addSalddo = {
            amount: saldo
        }
      const res =  await axios.put('http://104.198.56.90:8081/users/balances' , addSalddo , {
            headers: {Authorization : `Bearer ${cookies.userToken}`}
        })
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Top-up Diamon ML successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        
        }
        
      } catch (error) {
        
      }
        
    }
  const goTrip = () => {
    Navigate("/trip");
  };

  const goProfile = () => {
    Navigate("/profile");
  };
const goList = () => {
  Navigate("/listhosting");
}
  return (
    <>
      <Navbar />
      <div className="px-10 py-10">
        <h1 className="mb-10 text-3xl font-bold">Account</h1>
        {/* profile */}
        <div
          onClick={goProfile}
          className="border-b-2 py-2 flex flex-row cursor-pointer justify-between items-center"
        >
          <div className="grid grid-cols-2 w-fit ">
            <CgProfile className="text-6xl" />
            <div>
              <p>ultramen joged</p>
              <p>Check profile</p>
            </div>
          </div>
          <MdKeyboardArrowRight className="text-3xl " />
        </div>
        {/* hosting */}
        <h1 className="my-5 text-2xl font-semibold ">Hosting</h1>
        <div className="border-b-2 rounded-md py-2 cursor-pointer flex flex-row justify-between items-center">
          <div className="grid grid-cols-2 w-fit ">
            <p>Rent your place</p>
          </div>
          <MdKeyboardArrowRight className="text-3xl " />
        </div>
        {/* altapay */}
        <h1 className="my-5 text-2xl font-semibold ">Altapay</h1>
        <label htmlFor="my-modal-6" className="border-b-2 rounded-md py-2 flex flex-row cursor-pointer justify-between items-center">
          <div className="grid grid-cols-2 w-fit cursor-pointer ">
            <p >
              Top up
            </p>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle flex justify-center">
              <div className="modal-box ">
                <div className="flex flex-col justify-center mx-auto">
                    <h1 className="text-lg font-bold text-[#4397fb]">Masukkan saldo :</h1>
                <input className="input input-md border border-[#4397fb] mt-5 mb-5" type="number" value={saldo}onChange={(e) => setSaldo(parseInt(e.target.value))} />
                <div className="modal-action mx-auto">
                  <label htmlFor="my-modal-6" className="btn bg-orange-alta border-none hover:bg-orange-alta">
                    Close
                  </label>
                    <label htmlFor="my-modal-6" className="btn btn-md bg-dark-alta border-none hover:bg-dark-alta" onClick={updateSaldo}>Confirm</label>
                </div>
                </div>
              </div>
            </div>
          </div>
          <MdKeyboardArrowRight className="text-3xl " />
        </label>
        {/* trip */}
        <h1 className="my-5 text-2xl font-semibold ">Trip</h1>
        <div
          onClick={goTrip}
          className="border-b-2 rounded-md py-2 flex cursor-pointer flex-row justify-between items-center"
        >
          <div className="grid grid-cols-2 w-fit ">
            <p>Check your trip</p>
          </div>
          <MdKeyboardArrowRight className="text-3xl " />
        </div>
      </div>
    </>
  );
};

export default Account;
