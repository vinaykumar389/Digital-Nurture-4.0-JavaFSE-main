import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeesList = () => {
  const employees = [
    { id: 1, name: "Alice", designation: "Developer" },
    { id: 2, name: "Bob", designation: "Tester" }
  ];

  return (
    <div className="employees-list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeesList;
