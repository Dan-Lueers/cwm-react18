import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import styles from "./ExpenseTracker.module.css";

const ExpenseTracker = () => {
  return (
    <div className={styles["expense-tracker"]}>
      <h1>ExpenseTracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default ExpenseTracker;
