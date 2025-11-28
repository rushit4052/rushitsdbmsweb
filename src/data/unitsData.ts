export interface Unit {
  id: number;
  title: string;
  weightage: string;
  topics: string[];
  revisionPoints: string[];
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
      "Trigger = Auto-executes on event (INSERT/UPDATE/DELETE)",
      "Exception Handling = Error management"
    ],
    memoryHacks: [
      "PL/SQL = SQL with programming superpowers",
      "Cursor = Moving finger on page while reading",
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
          question: "Trigger executes:",
          options: ["Manually", "Automatically", "On schedule", "Never"],
          correct: 1
        }
      ],
      theory: [
        "Explain PL/SQL block structure with example.",
        "What is cursor? Differentiate implicit and explicit cursor.",
        "What are triggers? Explain with example."
      ],
      practical: [
        "Write PL/SQL block to calculate factorial of number.",
        "Create procedure to update employee salary.",
        "Write trigger that fires before deleting record."
      ]
    },
    visualFlow: ["Declare Variables", "Begin Block", "Execute Logic", "Handle Exceptions", "End Block"]
  }
];
