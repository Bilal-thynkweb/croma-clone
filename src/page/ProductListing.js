import { useContext, useEffect, useState, memo, useMemo, useRef } from "react";
import DropdownCheckboxButton from "../components/Dropdown/Dropdown";
import DropdownbrandCheckboxButton from "../components/Dropdown/Dropdownbrand";
import DropdownpriceCheckboxButton from "../components/Dropdown/Dropdownprice";
import ProductCard from "../components/productCard/ProductCard";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../App";
import { generateRandomID } from "../utils/utils";

const sortOptions = [
  { label: "Top Rated", value: {"price": -1}, id: "#1" },
  { label: "Price Low to High", value: {"price": 1}, id: "#2" },
  { label: "Price High to Low", value: {"price": -1}, id: "#3" },
];

    const stringifyArray = arr => {
        let result = '';
          arr.forEach((obj, index) => {
            const entries = Object.entries(obj);
            entries.forEach(([key, value], i) => {
              result += `"${key}": "${value}"`;
              if (i !== entries.length - 1 || index !== arr.length - 1) {
                result += ', ';
              }
            });
          });
          return `{${result}}`;
        }

function ProductListing() {
  const { globalState, setGlobalState } = useContext(StateContext);
   let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [localState, setLocalState] = useState({
    searchResult: [],
    selectedSortOption: sortOptions[0],
    selectedFilterOptions: [],

  });
  const refState = useRef({filterOptions: []})
  let { menu } = globalState;

  let search = queryParams.get("search");
  let brand = queryParams.get("brand");
  let category = queryParams.get("category");
  let subCategory = queryParams.get("subCategory");
  let { searchResult, selectedSortOption, selectedFilterOptions } = localState;
  let filterOptions = useMemo(() => 
    menu?.map((item, index) => {
        return {
          id: generateRandomID(),
          label: item,
          value: item,
        };
      })
  ,[menu.length]) 

  useEffect(() => {
    let url = `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${brand}", "name": "${search}", "category":"${category}"}`
    let filterParams = searchParams.get('filter')
    if(filterParams) {
      url = url + `&filter=${filterParams}`;
    }
    axios({
      method: "GET",
      url: url,
      headers: {
        projectID: "f104bi07c490",
      },
    })
      .then((res) => {
        setLocalState((s) => ({
          ...s,
          searchResult: res.data.data,
          filterResult: res.data.data,
        }));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [brand, search, selectedFilterOptions.length]);


  const handleFilter = (obj) => {
      

    if (selectedFilterOptions.some((item) => item.value === obj.value)) {
      setLocalState((s) => ({
        ...s,
        selectedFilterOptions: s.selectedFilterOptions.filter(
          (x) => x.value !== obj.value
        ),
      }));
             refState.current.filterOptions = refState.current.filterOptions.filter(item => item.subCategory !== obj.value)
             const resultString = stringifyArray(refState.current.filterOptions);
      setSearchParams(params => {
        params.set("filter", resultString);
        return params;
      });
      return;
    }
    setLocalState((s) => ({
      ...s,
      selectedFilterOptions: [...s.selectedFilterOptions, obj],
    }));
        refState.current.filterOptions = [
      ...refState.current.filterOptions,
      {subCategory: obj.value},
    ]
    const resultString = stringifyArray(refState.current.filterOptions);
      setSearchParams(params => {
        params.set("filter", resultString);
        return params;
      });
  };


  const handleSort = (obj) => {
    setLocalState((s) => ({ ...s, selectedSortOption: obj }));
    let queryValue = JSON.stringify(obj.value);
       setSearchParams(params => {
      params.set("sort", queryValue);
      return params;
    });
    //     axios({
    //   method: "GET",
    //   url: `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"brand":"${brand}", "name": "${search}", "category":"${category}"}&sort=${JSON.stringify(obj.value)}`,
    //   headers: {
    //     projectID: "f104bi07c490",
    //   },
    // })
    //   .then((res) => {
    //     setLocalState((s) => ({
    //       ...s,
    //       searchResult: res.data.data,
    //       filterResult: res.data.data,
    //     }));
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  };

  return (
    <>
      <div className="w-[calc(100%-2rem)] max-w-[80rem] mx-[auto]">
        <h1 className="text-white text-[30px] w-100 mt-[18px] font-bold">
          Results For "{search}"
        </h1>
        <div className="flex pt-[26px] gap-[7px] justify-between">
          <div className="flex gap-[7px]">
            <DropdownCheckboxButton
              options={filterOptions}
              onChange={handleFilter}
              heading='Categories'
            />
          </div>
          <div>
            <DropdownCheckboxButton
              options={sortOptions}
              onClick={handleSort}
              RenderOptions={SortItemUI}
              selectedOption={selectedSortOption}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-[1rem] py-[70px]">
          {searchResult.map((item) => {
            return (
              <ProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                displayImage={item.displayImage}
                ratings={item.ratings}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductListing;

const SortItemUI = memo((props) => {
  let { item, selectedOption } = props;
  let selected = item.id === selectedOption.id;
  return (
    <div className="flex p-2 rounded py-[4px] dark:hover:bg-gray-600">
      <div className="ms-2 text-sm">
        <label className={`${selected ? 'text-green-500' : 'text-[white]'} dark:text-gray-300`}>
          <div>{item.label}</div>
        </label>
      </div>
    </div>
  );
});
