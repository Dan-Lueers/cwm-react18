import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like/Like';
import Game from './components/Game/Game';
import ExpandableText from './components/ExpandableText/ExpandableText';

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
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ExpandableText>
      <p></p>
      <p></p>
      <Game />
      <Like onClick={() => console.log('Like button is clicked')} />
      <p></p>
      <p></p>
      <BsFillCalendarFill color='red' size='80' />
      <p></p>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello world <p>another parapgrahp of text</p>
          <h2>and some headings</h2>
        </Alert>
      )}
      <Button color='danger' onClick={handleClick}>
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
