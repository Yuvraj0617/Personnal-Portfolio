import Sidebar from "../Components/Admin/Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex md:flex-row flex-col">   
      <div className="mt-20">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
}

export default Admin;
