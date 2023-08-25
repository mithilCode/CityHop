import { Outlet, Navigate } from 'react-router-dom';
const PrivateRouter = () => {
    let auth = sessionStorage.getItem("productLogin");
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}
export default PrivateRouter;