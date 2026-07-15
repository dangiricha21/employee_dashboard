import Statistics from "../components/Statistics";
import EmployeeList from "../components/EmployeeList";
import Modal from "../components/Modal";

function Employees({
  employees,
  deleteEmployee,
  setSelectedEmployee,
  setEditingEmployee,
  selectedEmployee,
}) {
  return (
    <>
      <h1>Employees</h1>

      <Statistics employees={employees} />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        setSelectedEmployee={setSelectedEmployee}
        setEditingEmployee={setEditingEmployee}
      />

      <Modal
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  );
}

export default Employees;