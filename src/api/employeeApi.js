import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com/users",
});

export const getEmployees = () => API.get("/");

export const addEmployee = (employee) => API.post("/add", employee);

export const updateEmployee = (id, employee) =>
  API.put(`/${id}`, employee);

export const deleteEmployeeApi = (id) =>
  API.delete(`/${id}`);

