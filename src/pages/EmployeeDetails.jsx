import { useParams } from "react-router-dom";

function EmployeeDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Employee Details</h1>

      <h2>Employee ID: {id}</h2>
    </div>
  );
}

export default EmployeeDetails;