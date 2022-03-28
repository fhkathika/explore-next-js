import React from 'react';
import styles from '../styles/Layout.module.css'
import Nav from './Nav';
const Layout = ({children}) => {
    return (
        <>
        <Nav/>
         <div className={styles.conatiner}>
            <main className={styles.main}>
                <h1>hello</h1>
            {children}
            </main>
        </div>
        </>
       
    );
};

export default Layout;