import React, { useState, useCallback, useMemo } from 'react';
import { AttributeEditor, Input, Link } from '@cloudscape-design/components';

const i18nStrings = {
  addButtonText: 'Add new label',
  removeButtonText: 'Remove',
  empty: 'No labels added yet',
};

const Control = React.memo(({ value, index, placeholder, setItems, prop }) => {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={({ detail }) => {
        setItems(items => {
          const updatedItems = [...items];
          updatedItems[index] = {
            ...updatedItems[index],
            [prop]: detail.value,
          };
          return updatedItems;
        });
      }}
    />
  );
});

// TODO: label cannot be empty upon submission, check this: https://cloudscape.design/components/attribute-editor/?tabId=api
export default function AttributeEditorExample() {
  const [items, setItems] = useState([
    { label: '',},
  ]);

  const definition = useMemo(
    () => [
      {
        label: 'Label',
        control: ({ key = '' }, itemIndex) => (
          <Control prop="key" value={key} index={itemIndex} placeholder="Enter Label" setItems={setItems} />
        ),
      },
    ],
    []
  );

  const onAddButtonClick = useCallback(() => {
    setItems(items => [...items, {}]);
  }, []);

  const onRemoveButtonClick = useCallback(({ detail: { itemIndex } }) => {
    setItems(items => {
      const newItems = items.slice();
      newItems.splice(itemIndex, 1);
      return newItems;
    });
  }, []);

  return (
    <AttributeEditor
      {...i18nStrings}
      items={items}
      definition={definition}
      onAddButtonClick={onAddButtonClick}
      onRemoveButtonClick={onRemoveButtonClick}
    />
  );
}