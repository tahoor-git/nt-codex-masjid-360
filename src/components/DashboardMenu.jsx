import { Link, useLocation } from "react-router-dom";

export const DashboardMenu = () => {
  const location = useLocation();

  return (
    <div className="h-full p-4 shadow-md bg-gray-800 font-sans">
      <ul className="space-y-2">
        <li>
          <Link
            to="/dashboard"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/dashboard"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/users"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/campaign"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/campaign"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Campaign
          </Link>
        </li>
        <li>
          <Link
            to="/agency"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/agency"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Agency
          </Link>
        </li>
        <li>
          <Link
            to="/quotation"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/quotation"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Quotation
          </Link>
        </li>
        <li>
          <Link
            to="/payment"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/payment"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Payment
          </Link>
        </li>
        <li>
          <Link
            to="/configurations"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/configurations"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Configurations
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className={`block px-4 py-2 rounded-md text-sm md:text-base ${
              location.pathname === "/reports"
                ? "bg-amber-500 text-gray-700 font-bold"
                : "text-gray-300 hover:bg-gray-700 font-medium"
            }`}
          >
            Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};
