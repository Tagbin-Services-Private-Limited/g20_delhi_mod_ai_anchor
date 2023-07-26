import { useEffect, useState, useRef } from "react";
import { connectInfiniteHits, connectSearchBox } from "react-instantsearch-dom";

const VillageHits = ({
  hits,
  enableAlgolia,
  changeSelectedValue,
  changePopupState,
  setVillagePicked,
  filterFunc_,
}) => {
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementsByClassName("result-box-custom-add-new-village")[0]
        .addEventListener("click", (event) => {
          event.stopPropagation(); // stopping the main doc listener from closing before assigning val

          //if "nothing-found" is clicked, do nothing
          //&& checking to see if the user has accidently clicked the outside div
          if (
            event.target.innerHTML != "Nothing found" &&
            !event.target.innerHTML.startsWith("<")
          ) {
            changeSelectedValue(event.target.innerHTML); //assign value

            //filering out the available objs with same village name
            let foundValues = hits.filter((item) => {
              return item["VILLAGE NAME"] == event.target.innerHTML;
            });

            //filtering for initVillage if needed
            if (foundValues.length == 0) {
              //filering out the available objs with same village name
              foundValues = hits.filter((item) => {
                return item["VILLAGE NAME"] == event.target.innerHTML;
              });
            }

            //filter the district and state
            filterFunc_(foundValues);
            setVillagePicked(true);
          }
          changePopupState(true); //close the popup
        });

      return () => {
        document
          .getElementsByClassName("result-box-custom-add-new-village")[0]
          .removeEventListener("click", () => { });
      };
    }, 500);
  }, [hits]);

  let tempStorageForHits = [];

  return (
    <>
      {!enableAlgolia ? (
        <div className="result-box-custom-add-new-village bg-white">
          {hits?.map((item, index) => {
            return (
              <div className=" px-1 py-2 bg-custom-hover" key={index}>
                {item["VILLAGE NAME"]}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="result-box-custom-add-new-village bg-white">
          {hits?.length == 0 ? (
            <div className=" px-1 py-2 bg-custom-hover">Nothing found</div>
          ) : (
            <>
              {hits?.map((item, index) => {
                if (!tempStorageForHits.includes(item["VILLAGE NAME"])) {
                  tempStorageForHits.push(item["VILLAGE NAME"]);
                  return (
                    <>
                      <div className=" px-1 py-2 bg-custom-hover" key={index}>
                        {item["VILLAGE NAME"]}
                      </div>
                    </>
                  );
                }
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};

const CustomVillageHits = connectInfiniteHits(VillageHits);

const SelectSearch = ({
  refine,
  onChangeFunc_,
  closePopupState,
  changePopupState,
  filterFunc_,
  clearVillageField,
  isValidName
}) => {

  //when to search with algolia and not display init data
  const [enableAlgolia, setEnableAlgolia] = useState(false); //change this to false if loading the initVillages
  const [showPopup, setShowPopup] = useState(false);
  const [currentSelectedValue, setCurrentSelectedValue] = useState("");
  const [villagePicked, setVillagePicked] = useState(false); //not letting the user type after something is picked

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          changePopupState(true);
        }
      }
      document?.addEventListener("mousedown", handleClickOutside);
      return () => {
        document?.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleSearchChange = (e) => {
    if (e.currentTarget.value.length > 2) setEnableAlgolia(true);
    else setEnableAlgolia(false);
  };

  //remove value inside serach bar
  const clearSearchBar = () => {
    clearVillageField();
    setVillagePicked(false); // user can type again
    setCurrentSelectedValue(""); // assign value to local state
    setEnableAlgolia(false); //making the local list show again
  };

  return (
    <span className={"position-relative"} ref={wrapperRef}>
      <input
        type="Search for a village name"
        value={currentSelectedValue}
        onChange={(event) => {
          if (!villagePicked) {
            handleSearchChange(event);
            setCurrentSelectedValue(event.target.value);
          }
          refine(event.currentTarget.value);
        }}
        className={`position-relative border-none bg-white search-box-custom-select ${isValidName && 'invalid'}`}
        placeholder="Search here.."
        onFocus={() => {
          setShowPopup(true);
          setTimeout(() => {
            changePopupState(false);
          }, 200);
        }}
        onClick={() => {
          //stopping from closing the popup when the user clicks the searchbox
          setShowPopup(true);
          changePopupState(false);
        }}
      />

      {
        // svg will only show when the user clicks on a village
        villagePicked ? (
          <svg
            onClick={() => {
              clearSearchBar();
            }}
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="css-tj5bde-Svg position-absolute custom-cross-search-select"
          >
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
          </svg>
        ) : null
      }

      {showPopup && !closePopupState ? (
        <CustomVillageHits
          enableAlgolia={enableAlgolia}
          changeSelectedValue={setCurrentSelectedValue}
          changePopupState={changePopupState}
          onChangeFunc_={onChangeFunc_}
          setVillagePicked={setVillagePicked}
          filterFunc_={filterFunc_}
        />
      ) : null}
    </span>
  );
};

export const CustomSelectSearch = connectSearchBox(SelectSearch);
