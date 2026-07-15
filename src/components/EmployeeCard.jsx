// function EmployeeCard({
//   firstName,
//   lastName,
//   company,
//   email,
//   phone,
//   image,
// }) {
//   return (
//     <div className="employee-card">
//       <img src={image} alt={firstName} />

//       <h2>
//         {firstName} {lastName}
//       </h2>

//       <p>
//         <strong>Company:</strong> {company}
//       </p>

//       <p>
//         <strong>Email:</strong> {email}
//       </p>

//       <p>
//         <strong>Phone:</strong> {phone}
//       </p>

//       <button>View Details</button>
//     </div>
//   );
// }

// export default EmployeeCard;






function EmployeeCard({ employee, setSelectedEmployee, setEditingEmployee, deleteEmployee }) {
  return (
    <div className="employee-card">
      <img
        src={employee.image}
        alt={employee.firstName}
      />

      <h2>
        {employee.firstName} {employee.lastName}
      </h2>

      <p>
        <strong>Company:</strong> {employee.company.name}
      </p>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Phone:</strong> {employee.phone}
      </p>

      {/* <button
        onClick={() => {
          console.log(employee);
          setSelectedEmployee(employee);}
        }
      >
        View Details
      </button>
      <button
          onClick={() => setEditingEmployee(employee)}
      >
          Edit
      </button>
      <button
          onClick={() => deleteEmployee(employee.id)}
      >
          Delete
      </button> */}
      <div className="card-buttons">
  <button
    className="view-btn"
    onClick={() => setSelectedEmployee(employee)}
  >
    View
  </button>

  <button
    className="edit-btn"
    onClick={() => setEditingEmployee(employee)}
  >
    Edit
  </button>

  <button
    className="delete-btn"
    onClick={() => deleteEmployee(employee.id)}
  >
    Delete
  </button>
</div>
    </div>
  );
}

export default EmployeeCard;