import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VerfyEmail = () => {
  const { token } = useParams(); // grabs token from URL
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(
          `https://solar-desk.onrender.com/api/solar/v1/users/verifyEmail/${token}`
        );
        const data = await res.json();

        if (data.status === "success") {
          setMessage("✅ Email verified successfully!");
          toast.success("Email Verfied Succesfully");
          setTimeout(() => {
            navigate("/login"); // ✅ redirect after 2 seconds
          }, 5000);
        } else {
          setMessage("❌ Verification failed or expired.");
        }
      } catch (err) {
        setMessage("⚠️ Something went wrong.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center", marginTop: "3rem" }}>{message}</h2>
      </div>
    </div>
  );
};

export default VerfyEmail;
