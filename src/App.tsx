import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris', 'Zurich'];
  const handleSelectItem = (item) => {
    console.log(item);
  };
  return (
    <div>
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
