import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from '../Navbar';
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";
const Layout = ({children}) => {

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
        console.log(url);
        NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouteChange);

        router.events.on("routeChangeComplete", () => NProgress.done());

        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
        router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

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
