import { useEffect, useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import data from './data.json';
import PDFViewer from './PDFViewer';

function App(props) {


const location = useLocation();
const [filteredData, setFilteredData] = useState([]);
const [showContent, setShowContent] = useState(false);
const [showHome, setShowHome] = useState(true);
const [selectedItem, setSelectedItem] = useState();
let numberOfItems, newArr;


useEffect(() => {
  const listDocID = new URLSearchParams(location.search).get("id");

  if (listDocID) {
    newArr = listDocID.split(",")
    setFilteredData(data.filter(item => newArr.includes(item.id.toString())));

    console.log("newArr", newArr)
    numberOfItems = listDocID.split(",").length
    console.log("numberOfItems", numberOfItems)
  }


  console.log(filteredData);
  },[location.search])

  return (
   
    <div className='' id='background-div' style={{
      backgroundImage: `url("./assets/background.jpg")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      
    }}>
      <div className='text-center pt-3'>
        <img className='logo' src='./assets/layer1.png' alt='logo' />
      </div>
      {
        showHome ?
      
      <div className='row mt-5 justify-content-center' style={{margin: "auto"}}>
        {filteredData?.map((item, index) => (
          <div className='col-5 text-center carddiv m-2' key={index} onClick={()=>{
            if(item.type === "vid"){
            setSelectedItem(item)
            setShowContent(true) 
            setShowHome(false)}
          else{
            window.open(item.content , '_blank')
          }
          }} >
            <img className='img-fluid' src="./thumbnail.jpg" alt={item.name} />
            <p  className='selectedName'>{item.name}</p>
          </div>
        ))}
      </div> 
      : 
      showContent && 
      <div className='row mt-5 justify-content-center' style={{margin: "auto"}} >
        {
          // selectedItem.type === "vid" ?
          <div className='col-5 text-center card m-2' >
      <video
        // id="background-video"
        className="videoTag"
        loop={true}
        autoPlay={true}
        playsInline
      controls={true}
      >
        <source src={`https://s3.ap-south-1.amazonaws.com/exhibits.tagbin.in/g20pune/aadharQRCode/${selectedItem.id}.mp4.mp4`} type="video/mp4" />
        
      </video>
            <p className='selectedName'>{selectedItem.name}</p>
         </div>
        }
        <img className='back' src='./assets/back.png' onClick={()=>{
          setSelectedItem()
          setShowContent(false)
        setShowHome(true)}} />
        </div>
    }
    </div>
 
  );
}

export default App;
