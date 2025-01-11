import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris', 'Zurich'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    console.log('button clicked');
  };
  return (
    <div>
      <Button color='danger' onClick={handleClick}>
        Wicked Button
      </Button>
      <Alert>
        Hello world <p>another parapgrahp of text</p>
        <h2>and some headings</h2>
      </Alert>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
