import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTBiY2UzNTQxZGI1ZWI1ZTkwNiIsImFkbWluIjp0cnVlLCJpYXQiOjE2Mzg4NTczNzAsImV4cCI6ODY0MDE2Mzg4NTczNzB9.en6GPdAz4Muzi6_4mtLy8NxDh3nrdiHzVOp25OoH4mw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});