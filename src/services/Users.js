
export const getUsers = async () => {
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

export const getIssues = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/getIssue', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch issues');
        }
        const data = await response.json();
        console.log("Fetched issues:", data);
        return data;
    } catch (error) {
        console.error("Error fetching issues:", error.message);
        return []; // Return an empty array or handle error as needed
    }
};

export const createIssue = async (issueData) => {
    console.log("issueData.....", issueData)
    try {
        const response = await fetch('http://localhost:8080/api/issue', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
            body: issueData,
        });

        const data = await response.json();

        if (!response.ok) {
            // If response is not okay, throw an error with appropriate message
            throw new Error(data.error?.message || 'Server error');
        }

        console.log('Issue posted successfully:', data);
        return data; // Return the data if everything is successful
    } catch (error) {
        console.error('Error posting Issue data:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
};