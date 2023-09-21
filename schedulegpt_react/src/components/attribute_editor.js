import * as React from "react";
import AttributeEditor from "@cloudscape-design/components/attribute-editor";
import Input from "@cloudscape-design/components/input";

export default () => {
  const [items, setItems] = React.useState([
    { value: "Enter Tasks" },
  ]);
  return (
    <AttributeEditor
      onAddButtonClick={() => setItems([...items, {}])}
      onRemoveButtonClick={({
        detail: { itemIndex }
      }) => {
        const tmpItems = [...items];
        tmpItems.splice(itemIndex, 1);
        setItems(tmpItems);
      }}
      items={items}
      addButtonText="Add new tasks"
      definition={[
        {
          label: "Task",
          control: item => (
            <Input
              value={item.value}
              placeholder="Enter Tasks"
            />
          )
        }
      ]}
      removeButtonText="Remove"
      empty="No tasks created yet."
    />
  );
}