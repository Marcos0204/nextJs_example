import React from 'react';
import Navbar from '../Navbar';


const Layout = ({children}) => {
    return (
        <>  
            
            <Navbar/>
            <main className='container'>
                {children}
            </main>
            <footer className="bg-dark text-light text-center" style={{marginTop:'2rem'}}>
                <div className="container p-4">
                    <h1>&copy; Ryan Ray Portfolio</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Layout
