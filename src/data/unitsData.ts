export interface DetailedNote {
  section: string;
  subsections: {
    title: string;
    content: string[];
    diagram?: string;
  }[];
}

export interface Unit {
  id: number;
  title: string;
  weightage: string;
  topics: string[];
  revisionPoints: string[];
  detailedNotes: DetailedNote[];
  memoryHacks: string[];
  questions: {
    mcqs: { question: string; options: string[]; correct: number }[];
    theory: string[];
    practical: string[];
  };
  visualFlow: string[];
}

export const units: Unit[] = [
  {
    id: 1,
    title: "Introductory Concepts of DBMS",
    weightage: "8-10 Marks",
    topics: ["Database System", "DBMS Architecture", "Data Models", "Schema & Instances"],
    revisionPoints: [
      "DBMS = Software to manage databases efficiently",
      "3-Schema Architecture: External, Conceptual, Internal",
      "Data Independence: Logical & Physical separation",
      "Database Users: DBA, Designer, End User, Analyst",
      "ACID Properties: Atomicity, Consistency, Isolation, Durability",
      "Data Models: Hierarchical, Network, Relational, Object-Oriented",
      "DBMS vs File System: Redundancy control, Data integrity",
      "Database Languages: DDL, DML, DCL, TCL",
      "Advantages: Data sharing, Security, Backup & Recovery",
      "Disadvantages: Cost, Complexity, Performance overhead"
    ],
    detailedNotes: [
      {
        section: "Database Management System (DBMS)",
        subsections: [
          {
            title: "What is DBMS?",
            content: [
              "DBMS is software that enables users to create, maintain, and control access to databases",
              "Acts as an interface between the database and end users or application programs",
              "Examples: MySQL, Oracle, PostgreSQL, MongoDB, MS SQL Server"
            ]
          },
          {
            title: "DBMS vs File System",
            content: [
              "📁 File System Issues:",
              "• Data Redundancy: Same data stored multiple times",
              "• Data Inconsistency: Different versions of same data",
              "• Difficulty in accessing data",
              "• No concurrent access control",
              "• Security problems",
              "",
              "✅ DBMS Advantages:",
              "• Eliminates redundancy through normalization",
              "• Maintains data consistency",
              "• Provides efficient data access",
              "• Supports concurrent users",
              "• Built-in security mechanisms"
            ]
          }
        ]
      },
      {
        section: "Three-Schema Architecture",
        subsections: [
          {
            title: "Architecture Levels",
            content: [
              "🏗️ External Level (View Level):",
              "• Describes how users see the data",
              "• Multiple external views possible",
              "• Each user sees only relevant data",
              "• Example: Student sees their marks, Teacher sees all marks",
              "",
              "📋 Conceptual Level (Logical Level):",
              "• Describes what data is stored",
              "• Complete view of entire database",
              "• Defines relationships, constraints, security",
              "• Database schema defined here",
              "",
              "💾 Internal Level (Physical Level):",
              "• Describes how data is physically stored",
              "• Deals with data structures, file organization",
              "• Storage details, indexing, access paths",
              "• Hidden from users"
            ],
            diagram: "Users → External Schema → Conceptual Schema → Internal Schema → Physical Storage"
          },
          {
            title: "Data Independence",
            content: [
              "🔀 Logical Data Independence:",
              "• Ability to change conceptual schema without changing external schema",
              "• Add new attributes or entities without affecting users",
              "• Example: Adding 'Email' field won't affect existing queries",
              "",
              "💽 Physical Data Independence:",
              "• Ability to change internal schema without changing conceptual schema",
              "• Change storage structure without affecting logical structure",
              "• Example: Changing index structure doesn't affect queries"
            ]
          }
        ]
      },
      {
        section: "ACID Properties",
        subsections: [
          {
            title: "Transaction Properties",
            content: [
              "⚛️ Atomicity (All or Nothing):",
              "• Transaction is indivisible unit",
              "• Either all operations complete or none",
              "• Example: Bank transfer - either both debit and credit happen or neither",
              "",
              "✓ Consistency:",
              "• Database must be consistent before and after transaction",
              "• All integrity constraints must be satisfied",
              "• Example: Total money in bank remains same after transfer",
              "",
              "🔒 Isolation:",
              "• Concurrent transactions must not interfere",
              "• Intermediate state not visible to other transactions",
              "• Example: Two people withdrawing money - processed one at a time",
              "",
              "💪 Durability:",
              "• Once committed, changes are permanent",
              "• Survives system failures",
              "• Example: After successful transaction, data survives power failure"
            ]
          }
        ]
      },
      {
        section: "Data Models",
        subsections: [
          {
            title: "Types of Data Models",
            content: [
              "🌳 Hierarchical Model:",
              "• Tree-like structure",
              "• Parent-child relationships",
              "• Example: File system, organizational chart",
              "• Limitation: Cannot represent many-to-many relationships",
              "",
              "🕸️ Network Model:",
              "• Graph structure",
              "• More flexible than hierarchical",
              "• Allows many-to-many relationships",
              "• Complex to implement",
              "",
              "📊 Relational Model:",
              "• Data stored in tables (relations)",
              "• Most widely used",
              "• Based on mathematical set theory",
              "• SQL is the query language",
              "",
              "🎯 Object-Oriented Model:",
              "• Combines database with OOP concepts",
              "• Objects, classes, inheritance",
              "• Suitable for complex data"
            ]
          }
        ]
      },
      {
        section: "Database Languages",
        subsections: [
          {
            title: "SQL Sublanguages",
            content: [
              "📝 DDL (Data Definition Language):",
              "• Define database structure",
              "• Commands: CREATE, ALTER, DROP, TRUNCATE",
              "• Example: CREATE TABLE Students (...)",
              "",
              "✏️ DML (Data Manipulation Language):",
              "• Manipulate data in database",
              "• Commands: SELECT, INSERT, UPDATE, DELETE",
              "• Example: INSERT INTO Students VALUES (...)",
              "",
              "🔐 DCL (Data Control Language):",
              "• Control access to data",
              "• Commands: GRANT, REVOKE",
              "• Example: GRANT SELECT ON Students TO User1",
              "",
              "🔄 TCL (Transaction Control Language):",
              "• Manage transactions",
              "• Commands: COMMIT, ROLLBACK, SAVEPOINT",
              "• Example: COMMIT; saves all changes"
            ]
          }
        ]
      },
      {
        section: "Database Users",
        subsections: [
          {
            title: "User Types",
            content: [
              "👨‍💼 Database Administrator (DBA):",
              "• Complete control over database",
              "• Creates user accounts, manages security",
              "• Handles backup and recovery",
              "• Monitors performance",
              "",
              "👨‍🎨 Database Designer:",
              "• Designs database schema",
              "• Identifies entities, relationships",
              "• Creates ER diagrams",
              "• Defines constraints",
              "",
              "👨‍💻 Application Programmer:",
              "• Writes programs to interact with database",
              "• Uses DML for data operations",
              "• Creates user interfaces",
              "",
              "👥 End Users:",
              "• Naive users: Use predefined applications",
              "• Sophisticated users: Write SQL queries directly",
              "• Standalone users: Personal databases"
            ]
          }
        ]
      }
    ],
    memoryHacks: [
      "ACID = ATM Machine rule (must work perfectly every time)",
      "3-Schema = Building floors: User view, Blueprint, Foundation",
      "Data Independence = Plug & Play electronics"
    ],
    questions: {
      mcqs: [
        {
          question: "Which of the following is NOT an ACID property?",
          options: ["Atomicity", "Consistency", "Dependency", "Durability"],
          correct: 2
        },
        {
          question: "What does DDL stand for?",
          options: ["Data Definition Language", "Data Deletion Language", "Database Design Logic", "None"],
          correct: 0
        }
      ],
      theory: [
        "Explain the 3-Schema Architecture of DBMS with diagram.",
        "Differentiate between DBMS and File System.",
        "What are the advantages of using DBMS over traditional file systems?"
      ],
      practical: [
        "List different types of database users and their roles.",
        "Explain ACID properties with real-world examples."
      ]
    },
    visualFlow: ["Data Input", "DBMS Processing", "Storage Management", "Query Execution", "Output Results"]
  },

  {
    id: 2,
    title: "Relational Model",
    weightage: "10-12 Marks",
    topics: ["Relations", "Keys", "Relational Algebra", "Tuple Calculus"],
    revisionPoints: [
      "Relation = Table with rows (tuples) and columns (attributes)",
      "Domain = Set of allowed values for an attribute",
      "Degree = Number of columns, Cardinality = Number of rows",
      "Super Key = Any combination of attributes identifying a tuple",
      "Candidate Key = Minimal Super Key",
      "Primary Key = Chosen candidate key (unique + not null)",
      "Foreign Key = References primary key of another table",
      "Relational Algebra Operations: Select, Project, Union, Intersection",
      "Join Types: Natural, Inner, Outer (Left, Right, Full)",
      "Tuple Calculus = Non-procedural query language"
    ],
    detailedNotes: [
      {
        section: "Relational Model Basics",
        subsections: [
          {
            title: "Relation Structure",
            content: [
              "📊 Relation (Table):",
              "• Collection of related data entries",
              "• Organized in rows and columns",
              "• Each row is a tuple (record)",
              "• Each column is an attribute (field)",
              "",
              "🔢 Degree and Cardinality:",
              "• Degree = Number of attributes (columns)",
              "• Cardinality = Number of tuples (rows)",
              "• Example: Student(ID, Name, Age) has degree 3",
              "",
              "📦 Domain:",
              "• Set of allowed values for an attribute",
              "• Example: Age domain = {0, 1, 2, ..., 150}",
              "• Ensures data integrity"
            ],
            diagram: "Table = Relation | Rows = Tuples | Columns = Attributes"
          }
        ]
      },
      {
        section: "Keys in Relational Model",
        subsections: [
          {
            title: "Types of Keys",
            content: [
              "🔑 Super Key:",
              "• Any combination of attributes that uniquely identifies a tuple",
              "• Can have redundant attributes",
              "• Example: {ID}, {ID, Name}, {ID, Name, Age} all are super keys",
              "",
              "🎯 Candidate Key:",
              "• Minimal super key (no redundant attributes)",
              "• Multiple candidate keys possible",
              "• Example: {ID}, {Email} can both be candidate keys",
              "",
              "👑 Primary Key:",
              "• Selected candidate key",
              "• Must be unique and NOT NULL",
              "• Only one primary key per table",
              "• Usually underlined in schema",
              "",
              "🔗 Foreign Key:",
              "• References primary key of another table",
              "• Establishes relationship between tables",
              "• Can have NULL values",
              "• Maintains referential integrity"
            ],
            diagram: "Super Key ⊃ Candidate Key ⊃ Primary Key"
          }
        ]
      },
      {
        section: "Relational Algebra",
        subsections: [
          {
            title: "Basic Operations",
            content: [
              "🔍 Select (σ):",
              "• Selects rows based on condition",
              "• Horizontal partitioning",
              "• Example: σ(age>20)(Student)",
              "",
              "📌 Project (π):",
              "• Selects specific columns",
              "• Vertical partitioning",
              "• Example: π(name, age)(Student)",
              "",
              "∪ Union:",
              "• Combines tuples from two relations",
              "• Removes duplicates",
              "• Relations must be union-compatible",
              "",
              "∩ Intersection:",
              "• Common tuples in both relations",
              "• Relations must be union-compatible",
              "",
              "− Set Difference:",
              "• Tuples in first but not in second",
              "• R − S ≠ S − R"
            ]
          },
          {
            title: "Join Operations",
            content: [
              "⨝ Natural Join:",
              "• Combines tables based on common attributes",
              "• Automatically matches common columns",
              "• Example: Student ⨝ Enrollment",
              "",
              "🔄 Inner Join:",
              "• Returns matching rows from both tables",
              "• Most common join type",
              "",
              "⬅️ Left Outer Join:",
              "• All rows from left table",
              "• Matching rows from right table",
              "• NULL for non-matching right rows",
              "",
              "➡️ Right Outer Join:",
              "• All rows from right table",
              "• Matching rows from left table",
              "• NULL for non-matching left rows",
              "",
              "↔️ Full Outer Join:",
              "• All rows from both tables",
              "• NULL where no match"
            ]
          }
        ]
      },
      {
        section: "Tuple & Domain Calculus",
        subsections: [
          {
            title: "Calculus vs Algebra",
            content: [
              "📐 Tuple Relational Calculus:",
              "• Non-procedural query language",
              "• Describes WHAT to retrieve, not HOW",
              "• Uses tuple variables",
              "• Example: {t | t ∈ Student ∧ t.age > 20}",
              "",
              "🎲 Domain Relational Calculus:",
              "• Uses domain variables",
              "• Variables range over attribute domains",
              "• Example: {<n, a> | ∃s(s ∈ Student ∧ s.name=n ∧ s.age=a ∧ a>20)}",
              "",
              "💡 Key Difference:",
              "• Relational Algebra: Procedural (step-by-step)",
              "• Relational Calculus: Declarative (describe result)"
            ]
          }
        ]
      }
    ],
    memoryHacks: [
      "Keys hierarchy: Super > Candidate > Primary (SCP like skincare routine)",
      "Foreign Key = Family connection between tables",
      "Join = Marriage between tables based on common attribute"
    ],
    questions: {
      mcqs: [
        {
          question: "Which key can have NULL values?",
          options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
          correct: 1
        },
        {
          question: "Natural Join is based on:",
          options: ["Common attributes", "All attributes", "Primary keys only", "Foreign keys only"],
          correct: 0
        }
      ],
      theory: [
        "Explain different types of keys in DBMS with examples.",
        "What is Relational Algebra? List and explain any 5 operations.",
        "Differentiate between Tuple Calculus and Domain Calculus."
      ],
      practical: [
        "Given two tables Student(ID, Name) and Marks(ID, Subject, Score), write relational algebra for students with score > 80.",
        "Explain Natural Join with example."
      ]
    },
    visualFlow: ["Tables", "Define Keys", "Apply Constraints", "Relational Operations", "Query Results"]
  },

  {
    id: 3,
    title: "SQL (Structured Query Language)",
    weightage: "15-18 Marks",
    topics: ["DDL", "DML", "Queries", "Joins", "Aggregate Functions"],
    revisionPoints: [
      "SQL = Language to interact with relational databases",
      "DDL Commands: CREATE, ALTER, DROP, TRUNCATE",
      "DML Commands: INSERT, UPDATE, DELETE, SELECT",
      "SELECT syntax: SELECT columns FROM table WHERE condition",
      "WHERE clause filters rows, HAVING filters groups",
      "ORDER BY sorts results (ASC/DESC)",
      "GROUP BY groups rows sharing same value",
      "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
      "JOIN combines tables: INNER, LEFT, RIGHT, FULL OUTER",
      "Subquery = Query inside another query"
    ],
    detailedNotes: [
      {
        section: "SQL Basics",
        subsections: [
          {
            title: "What is SQL?",
            content: [
              "💬 SQL = Structured Query Language",
              "• Standard language for relational databases",
              "• Used to create, modify, and query databases",
              "• Case-insensitive (SELECT = select = SeLeCt)",
              "• Statements end with semicolon (;)"
            ]
          }
        ]
      },
      {
        section: "DDL (Data Definition Language)",
        subsections: [
          {
            title: "DDL Commands",
            content: [
              "🏗️ CREATE:",
              "• Creates new database objects",
              "• Example: CREATE TABLE Students (ID INT PRIMARY KEY, Name VARCHAR(50));",
              "",
              "🔧 ALTER:",
              "• Modifies existing structure",
              "• ADD: ALTER TABLE Students ADD Email VARCHAR(100);",
              "• DROP: ALTER TABLE Students DROP COLUMN Email;",
              "• MODIFY: ALTER TABLE Students MODIFY Name VARCHAR(100);",
              "",
              "🗑️ DROP:",
              "• Deletes entire table structure and data",
              "• Cannot be rolled back",
              "• Example: DROP TABLE Students;",
              "",
              "✂️ TRUNCATE:",
              "• Removes all rows but keeps structure",
              "• Faster than DELETE",
              "• Cannot be rolled back",
              "• Example: TRUNCATE TABLE Students;"
            ]
          }
        ]
      },
      {
        section: "DML (Data Manipulation Language)",
        subsections: [
          {
            title: "DML Commands",
            content: [
              "➕ INSERT:",
              "• Adds new rows to table",
              "• INSERT INTO Students VALUES (1, 'John', 20);",
              "• INSERT INTO Students (ID, Name) VALUES (2, 'Jane');",
              "",
              "🔄 UPDATE:",
              "• Modifies existing data",
              "• UPDATE Students SET Age=21 WHERE ID=1;",
              "• Without WHERE updates all rows!",
              "",
              "❌ DELETE:",
              "• Removes rows from table",
              "• DELETE FROM Students WHERE ID=1;",
              "• Can be rolled back",
              "• DELETE FROM Students; (deletes all rows)",
              "",
              "🔍 SELECT:",
              "• Retrieves data from database",
              "• Most commonly used command",
              "• SELECT * FROM Students; (all columns)",
              "• SELECT Name, Age FROM Students; (specific columns)"
            ]
          }
        ]
      },
      {
        section: "SQL Clauses",
        subsections: [
          {
            title: "WHERE Clause",
            content: [
              "🎯 WHERE:",
              "• Filters rows based on condition",
              "• Used with SELECT, UPDATE, DELETE",
              "• Example: SELECT * FROM Students WHERE Age > 20;",
              "",
              "Operators:",
              "• Comparison: =, !=, <, >, <=, >=",
              "• Logical: AND, OR, NOT",
              "• Range: BETWEEN 18 AND 25",
              "• Pattern: LIKE 'J%' (starts with J)",
              "• List: IN ('John', 'Jane')",
              "• NULL check: IS NULL, IS NOT NULL"
            ]
          },
          {
            title: "GROUP BY & HAVING",
            content: [
              "📊 GROUP BY:",
              "• Groups rows with same values",
              "• Used with aggregate functions",
              "• Example: SELECT Dept, COUNT(*) FROM Employees GROUP BY Dept;",
              "",
              "🔍 HAVING:",
              "• Filters groups (not rows)",
              "• Used after GROUP BY",
              "• Example: SELECT Dept, AVG(Salary) FROM Employees GROUP BY Dept HAVING AVG(Salary) > 50000;",
              "",
              "💡 WHERE vs HAVING:",
              "• WHERE filters rows before grouping",
              "• HAVING filters groups after grouping",
              "• WHERE cannot use aggregate functions",
              "• HAVING can use aggregate functions"
            ]
          },
          {
            title: "ORDER BY",
            content: [
              "🔤 ORDER BY:",
              "• Sorts result set",
              "• ASC: Ascending (default)",
              "• DESC: Descending",
              "• Example: SELECT * FROM Students ORDER BY Age DESC;",
              "• Multiple columns: ORDER BY Dept ASC, Salary DESC;"
            ]
          }
        ]
      },
      {
        section: "Aggregate Functions",
        subsections: [
          {
            title: "Functions",
            content: [
              "📈 COUNT():",
              "• Counts number of rows",
              "• COUNT(*): All rows including NULL",
              "• COUNT(column): Non-NULL values",
              "",
              "➕ SUM():",
              "• Sum of numeric column",
              "• Example: SELECT SUM(Salary) FROM Employees;",
              "",
              "📊 AVG():",
              "• Average of numeric column",
              "• Ignores NULL values",
              "",
              "⬆️ MAX():",
              "• Maximum value",
              "• Works with numbers, dates, strings",
              "",
              "⬇️ MIN():",
              "• Minimum value",
              "• Works with numbers, dates, strings"
            ]
          }
        ]
      },
      {
        section: "JOIN Operations",
        subsections: [
          {
            title: "Types of JOINs",
            content: [
              "🔗 INNER JOIN:",
              "• Returns matching rows from both tables",
              "• SELECT * FROM A INNER JOIN B ON A.id = B.id;",
              "",
              "⬅️ LEFT JOIN (LEFT OUTER JOIN):",
              "• All rows from left table",
              "• Matching rows from right table",
              "• NULL for non-matching",
              "",
              "➡️ RIGHT JOIN (RIGHT OUTER JOIN):",
              "• All rows from right table",
              "• Matching rows from left table",
              "",
              "↔️ FULL OUTER JOIN:",
              "• All rows from both tables",
              "• NULL where no match",
              "",
              "❌ CROSS JOIN:",
              "• Cartesian product",
              "• Every row from first table with every row from second"
            ]
          }
        ]
      },
      {
        section: "Subqueries",
        subsections: [
          {
            title: "Nested Queries",
            content: [
              "🔄 Subquery:",
              "• Query inside another query",
              "• Can be in SELECT, FROM, WHERE clauses",
              "",
              "Example 1: WHERE clause",
              "SELECT Name FROM Students WHERE ID IN (SELECT StudentID FROM Enrollment WHERE Grade='A');",
              "",
              "Example 2: Correlated subquery",
              "SELECT Name, Salary FROM Employees E1 WHERE Salary > (SELECT AVG(Salary) FROM Employees E2 WHERE E1.Dept = E2.Dept);",
              "",
              "💡 Types:",
              "• Single-row subquery: Returns one value",
              "• Multi-row subquery: Returns multiple values (use IN, ANY, ALL)",
              "• Correlated subquery: References outer query"
            ]
          }
        ]
      }
    ],
    memoryHacks: [
      "SQL = Speak to Your Database",
      "WHERE before GROUP BY, HAVING after GROUP BY",
      "JOIN = Connect tables like LEGO blocks"
    ],
    questions: {
      mcqs: [
        {
          question: "Which command is used to add new column to table?",
          options: ["UPDATE", "INSERT", "ALTER", "MODIFY"],
          correct: 2
        },
        {
          question: "COUNT(*) returns:",
          options: ["Number of columns", "Number of rows", "Sum of values", "None"],
          correct: 1
        }
      ],
      theory: [
        "Explain difference between WHERE and HAVING clause.",
        "What are aggregate functions? List with examples.",
        "Differentiate between DELETE, TRUNCATE and DROP."
      ],
      practical: [
        "Create a table Employee(ID, Name, Salary, Dept). Write SQL to find employees with salary > 50000.",
        "Write query to find department with highest average salary.",
        "Explain INNER JOIN vs LEFT JOIN with example."
      ]
    },
    visualFlow: ["Write SQL Query", "Parser Checks Syntax", "Optimizer Creates Plan", "Execute Query", "Fetch Results"]
  },

  {
    id: 4,
    title: "ER Model (Entity-Relationship)",
    weightage: "12-15 Marks",
    topics: ["Entities", "Attributes", "Relationships", "ER Diagrams", "ER to Relational"],
    revisionPoints: [
      "Entity = Real-world object (Student, Course)",
      "Attribute = Property of entity (Name, Age)",
      "Key Attribute = Uniquely identifies entity (underlined)",
      "Composite Attribute = Can be divided (Full Name → First + Last)",
      "Derived Attribute = Calculated from other attributes (Age from DOB)",
      "Multivalued Attribute = Multiple values possible (Phone Numbers)",
      "Relationship = Association between entities",
      "Cardinality: One-to-One, One-to-Many, Many-to-Many",
      "Participation: Total (double line), Partial (single line)",
      "Weak Entity = Depends on strong entity (has double rectangle)"
    ],
    detailedNotes: [
      {
        section: "ER Model Basics",
        subsections: [
          {
            title: "What is ER Model?",
            content: [
              "📐 ER Model = Entity-Relationship Model",
              "• Conceptual data model",
              "• Graphical representation of database structure",
              "• Blueprint before creating actual database",
              "• Easier to understand than tables"
            ]
          }
        ]
      },
      {
        section: "Entities",
        subsections: [
          {
            title: "Entity Types",
            content: [
              "🎯 Entity:",
              "• Real-world object with independent existence",
              "• Has attributes and can be uniquely identified",
              "• Example: Student, Course, Employee, Department",
              "",
              "💪 Strong Entity:",
              "• Has its own primary key",
              "• Exists independently",
              "• Represented by single rectangle",
              "• Example: Student (has student ID)",
              "",
              "👶 Weak Entity:",
              "• Does not have its own primary key",
              "• Depends on strong entity for identification",
              "• Represented by double rectangle",
              "• Example: Dependent (depends on Employee)",
              "• Has partial key (discriminator)",
              "",
              "🔗 Identifying Relationship:",
              "• Relationship between weak and strong entity",
              "• Represented by double diamond"
            ],
            diagram: "Strong Entity ⬜ | Weak Entity ⬜⬜ | Relationship ◇"
          }
        ]
      },
      {
        section: "Attributes",
        subsections: [
          {
            title: "Types of Attributes",
            content: [
              "⚪ Simple Attribute:",
              "• Cannot be divided further",
              "• Example: Age, Gender, ID",
              "",
              "🔘 Composite Attribute:",
              "• Can be divided into sub-parts",
              "• Example: Name (First Name + Last Name)",
              "• Address (Street + City + State + PIN)",
              "",
              "🔑 Key Attribute:",
              "• Uniquely identifies entity",
              "• Represented by underlined text",
              "• Example: Student_ID, Employee_ID",
              "",
              "🎲 Multivalued Attribute:",
              "• Can have multiple values",
              "• Represented by double oval",
              "• Example: Phone_Numbers, Email_Addresses",
              "",
              "📐 Derived Attribute:",
              "• Calculated from other attributes",
              "• Represented by dashed oval",
              "• Example: Age (derived from Date_of_Birth)",
              "• Example: Total_Marks (sum of subject marks)"
            ],
            diagram: "Simple ⚪ | Composite (⚪⚪) | Key (⚪̲) | Multivalued ⚪⚪ | Derived (⚪)"
          }
        ]
      },
      {
        section: "Relationships",
        subsections: [
          {
            title: "Relationship Types",
            content: [
              "🔗 Relationship:",
              "• Association between two or more entities",
              "• Represented by diamond shape",
              "• Example: Student ENROLLS_IN Course",
              "",
              "📊 Degree of Relationship:",
              "• Unary (Recursive): One entity type",
              "  Example: Employee MANAGES Employee",
              "• Binary: Two entity types (most common)",
              "  Example: Student ENROLLS Course",
              "• Ternary: Three entity types",
              "  Example: Supplier SUPPLIES Part TO Project",
              "",
              "Relationship can also have attributes:",
              "• Example: ENROLLS_IN has Date, Grade"
            ]
          },
          {
            title: "Cardinality",
            content: [
              "1️⃣:1️⃣ One-to-One (1:1):",
              "• One entity instance relates to one instance of other entity",
              "• Example: Person HAS Passport",
              "• Represented by 1 on both sides",
              "",
              "1️⃣:N One-to-Many (1:N):",
              "• One entity instance relates to multiple instances",
              "• Example: Department HAS Employees",
              "• One department, many employees",
              "• Represented by 1 and N",
              "",
              "N:N Many-to-Many (M:N):",
              "• Multiple instances relate to multiple instances",
              "• Example: Students ENROLL Courses",
              "• One student takes many courses",
              "• One course has many students",
              "• Represented by M and N"
            ],
            diagram: "1:1 → Person─Has─Passport | 1:N → Dept─Has─Employees | M:N → Student─Enrolls─Course"
          },
          {
            title: "Participation",
            content: [
              "✓ Total Participation (Mandatory):",
              "• Every entity must participate in relationship",
              "• Represented by double line",
              "• Example: Every Employee WORKS_IN some Department",
              "",
              "⚪ Partial Participation (Optional):",
              "• Not all entities need to participate",
              "• Represented by single line",
              "• Example: Not all Employees MANAGE a project"
            ]
          }
        ]
      },
      {
        section: "ER to Relational Mapping",
        subsections: [
          {
            title: "Conversion Rules",
            content: [
              "📋 Strong Entity → Table:",
              "• Create table with entity name",
              "• All simple attributes become columns",
              "• Key attribute becomes primary key",
              "",
              "👶 Weak Entity → Table:",
              "• Create table with entity name",
              "• Include partial key + primary key of strong entity",
              "• Foreign key references strong entity",
              "",
              "1:1 Relationship:",
              "• Add foreign key in either table",
              "• Prefer total participation side",
              "",
              "1:N Relationship:",
              "• Add foreign key on N side",
              "• References primary key of 1 side",
              "",
              "M:N Relationship:",
              "• Create new junction table",
              "• Composite primary key (both foreign keys)",
              "• Example: Student_Course(Student_ID, Course_ID, Grade)",
              "",
              "🎲 Multivalued Attribute:",
              "• Create separate table",
              "• Include entity's primary key",
              "• Example: Phone(Emp_ID, Phone_Number)"
            ]
          }
        ]
      },
      {
        section: "ER Diagram Symbols",
        subsections: [
          {
            title: "Quick Reference",
            content: [
              "⬜ Rectangle: Entity",
              "⬜⬜ Double Rectangle: Weak Entity",
              "◇ Diamond: Relationship",
              "◇◇ Double Diamond: Identifying Relationship",
              "⚪ Oval: Attribute",
              "⚪⚪ Double Oval: Multivalued Attribute",
              "(⚪) Dashed Oval: Derived Attribute",
              "⚪̲ Underlined: Key Attribute",
              "─ Single Line: Partial Participation",
              "═ Double Line: Total Participation"
            ]
          }
        ]
      }
    ],
    memoryHacks: [
      "ER Diagram = Blueprint before building database",
      "Weak Entity = Child dependent on parent",
      "Many-to-Many = Students enrolling in Courses"
    ],
    questions: {
      mcqs: [
        {
          question: "Which symbol represents weak entity?",
          options: ["Rectangle", "Double Rectangle", "Diamond", "Circle"],
          correct: 1
        },
        {
          question: "Derived attribute is shown by:",
          options: ["Oval", "Dashed Oval", "Rectangle", "Diamond"],
          correct: 1
        }
      ],
      theory: [
        "Draw ER diagram for Library Management System.",
        "Explain different types of attributes with examples.",
        "What is weak entity? Explain with example."
      ],
      practical: [
        "Convert ER diagram with Many-to-Many relationship into relational tables.",
        "Design ER model for Hospital Management System."
      ]
    },
    visualFlow: ["Identify Entities", "Define Attributes", "Establish Relationships", "Draw ER Diagram", "Convert to Tables"]
  },

  {
    id: 5,
    title: "Relational Database Design & Normalization",
    weightage: "15-18 Marks",
    topics: ["Functional Dependencies", "Normal Forms", "BCNF", "Decomposition"],
    revisionPoints: [
      "Functional Dependency: X → Y (X determines Y)",
      "Normalization = Organizing data to reduce redundancy",
      "1NF: Atomic values (no repeating groups)",
      "2NF: 1NF + No partial dependency",
      "3NF: 2NF + No transitive dependency",
      "BCNF: Stricter than 3NF (every determinant is candidate key)",
      "Anomalies: Insertion, Deletion, Update",
      "Lossless Join: No data loss after decomposition",
      "Dependency Preservation: All FDs maintained",
      "Denormalization: Trading normalization for performance"
    ],
    detailedNotes: [],
    memoryHacks: [
      "Normalization = Marie Kondo of Database (organize everything)",
      "1NF → 2NF → 3NF → BCNF = Levels in a game",
      "BCNF = Boss level of normalization"
    ],
    questions: {
      mcqs: [
        {
          question: "Which normal form removes transitive dependency?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correct: 2
        },
        {
          question: "Multivalued attributes violate:",
          options: ["1NF", "2NF", "3NF", "BCNF"],
          correct: 0
        }
      ],
      theory: [
        "Explain all normal forms with examples.",
        "What are database anomalies? How normalization prevents them?",
        "Differentiate between 3NF and BCNF."
      ],
      practical: [
        "Given: Student(ID, Name, Course, Instructor, Office). Find FDs and normalize to 3NF.",
        "Check if given relation is in BCNF. If not, decompose."
      ]
    },
    visualFlow: ["Unnormalized Data", "Apply 1NF", "Apply 2NF", "Apply 3NF", "Apply BCNF", "Optimized Schema"]
  },
  {
    id: 6,
    title: "Transaction Management",
    weightage: "12-15 Marks",
    topics: ["ACID", "Concurrency", "Locks", "Deadlock", "Recovery"],
    revisionPoints: [
      "Transaction = Unit of work (all or nothing)",
      "States: Active, Partially Committed, Committed, Failed, Aborted",
      "ACID ensures reliable transactions",
      "Concurrency Control = Multiple transactions simultaneously",
      "Lock Types: Shared (S), Exclusive (X)",
      "Two-Phase Locking (2PL): Growing & Shrinking phases",
      "Deadlock = Circular wait for resources",
      "Deadlock Prevention: Lock all resources at once",
      "Deadlock Detection: Wait-for graph",
      "Recovery: Log-based, Checkpoint, Rollback"
    ],
    detailedNotes: [],
    memoryHacks: [
      "Transaction = Pizza delivery (delivered or money back)",
      "Deadlock = Two people holding door for each other",
      "2PL = Collect all keys, then release all keys"
    ],
    questions: {
      mcqs: [
        {
          question: "In Two-Phase Locking, locks are:",
          options: ["Acquired then released", "Released then acquired", "Both simultaneously", "None"],
          correct: 0
        },
        {
          question: "Deadlock occurs when:",
          options: ["No resources", "Circular wait", "Too many transactions", "Database crash"],
          correct: 1
        }
      ],
      theory: [
        "Explain transaction states with state diagram.",
        "What is Two-Phase Locking? Explain with example.",
        "What is deadlock? How to prevent and detect it?"
      ],
      practical: [
        "Given transactions T1 and T2, show how deadlock can occur.",
        "Demonstrate log-based recovery after system crash."
      ]
    },
    visualFlow: ["Begin Transaction", "Acquire Locks", "Execute Operations", "Commit/Rollback", "Release Locks"]
  },
  {
    id: 7,
    title: "Query Processing & Optimization",
    weightage: "10-12 Marks",
    topics: ["Query Processing Steps", "Optimization", "Join Algorithms", "Cost Estimation"],
    revisionPoints: [
      "Query Processing: Parsing → Optimization → Execution",
      "Parser checks syntax and semantics",
      "Optimizer finds efficient execution plan",
      "Cost = I/O operations + CPU time",
      "Selection Methods: Linear search, Binary search, Index",
      "Join Algorithms: Nested-loop, Block nested-loop, Merge join, Hash join",
      "Index speeds up search operations",
      "Query Tree = Graphical representation of query",
      "Heuristic Optimization = Rule-based approach",
      "Cost-Based Optimization = Statistics-based approach"
    ],
    detailedNotes: [],
    memoryHacks: [
      "Query Optimization = Finding shortest route on Google Maps",
      "Join Algorithms = Different ways to shuffle two decks",
      "Index = Book's index page (quick lookup)"
    ],
    questions: {
      mcqs: [
        {
          question: "Which join is most efficient for sorted tables?",
          options: ["Nested-loop", "Hash join", "Merge join", "Block nested-loop"],
          correct: 2
        },
        {
          question: "Index is created using:",
          options: ["CREATE INDEX", "MAKE INDEX", "ADD INDEX", "INDEX CREATE"],
          correct: 0
        }
      ],
      theory: [
        "Explain query processing steps in detail.",
        "Compare different join algorithms.",
        "What is query optimization? Explain with example."
      ],
      practical: [
        "For given query, draw query tree and find optimal execution plan.",
        "Calculate cost of nested-loop join vs hash join."
      ]
    },
    visualFlow: ["SQL Query", "Parse & Translate", "Generate Plans", "Cost Estimation", "Execute Best Plan", "Results"]
  },
  {
    id: 8,
    title: "Database Security",
    weightage: "8-10 Marks",
    topics: ["Access Control", "Encryption", "SQL Injection", "Authentication"],
    revisionPoints: [
      "Security = Protecting database from unauthorized access",
      "Authentication = Verifying user identity",
      "Authorization = Granting permissions",
      "Access Control: DAC, MAC, RBAC",
      "Encryption = Converting data to unreadable format",
      "SQL Injection = Malicious SQL code injection",
      "Prevention: Parameterized queries, Input validation",
      "Audit Trail = Log of database activities",
      "Backup & Recovery = Data protection mechanism",
      "Views provide security by limiting data access"
    ],
    detailedNotes: [],
    memoryHacks: [
      "Security = Locks on house doors",
      "SQL Injection = Sneaking through back door",
      "Encryption = Secret language only you understand"
    ],
    questions: {
      mcqs: [
        {
          question: "Which prevents SQL injection?",
          options: ["Encryption", "Parameterized queries", "Indexing", "Normalization"],
          correct: 1
        },
        {
          question: "GRANT command is used for:",
          options: ["Create table", "Give permissions", "Delete data", "Encrypt data"],
          correct: 1
        }
      ],
      theory: [
        "What is SQL injection? How to prevent it?",
        "Explain different access control methods.",
        "What are security threats in DBMS?"
      ],
      practical: [
        "Write SQL commands to grant and revoke permissions.",
        "Demonstrate SQL injection attack and prevention."
      ]
    },
    visualFlow: ["User Login", "Authentication", "Authorization Check", "Access Control", "Audit Logging", "Secure Access"]
  },
  {
    id: 9,
    title: "Indexing & Hashing",
    weightage: "12-15 Marks",
    topics: ["Index Types", "B-Tree", "B+ Tree", "Hashing"],
    revisionPoints: [
      "Index = Data structure for faster search",
      "Primary Index = On primary key (ordered)",
      "Secondary Index = On non-key attribute",
      "Clustering Index = On non-key ordered field",
      "B-Tree = Balanced tree structure",
      "B+ Tree = All data in leaf nodes",
      "Advantages of B+ Tree: Better for range queries",
      "Hash Function = Maps key to bucket location",
      "Static Hashing = Fixed number of buckets",
      "Dynamic Hashing = Grows with data"
    ],
    detailedNotes: [],
    memoryHacks: [
      "Index = Library catalog system",
      "B+ Tree = Family tree with all info at bottom",
      "Hashing = Direct phone number lookup"
    ],
    questions: {
      mcqs: [
        {
          question: "In B+ tree, data is stored in:",
          options: ["Root nodes", "Internal nodes", "Leaf nodes", "All nodes"],
          correct: 2
        },
        {
          question: "Hash collision occurs when:",
          options: ["Two keys hash to same value", "Bucket is full", "Key not found", "Hash function fails"],
          correct: 0
        }
      ],
      theory: [
        "Explain B-Tree and B+ Tree with diagrams.",
        "What is hashing? Compare static and dynamic hashing.",
        "Differentiate between primary and secondary index."
      ],
      practical: [
        "Insert keys 10, 20, 30, 40 into B-Tree of order 3.",
        "Demonstrate hash collision handling using chaining."
      ]
    },
    visualFlow: ["Search Query", "Access Index", "Navigate B+ Tree", "Locate Data Block", "Retrieve Record"]
  },
  {
    id: 10,
    title: "PL/SQL Concepts",
    weightage: "12-15 Marks",
    topics: ["Blocks", "Variables", "Cursors", "Procedures", "Triggers"],
    revisionPoints: [
      "PL/SQL = Procedural extension of SQL",
      "Block Structure: DECLARE, BEGIN, EXCEPTION, END",
      "Variables declared in DECLARE section",
      "Control: IF-THEN-ELSE, CASE, LOOP",
      "Cursor = Pointer to query result",
      "Cursor Types: Implicit, Explicit",
      "Procedure = Stored program (can have IN/OUT parameters)",
      "Function = Returns single value",
      "Trigger = Automatically executes on event",
      "Exception Handling: Handles runtime errors"
    ],
    detailedNotes: [],
    memoryHacks: [
      "PL/SQL = SQL + Programming Logic",
      "Cursor = TV Remote (navigate through channels)",
      "Trigger = Automatic alarm system"
    ],
    questions: {
      mcqs: [
        {
          question: "Which section is mandatory in PL/SQL block?",
          options: ["DECLARE", "BEGIN", "EXCEPTION", "END"],
          correct: 1
        },
        {
          question: "Trigger is associated with:",
          options: ["SELECT", "DML operations", "DDL operations", "Both B and C"],
          correct: 3
        }
      ],
      theory: [
        "Explain PL/SQL block structure with example.",
        "What is cursor? Differentiate between implicit and explicit cursor.",
        "What are triggers? Explain with example."
      ],
      practical: [
        "Write PL/SQL block to calculate factorial of number.",
        "Create procedure to update employee salary.",
        "Write trigger to log all changes in Employee table."
      ]
    },
    visualFlow: ["Write PL/SQL Block", "Declare Variables", "Execute Logic", "Handle Exceptions", "Return Result"]
  }
];
