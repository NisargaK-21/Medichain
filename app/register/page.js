import { useState, useContext } from "react";
import Layout from "../layout";
import { AuthContext } from "../context/AuthContext";
import { registerUser } from "../firebase/auth";
import Button from "../components/Button";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await registerUser(email, password);
      setUser(userCredential.user);
      alert("Registration successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form className="max-w-md" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <Button type="submit">Register</Button>
      </form>
    </Layout>
  );
};

export default RegisterPage;
