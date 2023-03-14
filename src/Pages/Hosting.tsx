import React, { FC, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

type ImageInputProps = {
  onImageChange?: (image: File | null) => void;
};

const Hosting: FC<ImageInputProps> = ({ onImageChange }) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const images = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      setSelectedImages((prevImages) => [...prevImages, ...images]);
      const urls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewUrls((prevUrls) => [...prevUrls, ...urls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setSelectedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedImages.forEach((image) => formData.append("images", image));
    try {
      await axios.post("", formData);
      alert("Images uploaded successfully");
      setSelectedImages([]);
      setPreviewUrls([]);
    } catch (error) {
      alert(`Error: ${error}`);
    }
    console.log(handleUpload);
    
  };

  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="grid grid-cols-4 gap-2 mt-5 px-5 ">
        {previewUrls.length > 0 ? (
          previewUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt="Preview" style={{ maxWidth: "100%" }} />
              <button className="btn btn-xs mt-2 mb-2 flex mx-auto" onClick={() => handleRemoveImage(index)}>Remove</button>
            </div>
          ))
        ) : (
          <div>No images selected</div>
        )}
      </div>
      <div>
        <input className="input" type="file" accept="image/*" onChange={handleImageChange} multiple />
      </div>
      <button className="btn btn-wide justify-center mx-auto" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Hosting;
