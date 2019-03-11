import React from 'react'
import { Navbar } from 'react-bootstrap';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Comments System</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Endava</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default AppLayout;
