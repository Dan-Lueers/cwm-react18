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
      </form>
    </>
  );
};

export default ExpenseForm;
