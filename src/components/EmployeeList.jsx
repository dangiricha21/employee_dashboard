// import EmployeeCard from "./EmployeeCard";

// function EmployeeList({ employees }) {

//   if (employees.length === 0) {
//     return <h2>No employees found.</h2>;
//   }

//   return (
//     <section className="employee-list">
//       {employees.map((employee) => (
//         <EmployeeCard
//           key={employee.id}
//           firstName={employee.firstName}
//           lastName={employee.lastName}
//           company={employee.company.name}
//           email={employee.email}
//           phone={employee.phone}
//           image={employee.image}
//         />
//       ))}
//     </section>
//   );
// }

// export default EmployeeList;



import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, setSelectedEmployee ,deleteEmployee,setEditingEmployee,}) {
  if (employees.length === 0) {
    return <h2>No employees found.</h2>;
  }

  return (
    <section className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          setSelectedEmployee={setSelectedEmployee}
          deleteEmployee={deleteEmployee}
          setEditingEmployee={setEditingEmployee}
        />
      ))}
    </section>
  );
}

export default EmployeeList;




