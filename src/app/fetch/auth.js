const baseURL = "http://localhost:3000/api";

export async function register(params) {
    try {
        const response = await fetch(`${baseURL}/register`, {
            method: 'POST',
            body: JSON.stringify(params),
        });

        return response;
    } catch (err) {
        throw new Error({ message: err.response.message });
    }
};

export async function login(params) {
    try {
        const response = await fetch(`${baseURL}/login`, {
            method: 'POST',
            body: JSON.stringify(params),
        });

        return response;
    } catch (err) {
        throw new Error({ message: err.response.message });
    }
};