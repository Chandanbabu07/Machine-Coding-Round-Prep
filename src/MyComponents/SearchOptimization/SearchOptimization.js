import { useEffect, useMemo } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useThrottle } from "../../hooks/useThrottle";
const MainWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SerachBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  height: 50px;
  width: 500px;
  gap: 15px;
`;
const SearchButton = styled.div``;
const Divider = styled.div`
  font-size: 30px;
`;
const SearchInputField = styled.input`
  width: 400px;
  height: 38px;
  border: 0;
  outline: 0 none;
  background: whitesmoke;
`;

export const SearchOptimization = () => {
  // const suggestions = {
  //   autoSuggestions: [
  //     {
  //       name: "apple",
  //     },
  //     {
  //       name: "apricot",
  //     },
  //     {
  //       name: "banana",
  //     },
  //     {
  //       name: "blueberry",
  //     },
  //     {
  //       name: "carrot",
  //     },
  //   ],
  // };

  const [inputVal, setInputVal] = useState("");
  const [windowsize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const callAPI = (e) => {
    console.log("Calling API", e.target.value);
  };

  const debounce = (func, wait) => {
    let id;

    return (...args) => {
      clearTimeout(id);
      id = setTimeout(() => func(...args), wait);
    };
  };

  const debouncedCallAPI = useMemo(() => debounce(callAPI, 1000), []);

  console.log("window", window);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return (
    <>
      <div style={{ color: "whitesmoke" }}>
        {windowsize.width + " X " + windowsize.height}
      </div>
      <MainWrapper>
        <SerachBarWrapper>
          <SearchButton>
            <svg
              style={{ width: "30px", height: "30px" }}
              width="24"
              height="24"
              class=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search Icon</title>
              <path
                d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                stroke="#717478"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16 16L21 21"
                stroke="#717478"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </SearchButton>
          <Divider>|</Divider>
          <SearchInputField
            type="text"
            placeholder="Search Something"
            onChange={(e) => {
              setInputVal(e.target.value);
              debouncedCallAPI(e);
            }}
            value={inputVal}
          ></SearchInputField>
        </SerachBarWrapper>
      </MainWrapper>
    </>
  );
};
