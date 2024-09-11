import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 500px;
  background-color: darkgray;
  position: absolute;
  top: 15px;
  left: 650px;
  border: 4px solid gainsboro;
`;

const Wrap = styled.div``;
const Wrapper = styled.div`
  display: flex;
  gap: 60px;
`;

const Label = styled.div``;

const InputField = styled.input``;

const SubmitButton = styled.div`
  width: 150px;
  height: 45px;
  background-color: coral;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

export const AddEmployeePopup = ({
  setJsonData,
  JsonData,
  setShowAddPopup,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = () => {
    const newEmployee = {
      id: JsonData && JsonData.length + 1,
      imageUrl: "https://hub.dummyapis.com/Image?text=CR&height=120&width=120",
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      age: age,
      dob: dob,
      salary: salary,
      address: "Address1",
    };

    setJsonData([newEmployee, ...JsonData]);
    setShowAddPopup(false);
  };

  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Wrap>
            <Label>First Name</Label>
            <InputField
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            ></InputField>
          </Wrap>
          <Wrap>
            <Label>Last Name</Label>
            <InputField
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            ></InputField>
          </Wrap>
        </Wrapper>
        <Wrapper>
          <Wrap>
            <Label>Email</Label>
            <InputField
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></InputField>
          </Wrap>
          <Wrap>
            <Label>Contact Number</Label>
            <InputField
              type="text"
              onChange={(e) => setContactNumber(e.target.value)}
            ></InputField>
          </Wrap>
        </Wrapper>

        <Wrapper>
          <Wrap>
            <Label>Age</Label>
            <InputField
              type="text"
              onChange={(e) => setAge(e.target.value)}
            ></InputField>
          </Wrap>
          <Wrap>
            <Label>DOB</Label>
            <InputField
              type="date"
              onChange={(e) => setDob(e.target.value)}
            ></InputField>
          </Wrap>
        </Wrapper>
        <Wrap>
          <Label>Salary</Label>
          <InputField
            type="text"
            onChange={(e) => setSalary(e.target.value)}
          ></InputField>
        </Wrap>

        <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
      </MainWrapper>
    </>
  );
};
