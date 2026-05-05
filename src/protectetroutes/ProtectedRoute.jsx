import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Store/userAuth";


function ProtectedRoute({ allowedRoles }) {
 const{user, isAuthenticated} = useAuthStore();
 const role = user?.auth_role;

 if(!isAuthenticated){
  return <Navigate to={"/login-page"} replace />
 }
  if (!allowedRoles.includes(role)) {
   alert("Access Denied : You do not have permission to view this page.")
   if(role ===" admin") return <Navigate to={"/admin-dashboard"} replace/>
   if(role ===" company") return <Navigate to={"/Dashboard-Company"} replace/>
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
export default ProtectedRoute;