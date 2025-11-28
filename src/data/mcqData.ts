export interface MCQ {
  id: number;
  unit: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const mcqDatabase: MCQ[] = [
  // Unit 1
  { id: 1, unit: 1, question: "Which of the following is NOT an ACID property?", options: ["Atomicity", "Consistency", "Dependency", "Durability"], correct: 2, explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Dependency is not part of ACID." },
  { id: 2, unit: 1, question: "What does DDL stand for?", options: ["Data Definition Language", "Data Deletion Language", "Database Design Logic", "None"], correct: 0, explanation: "DDL stands for Data Definition Language, used to define database structure." },
  { id: 3, unit: 1, question: "Which architecture level is closest to physical storage?", options: ["External", "Conceptual", "Internal", "Logical"], correct: 2, explanation: "Internal schema describes physical storage structure." },
  
  // Unit 2
  { id: 4, unit: 2, question: "Which key can have NULL values?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"], correct: 1, explanation: "Foreign keys can have NULL values representing no relationship." },
  { id: 5, unit: 2, question: "Natural Join is based on:", options: ["Common attributes", "All attributes", "Primary keys only", "Foreign keys only"], correct: 0, explanation: "Natural join combines tables based on common attribute names." },
  { id: 6, unit: 2, question: "Cardinality refers to:", options: ["Number of columns", "Number of rows", "Number of tables", "Number of keys"], correct: 1, explanation: "Cardinality is the number of tuples (rows) in a relation." },
  
  // Unit 3
  { id: 7, unit: 3, question: "Which command is used to add new column to table?", options: ["UPDATE", "INSERT", "ALTER", "MODIFY"], correct: 2, explanation: "ALTER TABLE is used to modify table structure including adding columns." },
  { id: 8, unit: 3, question: "COUNT(*) returns:", options: ["Number of columns", "Number of rows", "Sum of values", "None"], correct: 1, explanation: "COUNT(*) returns total number of rows in the result set." },
  { id: 9, unit: 3, question: "Which clause is used to filter groups?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 1, explanation: "HAVING clause filters groups after GROUP BY, while WHERE filters rows." },
  
  // Unit 4
  { id: 10, unit: 4, question: "Which symbol represents weak entity?", options: ["Rectangle", "Double Rectangle", "Diamond", "Circle"], correct: 1, explanation: "Weak entities are shown with double rectangles in ER diagrams." },
  { id: 11, unit: 4, question: "Derived attribute is shown by:", options: ["Oval", "Dashed Oval", "Rectangle", "Diamond"], correct: 1, explanation: "Derived attributes use dashed ovals as they're calculated from other attributes." },
  { id: 12, unit: 4, question: "Cardinality ratio of one-to-many is shown by:", options: ["1:1", "1:N", "M:N", "N:1"], correct: 1, explanation: "One-to-many relationship is represented as 1:N." },
  
  // Unit 5
  { id: 13, unit: 5, question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 2, explanation: "3NF eliminates transitive dependencies (A→B→C)." },
  { id: 14, unit: 5, question: "Multivalued attributes violate:", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 0, explanation: "First Normal Form requires atomic values, no multivalued attributes." },
  { id: 15, unit: 5, question: "In BCNF, every determinant must be:", options: ["Primary key", "Foreign key", "Candidate key", "Super key"], correct: 2, explanation: "BCNF requires every determinant to be a candidate key." },
  
  // Unit 6
  { id: 16, unit: 6, question: "In Two-Phase Locking, locks are:", options: ["Acquired then released", "Released then acquired", "Both simultaneously", "None"], correct: 0, explanation: "2PL has two phases: growing (acquire locks) and shrinking (release locks)." },
  { id: 17, unit: 6, question: "Deadlock occurs when:", options: ["No resources", "Circular wait", "Too many transactions", "Database crash"], correct: 1, explanation: "Deadlock happens when transactions wait for each other in a cycle." },
  { id: 18, unit: 6, question: "Which is NOT a transaction state?", options: ["Active", "Committed", "Pending", "Failed"], correct: 2, explanation: "Transaction states are Active, Partially Committed, Committed, Failed, and Aborted." },
  
  // Unit 7
  { id: 19, unit: 7, question: "Which join is most efficient for sorted tables?", options: ["Nested-loop", "Hash join", "Merge join", "Block nested-loop"], correct: 2, explanation: "Merge join is optimal for sorted data as it scans both tables once." },
  { id: 20, unit: 7, question: "Index is created using:", options: ["CREATE INDEX", "MAKE INDEX", "ADD INDEX", "INDEX CREATE"], correct: 0, explanation: "CREATE INDEX is the SQL command to create an index." },
  { id: 21, unit: 7, question: "Query optimization aims to reduce:", options: ["Query length", "Cost", "Tables", "Columns"], correct: 1, explanation: "Query optimization minimizes execution cost (I/O and CPU time)." },
  
  // Unit 8
  { id: 22, unit: 8, question: "Which prevents SQL injection?", options: ["Encryption", "Parameterized queries", "Indexing", "Normalization"], correct: 1, explanation: "Parameterized queries prevent SQL injection by separating code from data." },
  { id: 23, unit: 8, question: "GRANT command is used for:", options: ["Create table", "Give permissions", "Delete data", "Encrypt data"], correct: 1, explanation: "GRANT is a DCL command that assigns privileges to users." },
  { id: 24, unit: 8, question: "Which is NOT an access control method?", options: ["DAC", "MAC", "RBAC", "SAC"], correct: 3, explanation: "Main access control methods are DAC, MAC, and RBAC." },
  
  // Unit 9
  { id: 25, unit: 9, question: "In B+ tree, data is stored in:", options: ["Root nodes", "Internal nodes", "Leaf nodes", "All nodes"], correct: 2, explanation: "B+ trees store all data in leaf nodes, making range queries efficient." },
  { id: 26, unit: 9, question: "Hash collision occurs when:", options: ["Two keys hash to same value", "Bucket is full", "Key not found", "Hash function fails"], correct: 0, explanation: "Collision happens when different keys produce same hash value." },
  { id: 27, unit: 9, question: "Primary index is created on:", options: ["Primary key", "Foreign key", "Any attribute", "Multiple attributes"], correct: 0, explanation: "Primary index is built on the primary key of ordered file." },
  
  // Unit 10
  { id: 28, unit: 10, question: "Which section is mandatory in PL/SQL block?", options: ["DECLARE", "BEGIN", "EXCEPTION", "END"], correct: 1, explanation: "BEGIN...END is mandatory; DECLARE and EXCEPTION are optional." },
  { id: 29, unit: 10, question: "Trigger executes:", options: ["Manually", "Automatically", "On schedule", "Never"], correct: 1, explanation: "Triggers automatically execute in response to database events." },
  { id: 30, unit: 10, question: "Which is NOT a cursor attribute?", options: ["%FOUND", "%NOTFOUND", "%ROWCOUNT", "%DATATYPE"], correct: 3, explanation: "Cursor attributes are %FOUND, %NOTFOUND, %ROWCOUNT, and %ISOPEN." },
];
