import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
      navigate("/create");
  };

  return (
    <div className="part">
      <h2>Login</h2>
      <input placeholder="Username" />
      <button onClick={login}>Login</button>
    </div>
  );
}
