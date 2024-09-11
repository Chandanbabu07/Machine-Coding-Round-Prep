import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../reduxdata/reduxstore/reduxSlice";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 500px;
  width: 280px;
  border: 1px solid grey;
  background-color: whitesmoke;
  overflow: scroll;
`;

const EmployeeName = styled.div`
  border: 1px solid black;
  background-color: grey;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: coral;
  }
`;

export const EmployeeList = ({ JsonData, handleClick, Id }) => {
  const { employeeName } = useSelector((state) => state.appScene);
  console.log("employeeName", employeeName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        {JsonData.map((item, index) => {
          console.log("objectitem", item);
          return (
            <EmployeeName
              style={{ backgroundColor: Id === item.id && "coral" }}
              onClick={() => handleClick(item.id)}
            >
              {item.firstName}
            </EmployeeName>
          );
        })}
      </Wrapper>
    </>
  );
};
