import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashboardMenu } from "./components/DashboardMenu";
import { Dashboard } from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="flex">
          <aside className="w-64 min-h-screen">
            <DashboardMenu />
          </aside>
          <main className="flex-1 p-6 overflow-hidden max-w-full">
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
