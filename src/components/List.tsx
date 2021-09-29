import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? "#007bff" : "#6c757d",
  borderRadius: "0.25rem",
  ...draggableStyle,
});

interface Props {
  items: any[];
  onDragEnd?: (items: any[]) => void;
  renderItem: (item: any) => React.ReactNode;
  getKey: (item: any) => number | string;
}

const List = ({ items = [], onDragEnd, renderItem, getKey }: Props) => {
  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "white",
    padding: grid,
    width: "100%",
    borderRadius: "0.25rem",
  });

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEndLocal = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const itemsOrder = reorder(
      items,
      result.source.index,
      result.destination.index
    ) as number[];
    onDragEnd && onDragEnd(itemsOrder || []);
  };

  return (
    <DragDropContext onDragEnd={onDragEndLocal}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable
                key={getKey(item)}
                draggableId={`${getKey(item)}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {renderItem(item)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
