import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 200px; */
`;

const Wrapper = styled.div`
  width: 700px;
  border: 1px solid rgb(153, 138, 190);
  padding: 50px;
  margin-top: 100px;
`;

const AccordianWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const AccordianTitle = styled.div`
  height: 40px;
  width: 500px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  border: 2px solid rgb(153, 138, 190);
  cursor: pointer;
`;
const AccordianDescription = styled.div`
  height: 200px;
  width: 500px;
  background-color: whitesmoke;
  border: 2px solid rgb(153, 138, 190);
`;

const AccordianCheckBox = styled.input``;

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  width: 135px;
  height: 43px;
  margin-top: 40px;
  margin-left: 300px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(153, 138, 190);
    color: whitesmoke;
  }
`;

export const Accordian = () => {
  const [showAccordianInfo, setShowAccordianInfo] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const AccordianData = [
    {
      title: "Section 1: Introduction",
      description:
        "This section provides an overview of the main topics covered in this document. It includes the purpose, scope, and structure of the content.",
    },
    {
      title: "Section 2: Requirements",
      description:
        "This section outlines the key requirements necessary for successful implementation. It covers hardware, software, and other essential prerequisites.",
    },
    {
      title: "Section 3: Implementation",
      description:
        "This section describes the step-by-step process for implementing the solution. It includes detailed instructions, best practices, and troubleshooting tips.",
    },
    {
      title: "Section 4: Testing",
      description:
        "This section focuses on the testing phase. It provides guidelines for conducting thorough tests, identifying potential issues, and ensuring the quality of the solution.",
    },
    {
      title: "Section 5: Conclusion",
      description:
        "This section summarizes the key points covered in the document and provides final thoughts or recommendations.",
    },
  ];

  const handleAccordianClick = (index) => {
    if (showAccordianInfo === index) {
      setShowAccordianInfo(null);
    } else {
      setShowAccordianInfo(index);
    }
  };

  const handleCheck = (e, index) => {
    e.stopPropagation();
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubmit = () => {
    setCheckedItems({});
    setShowAccordianInfo(null);
  };

  return (
    <>
      <MainWrapper>
        <Wrapper>
          {AccordianData &&
            AccordianData.map((item, index) => {
              return (
                <AccordianWrap key={index}>
                  <AccordianTitle onClick={() => handleAccordianClick(index)}>
                    <AccordianCheckBox
                      type="checkbox"
                      onClick={(e) => handleCheck(e, index)}
                      checked={!!checkedItems[index]}
                    ></AccordianCheckBox>
                    {item.title}
                  </AccordianTitle>
                  {index === showAccordianInfo && (
                    <AccordianDescription>
                      {item.description}
                    </AccordianDescription>
                  )}
                </AccordianWrap>
              );
            })}

          {checkedItems != null && (
            <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
          )}
        </Wrapper>
      </MainWrapper>
    </>
  );
};
