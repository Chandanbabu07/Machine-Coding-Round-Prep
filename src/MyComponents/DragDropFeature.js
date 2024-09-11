import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const WidgetsBlock = styled.div`
  width: 200px;
  height: 300px;
  background-color: whitesmoke;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
const Widgets = styled.div`
  background-color: grey;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DropBlock = styled.div`
  height: fit-content;
  min-height: 300px;
  width: 400px;
  border: 1px dashed whitesmoke;
  margin-top: 200px;
`;

export const DragDropFeature = () => {
  const [draggedItems, setDraggedItems] = useState(null);
  const [droppedItems, setDroppeddItems] = useState([]);

  const handleDrag = (e, item) => {
    setDraggedItems(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItems) {
      setDroppeddItems([...droppedItems, draggedItems]);
      setDraggedItems(null);
    }
  };
  return (
    <>
      <MainWrapper>
        <WidgetsBlock>
          <Widgets draggable onDragStart={(e) => handleDrag(e, "Widget 1")}>
            Widget 1
          </Widgets>
          <Widgets draggable onDragStart={(e) => handleDrag(e, "Widget 2")}>
            Widget 2
          </Widgets>
          <Widgets draggable onDragStart={(e) => handleDrag(e, "Widget 3")}>
            Widget 3
          </Widgets>
        </WidgetsBlock>

        <DropBlock
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
        >
          {droppedItems && droppedItems.length > 0 ? (
            droppedItems.map((item) => <Widgets>{item}</Widgets>)
          ) : (
            <p style={{ color: "whitesmoke", alignItems: "center" }}>
              Drop Here
            </p>
          )}
        </DropBlock>
      </MainWrapper>
    </>
  );
};
