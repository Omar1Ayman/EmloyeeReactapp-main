import { useEffect, useState } from "react";
import "./home.css";
import { getEmployees } from "../services/apiEmployee";

const Home = () => {
  const [emps, setEmps] = useState([]);
  useEffect(() => {
    const fetchEmps = async () => {
      const emps = await getEmployees();
      setEmps(emps);
    };
    fetchEmps();
  }, []);
  return (
    <div className="home">
      <div className="container">
        <h1 className="title">Home</h1>
        <div className="wrapper">
          <div className="card">
            <i class="icon fa-solid fa-users"></i>
            <h3>{emps.length}</h3>
            <h3>Employess</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
