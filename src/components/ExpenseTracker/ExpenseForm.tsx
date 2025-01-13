const ExpenseForm = () => {
  return (
    <>
      <div>ExpenseForm</div>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select id="category" name="category" className="form-control">
            <option value=""></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
