import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris', 'Zurich'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    setAlertVisibility(true);
  };

  return (
    <div>
      <BsFillCalendarFill color='red' size='80' />
      <p></p>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello world <p>another parapgrahp of text</p>
          <h2>and some headings</h2>
        </Alert>
      )}
      <Button color='primary' onClick={handleClick}>
        Wicked Button
      </Button>

      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
