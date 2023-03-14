import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import listhosting from '../assets/listhosting.jpg'

const ListHosting = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mx-auto text-6xl h-screen">
        <div className="flex align-middle justify-center ">
          <img src={listhosting} className="h-96 flex my-auto" />
        </div>
      </div>
      <div className="flex bottom-20 right-5 lg:bottom-32 lg:right-44 absolute">
        <button className="text-[#4397fb]" onClick={() => navigate('/hosting')}>
          <MdOutlineAddCircleOutline size={80} />
        </button>
      </div>
    </div>
  );
};

export default ListHosting;
