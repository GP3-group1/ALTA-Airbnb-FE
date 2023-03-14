import React, { FC, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

type ImageInputProps = {
  onImageChange?: (image: File | null) => void;
};

const Hosting: FC<ImageInputProps> = ({ onImageChange }) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [overview ,setOverview] = useState("")
  const [facilities, setFacilities] = useState("");
  const [price, setPrice] = useState<number>();
  const [img ,setImg] = useState( )

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const images = Array.from(files).filter((file) =>
        file.type.startsWith("image/"),
      );
      setSelectedImages((prevImages) => [...prevImages, ...images]);
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreviewUrls((prevUrls) => [...prevUrls, ...urls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(formData);
    
    selectedImages.forEach((image) => formData.append("images", image));
    formData.append("name", name);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("overview", overview);
    formData.append("facilities", facilities);
    formData.append("price", price?.toString() || "");
    try {
      await axios.post("http://104.198.56.90:8081/rooms", formData);
      alert("Data uploaded successfully");
      setName("");
      setLocation("");
      setDescription("");
      setOverview("");
      setFacilities("");
      setPrice(undefined);
      setSelectedImages([]);
      setPreviewUrls([]);
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };




  return (
    <div className="flex flex-col ">
      <Navbar />
      <form onSubmit={handleSubmit} className="flex flex-col px-32">
      <div className="grid grid-cols-4 gap-2 mt-5 px-5 ">
          {previewUrls.length > 0 ? (
            previewUrls.map((url, index) => (
              <div key={index}>
                <img src={url} alt="Preview" style={{ maxWidth: "50%" }} />
                <button
                  className="btn btn-xs mt-2 mb-2 flex mx-auto"
                  onClick={() => handleRemoveImage(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div>No images selected</div>
          )}
        </div>
        <div>
          <input
            className="input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
          />
        </div>
        
        {/* Test input */}
        <div>
          {/* <input type="file" onChange={(e) => handleInputChange(e)}  /> */}
        </div>

        {/* end */}
        {/* Card input */}
        <div className="card  shadow-md mt-20 ">
          <div className="card-body">
            <div className="flex flex-col gap-4 ">
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl"
                type="text"
                placeholder="name"
                name="name"
              />
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl "
                type="text"
                placeholder="Location"
                name="location"
              />
              <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl "
                type="text"
                placeholder="Description"
                name="description"
              />
              <input
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl "
                type="text"
                placeholder="overview"
                name="overview"
              />
              <input
              value={facilities}
              onChange={(e) => setFacilities(e.target.value)}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl "
                type="text"
                placeholder="facilities"
                name="facilities"
              />
              <input
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
                className="mx-auto input input-bordered input-accent w-full max-w-4xl "
                type="number"
                placeholder="Price"
                name="price"
              />
              <button
                type="submit"
                className="btn btn-wide bg-dark-alta text-white hover:bg-dark-alta hover:text-white hover:translate-y-1 mt-5 mx-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Hosting;
