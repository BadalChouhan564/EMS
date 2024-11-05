

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "e@e.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Gather data and prepare the monthly financial report",
                "taskDate": "2024-10-22",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Attend client meeting to discuss project requirements",
                "taskDate": "2024-10-18",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Submit project proposal",
                "taskDescription": "Prepare and submit the project proposal for client X",
                "taskDate": "2024-10-15",
                "category": "Projects"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 2,
        "firstName": "Vivaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete code review",
                "taskDescription": "Review code for the new feature implementation",
                "taskDate": "2024-10-23",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix security issues",
                "taskDescription": "Fix reported security vulnerabilities",
                "taskDate": "2024-10-24",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Backend optimization",
                "taskDescription": "Optimize the backend services for better performance",
                "taskDate": "2024-10-18",
                "category": "Development"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Reyansh",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Plan marketing strategy",
                "taskDescription": "Develop a marketing strategy for the next quarter",
                "taskDate": "2024-10-26",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Social media audit",
                "taskDescription": "Audit current social media accounts and suggest improvements",
                "taskDate": "2024-10-17",
                "category": "Social Media"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Ad campaign analysis",
                "taskDescription": "Analyze the performance of the recent ad campaign",
                "taskDate": "2024-10-14",
                "category": "Advertising"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Krishna",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare client presentation",
                "taskDescription": "Create a presentation for the upcoming client pitch",
                "taskDate": "2024-10-21",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Sales report",
                "taskDescription": "Submit the sales report for the last quarter",
                "taskDate": "2024-10-17",
                "category": "Sales"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Follow up with clients",
                "taskDescription": "Send follow-up emails to clients after the meeting",
                "taskDate": "2024-10-22",
                "category": "Client Relations"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Sai",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory update",
                "taskDescription": "Update the inventory system with the latest stock count",
                "taskDate": "2024-10-20",
                "category": "Inventory"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Supplier meeting",
                "taskDescription": "Meet with suppliers to negotiate terms",
                "taskDate": "2024-10-25",
                "category": "Procurement"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Process shipment",
                "taskDescription": "Process the outgoing shipment for warehouse A",
                "taskDate": "2024-10-15",
                "category": "Logistics"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}