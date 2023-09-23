import React, {useState,useEffect} from 'react';

function Comic({title,issue,image_url,setComics,id, comics}) {
  const [showImage, setShowImage] = useState(true);

  function toggleDisplay() {
    setShowImage(prevShowImage => !prevShowImage);
  }

  function removeComic(){
    const updatedComics = comics.filter(comic => comic.id !== id);
    setComics(updatedComics);

    fetch(` http://localhost:8004/comics/${id}`, {
      'method': 'DELETE'
    })
  }
  return (
    <div className="comic-item" onClick={toggleDisplay}>
      {showImage ? (
        <img src={image_url} alt={"Comic Issue Image"} />
      ) : (
        <div>
          <h3>{title}</h3>
          <h4>{issue}</h4>
        </div>
      )}
      <button onClick={removeComic}>Remove</button>
    </div>
  );
}

export default Comic
