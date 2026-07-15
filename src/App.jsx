import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Statistics from "./components/Statistics";
import EmployeeList from "./components/EmployeeList";
//import axios from "axios";
import { getEmployees, deleteEmployeeApi } from "./api/employeeApi";
import Modal from "./components/Modal";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  // State
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        //const response = await axios.get("https://dummyjson.com/users");
        const response = await getEmployees();

        setEmployees(response.data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Search Filter
  const filteredEmployees = employees.filter((employee) => {

    const fullName =
        `${employee.firstName} ${employee.lastName}`
            .toLowerCase();

    const matchesSearch =
        fullName.includes(search.toLowerCase());

    const matchesGender =
        gender === "all" || employee.gender === gender;

    return matchesSearch && matchesGender;

});
const deleteEmployee = async (id) => {
  try {
    await deleteEmployeeApi(id);

    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);

    // Close the modal if the deleted employee was open
    if (selectedEmployee?.id === id) {
      setSelectedEmployee(null);
    }

    // Reset edit mode if the deleted employee was being edited
    if (editingEmployee?.id === id) {
      setEditingEmployee(null);
    }
  } catch (error) {
    console.log(error);
  }
};

  // Loading UI
  if (loading) {
    return <h1>Loading Employees...</h1>;
  }

  // Error UI
  if (error) {
    return <h1>{error}</h1>;
  }
console.log("editingEmployee:", editingEmployee);
  return (
    <>
      <Header />

  
      <SearchBar
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
      />

      <AddEmployeeForm
          employees={employees}
          setEmployees={setEmployees}
          editingEmployee={editingEmployee}
          setEditingEmployee={setEditingEmployee}
     />
      <Statistics employees={filteredEmployees} />
      <EmployeeList 
      employees={filteredEmployees} 
      setSelectedEmployee={setSelectedEmployee}
      deleteEmployee={deleteEmployee}
      setEditingEmployee={setEditingEmployee}
      />
      <Modal
      employee={selectedEmployee}
      onClose={() => setSelectedEmployee(null)}
     />
    </>
  );
}

export default App;
