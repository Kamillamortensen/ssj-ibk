import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    const styles = {
        h1: {
          backgroundColor: "#f1f1f1",
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
    };

    return <div style={styles}>
        <Header></Header>
         <Link to="/contact">Blogs</Link>
         <h1 style={styles.h1}>Home</h1>
        </div>;
  };
  
  export default Home;