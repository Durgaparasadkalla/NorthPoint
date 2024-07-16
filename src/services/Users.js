export const getReporters = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/getuser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch reporters');
        }
        const data = await response.json();
        console.log("Fetched reporters:", data);
        return data;
    } catch (error) {
        console.error("Error fetching reporters:", error.message);
        return []; // Return an empty array or handle error as needed
    }
};

export const getProjects = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/getproject', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log("Fetched projects:", data);
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        return []; // Return an empty array or handle error as needed
    }
};

export const createIssue = async (issueData) => {
    try {
        const response = await fetch('http://localhost:8080/api/issue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(issueData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error.message || 'Server error');
        }
        console.log('Issue posted successfully:', data);
        return data;
    } catch (error) {
        console.error('Error posting Issue data:', error);
        throw error; // Optional: rethrow the error for handling in the calling function
    }
};



