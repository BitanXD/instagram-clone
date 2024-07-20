// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './TimelineUserPost.css'
function TimeLineUserPost({ url, limit = "5" }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data, Please Wait !</div>;
  }
  if (errorMessage !== null) {
    return <div>Error Occurred, {errorMessage}</div>;
  }

  function handlePrevious(){
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)

  }

  function handleNext(){
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left hover:cursor-pointer hover:opacity-60" />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
            />
          ))
        : null}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right hover:cursor-pointer hover:opacity-60" />
      <span className="circle-indicator">
        {images && images.length ? images.map((_,index) => (
            <button onClick={() => setCurrentSlide(index)} key={index} className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}></button>
        )) : null}
      </span>
    </div>
  );
}

export default TimeLineUserPost;
