import axios from "axios";

const backendUrl = "http://localhost:5000";
axios.defaults.baseURL = backendUrl;

// Sign up a new technician
export async function signUp(username, password) {
  try {
    const response = await axios.post("/api/technician/signup", {
      username,
      password,
    });

    if (response.data.success) {
      let token = response.headers["authorization"];
      if (token?.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }
      localStorage.setItem("userAuth", token);
      return true;
    }
    throw new Error(response.data.error || "Signup failed");
  } catch (error) {
    console.error("SignUp Error:", error.message);
  }
}

// Login
export async function login(username, password) {
  try {
    const response = await axios.post("/api/technician/login", {
      username,
      password,
    });

    if (response.data.success) {
      let token = response.headers["authorization"];
      if (token?.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }
      localStorage.setItem("userAuth", token);
      return true;
    }
    throw new Error(response.data.error || "Login failed");
  } catch (error) {
    console.error("Login Error:", error.message);
  }
}

// Get all reports for logged-in user
export async function myReports() {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();

    const { data } = await axios.get("/api/report/myReports", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.reportDetails;
    throw new Error(data.error || "Failed to fetch reports");
  } catch (error) {
    console.error("myReports Error:", error.message);
  }
}

// Get a single report by ID
export async function singleReport(id) {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();

    const { data } = await axios.get(`/api/report/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.report;
    throw new Error(data.error || "Failed to fetch report");
  } catch (error) {
    console.error("singleReport Error:", error.message);
  }
}

// Create a new report with a photo
export async function createReport(id, photo) {
  try {
    if (!id || !photo) throw new Error("id and photo must be provided");

    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("id", id);

    const { data } = await axios.put("/api/report/create", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.success) return { message: data.message, report: data.report };
    throw new Error(data.error || "Failed to create report");
  } catch (error) {
    console.error("createReport Error:", error.message);
  }
}

// Check authentication status
export async function checkAuth() {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) throw new Error("No auth token found");

    const { data } = await axios.get("/api/report/checkAuth", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.userData;
    throw new Error(data.error || "Authentication check failed");
  } catch (error) {
    console.error("checkAuth Error:", error.message);
  }
}
