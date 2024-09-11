import styled from "styled-components";

const Wrapper = styled.div`
  height: 500px;
  width: 600px;
  border: 1px solid grey;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const FirstName = styled.div``;
const LastName = styled.div``;
const Email = styled.div``;
const ContactNumber = styled.div``;
const Age = styled.div``;
const Dob = styled.div``;
const Salary = styled.div``;

export const EmployeeDetails = ({ employeeDetails }) => {
  return (
    <>
      {employeeDetails ? (
        <Wrapper>
          <FirstName>First Name : {employeeDetails[0].firstName}</FirstName>
          <LastName>Last Name : {employeeDetails[0].lastName}</LastName>
          <Email>Email : {employeeDetails[0].email}</Email>
          <ContactNumber>
            Contact Number : {employeeDetails[0].contactNumber}
          </ContactNumber>
          <Age>Age : {employeeDetails[0].age}</Age>
          <Dob>DOB : {employeeDetails[0].dob}</Dob>
          <Salary>Salary :{employeeDetails[0].salary} Cr</Salary>
        </Wrapper>
      ) : (
        <Wrapper>
          <div>Select Employee</div>
        </Wrapper>
      )}
    </>
  );
};
