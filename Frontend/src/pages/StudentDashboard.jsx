import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentDashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/student/dashboard", { withCredentials: true })
            .then(res => setUser(res.data.user)) // ✅ Set user correctly
            .catch(() => navigate("/")); // ✅ Redirect if unauthorized
    }, [navigate]);

    if (!user) return <h2 className="text-center mt-10 text-red-600">Loading...</h2>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Welcome, {user.name} (Student)!</h1> {/* ✅ Fixed */}
            <button onClick={() => axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
                .then(() => navigate("/"))
                .catch(err => console.error("Logout Failed", err))}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
};

export default StudentDashboard;
