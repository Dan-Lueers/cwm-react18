import ListGroup from '../ListGroup';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = () => {
  return (
    <>
      <ExpenseFilter />
      <div>ExpenseList</div>
      <ListGroup
        items={['Bananas', 'Oranges', 'Power Bill']}
        heading='Tracked Expenses'
        onSelectItem={() => {}}
        onDeleteItem={(item) => {
          console.log('deleting ' + item);
        }}
      />
    </>
  );
};

export default ExpenseList;
