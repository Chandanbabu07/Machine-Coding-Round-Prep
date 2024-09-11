import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductDetails } from "../../reduxdata/reduxstore/reduxSlice";

const MainWrapper = styled.div``;

const CardWrapper = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  height: 300px;
  width: 300px;
  background-color: whitesmoke;
`;
const Image = styled.div``;
const Title = styled.div``;

const PaginationWrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 100px 100px;
  align-items: center;
  justify-content: center;
`;

const PaginationBlocks = styled.div`
  background-color: whitesmoke;
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pagination = () => {
  const { productDetails } = useSelector((state) => state.appScene);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  console.log("productDetails", productDetails);

  const arr = [1, 2, 3, 4, 5];
  const obj = { ...arr };
  console.log("object", obj);

  for (let i in arr) {
    console.log(i);
  }

  for (let i of arr) {
    console.log(i);
  }

  return (
    <>
      <MainWrapper>
        <CardWrapper>
          {productDetails &&
            productDetails.slice(0, page * 10).map((item, index) => (
              <Cards>
                <Image></Image>
                <Title>{index + 1}</Title>
              </Cards>
            ))}
        </CardWrapper>

        <PaginationWrap>
          {productDetails &&
            productDetails.length > 0 &&
            [...Array(productDetails?.length / 10)].map((_, index) => {
              return (
                <PaginationBlocks
                  key={index}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </PaginationBlocks>
              );
            })}
        </PaginationWrap>
      </MainWrapper>
    </>
  );
};
