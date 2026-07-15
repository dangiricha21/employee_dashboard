function Statistics({ employees }) {

  const totalEmployees = employees.length;

  const maleEmployees = employees.filter(
    employee => employee.gender === "male"
  ).length;

  const femaleEmployees = employees.filter(
    employee => employee.gender === "female"
  ).length;

  const totalAge = employees.reduce(
    (sum, employee) => sum + employee.age,
    0
  );

  const averageAge =
    employees.length > 0
      ? Math.round(totalAge / employees.length)
      : 0;

  return (
    <section className="stats-container">

      <div className="stats-card">
        <h3>Total Employees</h3>
        <p>{totalEmployees}</p>
      </div>

      <div className="stats-card">
        <h3>Male</h3>
        <p>{maleEmployees}</p>
      </div>

      <div className="stats-card">
        <h3>Female</h3>
        <p>{femaleEmployees}</p>
      </div>

      <div className="stats-card">
        <h3>Average Age</h3>
        <p>{averageAge}</p>
      </div>

    </section>
  );
}

export default Statistics;