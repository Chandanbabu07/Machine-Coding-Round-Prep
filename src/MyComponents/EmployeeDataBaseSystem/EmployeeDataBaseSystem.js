import styled from "styled-components";
import { EmployeeList } from "./EmployeeList";
import { EmployeeDetails } from "./EmployeeDetails";
import { useState } from "react";
import { AddEmployeePopup } from "./AddEmployeePopup";

const MainWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const AddEmployee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: coral;
  height: 50px;
  width: 140px;
  position: absolute;
  left: 1050px;
  top: -66px;
  cursor: pointer;
`;

export const EmployeeDataBaseSystem = () => {
  const [employeeDetails, setemployeeDetails] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const preJsonData = [
    {
      id: 1,
      imageUrl: "https://hub.dummyapis.com/Image?text=CR&height=120&width=120",
      firstName: "Claudie",
      lastName: "Rice",
      email: "Claudie.Rice@dummyapis.com",
      contactNumber: "4745994722",
      age: 77,
      dob: "19/06/1947",
      salary: 1.0,
      address: "Address1",
    },
    {
      id: 2,
      imageUrl: "https://hub.dummyapis.com/Image?text=DR&height=120&width=120",
      firstName: "Darla",
      lastName: "Ratke",
      email: "Darla.Ratke@dummyapis.com",
      contactNumber: "4922590587",
      age: 59,
      dob: "08/01/1965",
      salary: 2.0,
      address: "Address2",
    },
    {
      id: 3,
      imageUrl: "https://hub.dummyapis.com/Image?text=AH&height=120&width=120",
      firstName: "Aurelie",
      lastName: "Howe",
      email: "Aurelie.Howe@dummyapis.com",
      contactNumber: "4530692120",
      age: 90,
      dob: "07/10/1934",
      salary: 3.0,
      address: "Address3",
    },
    {
      id: 4,
      imageUrl: "https://hub.dummyapis.com/Image?text=JW&height=120&width=120",
      firstName: "Jeanie",
      lastName: "Welch",
      email: "Jeanie.Welch@dummyapis.com",
      contactNumber: "4296396345",
      age: 52,
      dob: "30/01/1972",
      salary: 4.0,
      address: "Address4",
    },
    {
      id: 5,
      imageUrl: "https://hub.dummyapis.com/Image?text=DJ&height=120&width=120",
      firstName: "Dorothy",
      lastName: "Jakubowski",
      email: "Dorothy.Jakubowski@dummyapis.com",
      contactNumber: "4972891506",
      age: 36,
      dob: "10/03/1988",
      salary: 5.0,
      address: "Address5",
    },
    {
      id: 6,
      imageUrl: "https://hub.dummyapis.com/Image?text=BH&height=120&width=120",
      firstName: "Bernie",
      lastName: "Harvey",
      email: "Bernie.Harvey@dummyapis.com",
      contactNumber: "4354594730",
      age: 79,
      dob: "21/05/1945",
      salary: 6.0,
      address: "Address6",
    },
    {
      id: 7,
      imageUrl: "https://hub.dummyapis.com/Image?text=JD&height=120&width=120",
      firstName: "Jacquelyn",
      lastName: "Donnelly",
      email: "Jacquelyn.Donnelly@dummyapis.com",
      contactNumber: "4395899640",
      age: 70,
      dob: "30/05/1954",
      salary: 7.0,
      address: "Address7",
    },
    {
      id: 8,
      imageUrl: "https://hub.dummyapis.com/Image?text=ST&height=120&width=120",
      firstName: "Sara",
      lastName: "Tromp",
      email: "Sara.Tromp@dummyapis.com",
      contactNumber: "4162894562",
      age: 28,
      dob: "24/11/1996",
      salary: 8.0,
      address: "Address8",
    },
    {
      id: 9,
      imageUrl: "https://hub.dummyapis.com/Image?text=AK&height=120&width=120",
      firstName: "Antoinette",
      lastName: "Kuhlman",
      email: "Antoinette.Kuhlman@dummyapis.com",
      contactNumber: "4562898809",
      age: 31,
      dob: "10/06/1993",
      salary: 9.0,
      address: "Address9",
    },
    {
      id: 10,
      imageUrl: "https://hub.dummyapis.com/Image?text=LR&height=120&width=120",
      firstName: "Lane",
      lastName: "Russel",
      email: "Lane.Russel@dummyapis.com",
      contactNumber: "4678498882",
      age: 64,
      dob: "20/09/1960",
      salary: 10.0,
      address: "Address10",
    },
  ];
  const [JsonData, setJsonData] = useState(preJsonData);

  const handleClick = (id) => {
    console.log("Id", id);
    setemployeeDetails(JsonData.filter((item) => item.id === id));
  };

  console.log("employeeDetails", employeeDetails);

  return (
    <>
      <MainWrapper>
        <AddEmployee onClick={() => setShowAddPopup(true)}>
          Add Employee
        </AddEmployee>
        <Wrapper>
          <EmployeeList
            JsonData={JsonData}
            handleClick={handleClick}
            Id={employeeDetails && employeeDetails[0]?.id}
          ></EmployeeList>
          <EmployeeDetails employeeDetails={employeeDetails}></EmployeeDetails>
        </Wrapper>
        {showAddPopup && (
          <AddEmployeePopup
            setJsonData={setJsonData}
            JsonData={JsonData}
            setShowAddPopup={setShowAddPopup}
          ></AddEmployeePopup>
        )}
      </MainWrapper>
    </>
  );
};
