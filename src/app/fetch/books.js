const baseURL = "http://localhost:3000/api";

export async function getAllBooks(id) {
    try {
        const response = await fetch(`${baseURL}/books/`);
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error({ message: err });
    }
};