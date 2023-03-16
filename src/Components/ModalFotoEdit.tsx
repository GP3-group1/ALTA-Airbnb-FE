import React, { FC, useEffect, useState } from 'react'

export interface AddFoto {
  room_id: string;
  image: File | null
}

interface FotoProps {
  onSubmit: (foto: AddFoto, e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  newFoto: AddFoto
  editMode: boolean
} 

const initialFoto : AddFoto = {
  room_id: "",
  image: null
}



const ModalFotoEdit: FC<FotoProps> = ({onSubmit, newFoto, editMode}) => {
  const [photo, setPhoto] = useState<AddFoto>(newFoto);
  const [showImg, setShowImg] = useState<string>('')

  useEffect(() => {
    if(editMode || !editMode) {
      setPhoto(newFoto);
    }
  },[newFoto,editMode])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(photo, e);
    setPhoto(initialFoto);
  };

  const handleChange = (e: any) => {
   const selectedImg = e.target.files[0]
   setPhoto((prev) => ({
    ...prev,
    image: selectedImg || null
  }));
   if(selectedImg){
    const imageUrl = URL.createObjectURL(selectedImg)
    setShowImg(imageUrl)
   }
  }

  const submitable =
    photo.image != null &&
    photo.room_id != ""
    ? "add-foto-modal"
    : "";

  return (
    <div>
      <input type="checkbox" id="add-foto-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-foto-modal"
            className="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-xl mb-3">
            Edit Your Image
          </h3>
          <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-center mt-10">
            
              {photo.image && (
                <img
                  src={showImg}
                  alt="Selected image"
                  width={300}
                />
              )}
              <input
                type="file"
                name="image"
               
                onChange={handleChange}
                id="image-input"
              />
              <label htmlFor="image-input">Choose an image</label>
            </div>
           
            <div className="flex justify-between items-center mt-20">
              <h1 className="text-accent visible">Add your new villa's foto</h1>
              <button type="submit">
                <label
                  htmlFor={submitable}
                  className="btn bg-dark-alta border border-dark-alta text-white  hover:text-dark-alta hover:bg-white hover:border-dark-alta"
                >
                  Submit
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalFotoEdit