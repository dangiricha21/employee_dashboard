import { useState ,useEffect} from "react";
import { addEmployee, updateEmployee } from "../api/employeeApi";
function AddEmployeeForm({  
  employees,
  setEmployees,
  editingEmployee,
  setEditingEmployee, }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");

  useEffect(() => {
     console.log("useEffect fired");
  console.log(editingEmployee);
  if (editingEmployee) {
    setFirstName(editingEmployee.firstName);
    setLastName(editingEmployee.lastName);
    setCompany(editingEmployee.company.name);
    setEmail(editingEmployee.email);
    setPhone(editingEmployee.phone);
    setGender(editingEmployee.gender);
    setAge(editingEmployee.age);
  }
}, [editingEmployee]);


const handleSubmit = async(e) => {
  e.preventDefault();

  if (editingEmployee) {
  const updatedEmployee = {
    ...editingEmployee,
    firstName,
    lastName,
    age: Number(age),
    email,
    phone,
    gender,
    company: {
      name: company,
    },
  };

  try {
    await updateEmployee(editingEmployee.id, updatedEmployee);

    const updatedEmployees = employees.map((employee) =>
      employee.id === editingEmployee.id
        ? updatedEmployee
        : employee
    );

    setEmployees(updatedEmployees);
    setEditingEmployee(null);
  } catch (error) {
    console.log(error);
  }
}
  else {
    const newEmployee = {
      id: Date.now(),
      firstName,
      lastName,
      age: Number(age),
      email,
      phone,
      gender,
      company: {
        name: company,
      },
      image: "https://dummyjson.com/icon/emilys/128",
    };

    //setEmployees([...employees, newEmployee]);
    try {
  const response = await addEmployee(newEmployee);
   console.log(response);
  setEmployees([...employees, response.data]);
} catch (error) {
  console.log(error);
}
  }

  setFirstName("");
  setLastName("");
  setCompany("");
  setEmail("");
  setPhone("");
  setGender("male");
  setAge("");
};

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      {/* <h2>Add Employee</h2> */}
      <h2>
  {editingEmployee ? "Edit Employee" : "Add Employee"}
</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
  type="number"
  placeholder="Age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>

      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

  
      <button type="submit">
  {editingEmployee ? "Update Employee" : "Add Employee"}
</button>
    </form>
  );
}

export default AddEmployeeForm;