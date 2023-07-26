import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
// import glob from "glob";

function MyFlipBook({ setShowHome, selectedBook, setSelectedBook }) {
  const [images, setImages] = useState([]);

  function importAll(r) {
    return r.keys().map(r);
  }
  // const imagesT = importAll(
  //   require.context(`./${selectedBook}_book`, false, /\.(png|jpe?g|svg)$/)
  // );

  var imagesT = [];

  useEffect(() => {
    if (selectedBook === 1) {
      // console.log(selectedBook);
      setImages(
        importAll(require.context("./1_book", false, /\.(png|jpe?g|svg)$/))
      );
    }
    if (selectedBook === 2) {
      // console.log(selectedBook);
      setImages(
        importAll(require.context("./2_book", false, /\.(png|jpe?g|svg)$/))
      );
      // console.log(images);
    }
    if (selectedBook === 3) {
      // console.log(selectedBook);
      setImages(
        importAll(require.context("./3_book", false, /\.(png|jpe?g|svg)$/))
      );
      // console.log(images);
    }
    if (selectedBook === 4) {
      // console.log(selectedBook);
      setImages(
        importAll(require.context("./4_book", false, /\.(png|jpe?g|svg)$/))
      );
      // console.log(images);
    }
    if (selectedBook === 5) {
      // console.log(selectedBook);
      setImages(
        importAll(require.context("./5_book", false, /\.(png|jpe?g|svg)$/))
      );
      // console.log(images);
    }
    // else {
    //   setImages(
    //     importAll(require.context("./1_book", false, /\.(png|jpe?g|svg)$/))
    //   );
    //   console.log(images, "else con");
    // }
  }, [selectedBook]);
  // const imagesT = importAll(
  //   require.context("./1_book", false, /\.(png|jpe?g|svg)$/)
  // );
  // console.log(imagesT);
  //   useEffect(()=>{
  // if(selectedBook == 1){
  //   setImages(importAll(
  //     require.context("./1_book", false, /\.(png|jpe?g|svg)$/)
  //   ))
  //   if(selectedBook == 2){
  //     setImages(importAll(
  //       require.context("./2_book", false, /\.(png|jpe?g|svg)$/)
  //     ))
  //   }
  //   if(selectedBook == 3){
  //     setImages(importAll(
  //       require.context("./3_book", false, /\.(png|jpe?g|svg)$/)
  //     ))
  //   }
  //   if(selectedBook == 4){
  //     setImages(importAll(
  //       require.context("./4_book", false, /\.(png|jpe?g|svg)$/)
  //     ))
  //   }
  //   if(selectedBook == 5){
  //     setImages(importAll(
  //       require.context("./4_book", false, /\.(png|jpe?g|svg)$/)
  //     ))
  //   }
  // }
  //   },[])

  return (
    <>
      <HTMLFlipBook width={800} height={900}>
        {images?.map((image, index) => (
          <div className="demoPage" key={index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </HTMLFlipBook>
      {/* <div>
        <div>
          <img
            className="book_flip1"
            src="./assets/book_cover/1.png"
            alt="1"
            onClick={() => setSelectedBook(1)}
          />
        </div>
        <div>
          <img
            className="book_flip2"
            src="./assets/book_cover/2.png"
            alt="2"
            onClick={() => setSelectedBook(2)}
          />
        </div>
        <div>
          <img
            className="book_flip3"
            src="./assets/book_cover/3.png"
            alt="1"
            onClick={() => setSelectedBook(3)}
          />
        </div>
        <div>
          <img
            className="book_flip4"
            src="./assets/book_cover/4.png"
            alt="1"
            onClick={() => setSelectedBook(4)}
          />
        </div>
        <div>
          <img
            className="book_flip5"
            src="./assets/book_cover/5.png"
            alt="1"
            onClick={() => setSelectedBook(5)}
          />
        </div>
      </div> */}
    </>
  );
}

export default MyFlipBook;
