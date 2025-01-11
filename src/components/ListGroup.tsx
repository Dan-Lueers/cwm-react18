import { useState } from 'react';

function ListGroup() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
