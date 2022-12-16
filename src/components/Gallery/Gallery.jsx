import React, {useState} from "react";
import "./Gallery.css";
import pic1 from "/img/pic1.jpg";
import pic2 from "/img/pic2.jpg";
import pic3 from "/img/pic3.jpg";
import pic4 from "/img/pic4.jpg";
import pic5 from "/img/pic5.jpg";
import pic6 from "/img/pic6.jpg";
import pic7 from "/img/pic7.jpg";

const Gallery = () => {
  let galleryData = [
    {
      id: 1,
      imgSrc: pic1,
    },
    {
      id: 2,
      imgSrc: pic2,
    },
    {
      id: 3,
      imgSrc: pic3,
    },
    {
      id: 4,
      imgSrc: pic4,
    },
    {
      id: 5,
      imgSrc: pic5,
    },
    {
      id: 6,
      imgSrc: pic6,
    },
    {
      id: 7,
      imgSrc: pic7,
    },
  ];
  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempimgSrc] = useState('')
  const getImg = (imgSrc) =>{
    setTempimgSrc(imgSrc)
    setModel(true)
  }
  return (
    <>
      <div className={model?'model open':'model'}>
        <img src={tempimgSrc} onClick={()=>{setModel(false)}}/>
      </div>
      <section className="my--gallery">
        <h2 className="container text-center mt-3 mb-5">Gallery</h2>
        <div className="gallery">
          {galleryData.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={()=>{getImg(item.imgSrc)}}>
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
