// lib/axiosConfig.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sandbox.belvo.com/api",
  headers: {
    accept: "application/json",
    authorization:
      "Basic YWRmMjY5MjYtYTljNS00NTU5LWE1NzktNDY0MmI3NjYxZGZhOkhubERzbVdVZldfQU5JSHVsWldwODJubmJAN1hvTVM1QVVjY0NUYlFsT1AtS0ZuNUtuNGxibSpVWkJ0VGJFcGg=",
  },
});

export default axiosInstance;
