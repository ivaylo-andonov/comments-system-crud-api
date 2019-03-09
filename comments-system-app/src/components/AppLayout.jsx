import React from 'react'
import { Navbar } from 'react-bootstrap';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">Comments System</Navbar.Brand>
            </Navbar>;
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default AppLayout;
