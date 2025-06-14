import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashboardMenu } from "./components/DashboardMenu";
import { Dashboard } from "./Pages/Dashboard";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex flex-col md:flex-row">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`fixed md:static inset-y-0 left-0 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition duration-200 ease-in-out z-30 w-64 min-h-screen`}
          >
            <DashboardMenu />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 overflow-hidden max-w-full">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/users" element={<div>Users Content</div>} />
              <Route path="/campaign" element={<div>Campaign Content</div>} />
              <Route path="/agency" element={<div>Agency Content</div>} />
              <Route path="/quotation" element={<div>Quotation Content</div>} />
              <Route path="/payment" element={<div>Payment Content</div>} />
              <Route
                path="/configurations"
                element={<div>Configurations Content</div>}
              />
              <Route path="/reports" element={<div>Reports Content</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
