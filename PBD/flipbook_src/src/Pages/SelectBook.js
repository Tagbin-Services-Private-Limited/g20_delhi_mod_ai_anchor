import MyFlipbook from "../Component/MyFlipbook";

function SelectBook({ selectedBook, setSelectedBook }) {
  return (
    <>
      <div className="main_box d-flex justify-content-center">
        {/* <h1 style={{ color: "white" }}>{selectedBook}</h1> */}
        <MyFlipbook selectedBook={selectedBook} />
      </div>
    </>
  );
}

export default SelectBook;
