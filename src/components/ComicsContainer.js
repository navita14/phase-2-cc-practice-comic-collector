import Comic from "./Comic"
import React, {useState,useEffect} from 'react';

function ComicsContainer({comics,setComics}) {
  return (
    <div>
      {comics.map((comic) => {
        return <Comic key={comic.id} {...comic} setComics={setComics} comics={comics} />;
      })}
    </div>
  );
}

export default ComicsContainer
