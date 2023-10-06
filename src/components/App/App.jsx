import React from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import styles from '../../styles/App.module.css';
import Novelty from "../Novelty/Novelty";
import UserForm  from "../User/UserForm";

const App = () => {
    return(
        <div className={styles.App}>
            <Header />
            <UserForm/>
            <div className={styles.container}>
                <Sidebar />
                <Novelty />
            </div>
            <div className={styles.container}>
                <AppRoutes />
            </div>
            <Footer />
          
        </div>
    )
}
export default App;  