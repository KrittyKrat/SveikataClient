export default function authHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  }

  localStorage.removeItem("user");
  return {};
}