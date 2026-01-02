// Dummy data for the dashboard
export const dashboardData = {
  organization: {
    name: "Sri siddhartha Institute of medical science",
    location: "Vijayanagarr",
  },
  totalAssets: 200,
  workingAssets: 150,
  notWorkingAssets: 30,
  deactivated: 20,
  
  checkOuts: {
    checkedIn: 0,
    checkedOut: 25,
  },
  
  incidents: {
    total: 22,
    reported: 12,
    downtime: "10 mins",
    closed: 19,
    open: 3,
    budgetSpent: "₹ 3,00,000",
  },
  
  workOrders: {
    total: 17,
    requested: 12,
    closed: 14,
    open: 3,
    budgetSpent: "₹ 3,00,000",
  },

  assetsChart: {
    name: "Working Assets",
    data: [
      { name: "Working", value: 150, fill: "#3B82F6" },
      { name: "Not working", value: 30, fill: "#F97316" },
      { name: "Deactivated", value: 20, fill: "#94A3B8" },
    ],
  },

  incidentsBarChart: [
    { department: "Cardio and Intensive care unit", open: 30, closed: 7 },
    { department: "Radiology", open: 15, closed: 5 },
    { department: "Nursing department", open: 9, closed: 8 },
    { department: "Trauma and Emergency care", open: 5, closed: 4 },
    { department: "Oncology", open: 2, closed: 3 },
  ],

  workOrdersBarChart: [
    { department: "Cardio and Intensive care unit", open: 20, closed: 7 },
    { department: "Radiology", open: 4, closed: 5 },
    { department: "Nursing department", open: 9, closed: 8 },
    { department: "Trauma and Emergency care", open: 5, closed: 4 },
    { department: "Oncology", open: 2, closed: 3 },
  ],

  incidentsData: [
    {
      id: 1,
      department: "Anesthesiology",
      incidents: 5,
      open: 20,
      total: "7 min 22 sec",
      cards: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      id: 2,
      department: "Radiology",
      incidents: 5,
      open: 20,
      total: "7 min 22 sec",
      cards: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
    {
      id: 3,
      department: "Gynecology",
      incidents: 5,
      open: 20,
      total: "7 min 22 sec",
      cards: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
  ],

  workOrdersData: [
    {
      id: 1,
      department: "Dermatology",
      incidents: 5,
      open: 20,
      total: "7 min 22 sec",
      cards: [
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "Strecher",
          code: "A001234",
          startDate: "21-08-2025",
          clearDate: "26-08-2025",
        },
        {
          name: "CT scan",
          code: "A001234",
          startDate: "18-06-2025",
          clearDate: "19-06-2025",
        },
      ],
    },
  ],
};
