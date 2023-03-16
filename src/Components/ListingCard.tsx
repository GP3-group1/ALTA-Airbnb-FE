import React, { FC } from "react";
import seririt from "../assets/seririt.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import { SpinningCircles } from "react-loading-icons";
// import { Tooltip } from 'react-tooltip'

interface myProps {
  id: number;
  title: string;
  location: string;
  rating: any;
  price: any;
  overview?: string;
  description?: string;
  facilities?: string;
  image?: string;
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => Promise<void>;
  handleDetail?: React.MouseEventHandler;
  editModal?: string;
  loading: boolean;
  imageModal?: string
}

const ListCard: FC<myProps> = ({
  id,
  title,
  location,
  rating,
  image,
  price,
  loading,
  handleDetail,
  handleDelete,
  handleEdit,
  editModal,
  imageModal,
}) => {
  const imgUrl = "https://storage.googleapis.com/alta-airbnb/";

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleEdit?.(id);
  };
  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleDelete?.(id);
  };
  if (loading) {
    return (
      <h1 className="flex justify-center">
        <SpinningCircles />
      </h1>
    );
  }
  return (
    <div className="md:w-full w-full h-fit rounded-md lg:max-w-full" key={id}>
      {/* <Tooltip className="flex justify-center w-fit mx-auto mb-5 text-lg text-white bg-inherit bg-blue-gray-600 rounded-xl px-5" id="my-tooltip" /> */}
      <label  onClick={handleDetail} htmlFor={imageModal}>
      <img src={imgUrl + image} alt="" className="rounded-md cursor-pointer" width={400}     />
      
      </label>

      <div className=" mt-2 gap-2 flex flex-col mb-5">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-sm">{location}</p>
        <p className="flex text-sm gap-1 items-center">
          <AiTwotoneStar />
          {rating}
        </p>
        <p>
          <span className="text-orange-600 text-sm">${price}</span> night
        </p>
      </div>
      <div className="flex justify-evenly mt-2">
        <button onClick={handleEditClick}
        className="btn btn-sm w-36 items-center pt-1 bg-orange-alta border-none hover:bg-orange-alta hover:translate-y-1">
          <label
            htmlFor={editModal}
            
          >
            Edit
          </label>
        </button>
        <button
          type="button"
          className="btn btn-sm w-36 items-center pt-1 bg-red-500 border-none hover:bg-red-800 hover:translate-y-1"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListCard;
