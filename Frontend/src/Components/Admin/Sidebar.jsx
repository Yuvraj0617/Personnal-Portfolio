import { Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <>
    <div className="w-64 max-h-max bg-gray-900 text-white flex flex-col rounded-3xl m-5">
      <h1 className="text-xl font-bold p-4">Admin Panel</h1>
      <nav className="flex-1">
        <ul>
         <Link to="" ><li className="p-3 hover:bg-gray-700">Dashboard</li></Link>
          <Link to="education"><li className="p-3 hover:bg-gray-700">Education</li></Link>
          <Link to="projects"><li className="p-3 hover:bg-gray-700">Projects</li></Link>
          <Link to="/"><li className="p-3 hover:bg-gray-700">Home</li></Link>
        </ul>
      </nav>
    </div>
     </>
  );
}
