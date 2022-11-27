import Employee from "../Employee/Employee";

const EmployeeList = ({ people, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul className="employeeList">
      {people.map((person) => {
        return <Employee key={person.id} employee={person} />;
      })}
    </ul>
  );
};

export default EmployeeList;
