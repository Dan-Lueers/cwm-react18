import { useState } from 'react';
import Button from './Button';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  onDeleteItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem, onDeleteItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? 'list-group-item active'
                : 'list-group-item '
            }
            key={item}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
            <Button
              color='danger'
              onClick={() => {
                onDeleteItem!(item);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
