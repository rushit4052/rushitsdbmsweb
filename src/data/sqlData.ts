export interface SQLQuestion {
  id: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  expectedOutput: string;
  hint: string;
}

export const sqlQuestions: SQLQuestion[] = [
  {
    id: 1,
    title: "Create Employee Table",
    description: "Create a table named 'Employee' with columns: ID (INT, Primary Key), Name (VARCHAR(50)), Salary (DECIMAL), Department (VARCHAR(30))",
    difficulty: "Easy",
    expectedOutput: "Table created successfully",
    hint: "Use CREATE TABLE with appropriate data types and PRIMARY KEY constraint"
  },
  {
    id: 2,
    title: "Insert Records",
    description: "Insert 3 employees into the Employee table with different departments",
    difficulty: "Easy",
    expectedOutput: "3 rows inserted",
    hint: "Use INSERT INTO Employee VALUES (...) for each record"
  },
  {
    id: 3,
    title: "Select High Salary Employees",
    description: "Display all employees with salary greater than 50000",
    difficulty: "Easy",
    expectedOutput: "List of employees with Salary > 50000",
    hint: "SELECT * FROM Employee WHERE Salary > 50000"
  },
  {
    id: 4,
    title: "Average Salary by Department",
    description: "Find the average salary for each department",
    difficulty: "Medium",
    expectedOutput: "Department wise average salary",
    hint: "Use GROUP BY with AVG() function"
  },
  {
    id: 5,
    title: "Department with Highest Average",
    description: "Find the department with the highest average salary",
    difficulty: "Medium",
    expectedOutput: "Department name and average salary",
    hint: "Use subquery or ORDER BY with LIMIT"
  },
  {
    id: 6,
    title: "Join Two Tables",
    description: "Create a Project table (ProjectID, ProjectName, EmpID) and join it with Employee to show employee names with their projects",
    difficulty: "Medium",
    expectedOutput: "Employee names with project names",
    hint: "Use INNER JOIN on EmpID"
  },
  {
    id: 7,
    title: "Count Employees per Department",
    description: "Count the number of employees in each department",
    difficulty: "Easy",
    expectedOutput: "Department and employee count",
    hint: "SELECT Department, COUNT(*) FROM Employee GROUP BY Department"
  },
  {
    id: 8,
    title: "Second Highest Salary",
    description: "Find the second highest salary from Employee table",
    difficulty: "Hard",
    expectedOutput: "Second highest salary value",
    hint: "Use subquery with ORDER BY and LIMIT or use DISTINCT"
  },
  {
    id: 9,
    title: "Update Salary",
    description: "Increase salary by 10% for employees in 'IT' department",
    difficulty: "Easy",
    expectedOutput: "Salary updated for IT employees",
    hint: "UPDATE Employee SET Salary = Salary * 1.1 WHERE Department = 'IT'"
  },
  {
    id: 10,
    title: "Delete Old Records",
    description: "Delete employees with salary less than 30000",
    difficulty: "Easy",
    expectedOutput: "Low salary records deleted",
    hint: "DELETE FROM Employee WHERE Salary < 30000"
  }
];
