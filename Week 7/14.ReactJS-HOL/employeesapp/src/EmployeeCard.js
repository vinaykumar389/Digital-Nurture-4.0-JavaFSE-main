import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`employee-card ${theme}`}>
      <h3>{employee.name}</h3>
      <p>{employee.designation}</p>
      <button className={`btn ${theme}-btn`}>View Profile</button>
    </div>
  );
};

export default EmployeeCard;
