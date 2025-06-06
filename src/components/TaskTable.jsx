import React from "react";

const tasks = [
  {
    flag: "bg-blue-500",
    requestId: "HAVA2020001",
    projectName: "mosque app backend",
    requester: "Tahoor Ahmed",
    host: "4/5",
    status: "VA : Completed",
    statusDate: "01 Jun 2025",
    created: "01 Jun 2055",
    update: "01 Jun 2025",
    bypass: "No",
  },
  {
    flag: "bg-amber-500",
    requestId: "HAVA2020002",
    projectName: "mosque app front end",
    requester: "Wajid shaikh",
    host: "4/5",
    status: "HA : Completed",
    statusDate: "02 Jun 2025",
    created: "02 Jun 2025",
    update: "02 Jun 2025",
    bypass: "No",
  },
];

export const TaskTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 font-sans">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">New Task</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Flag
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Request ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Requester
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Host
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Status Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Created
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Update
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Bypass
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`w-4 h-4 rounded-sm ${task.flag}`}></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.requestId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.projectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.requester}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.host}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.statusDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.created}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.update}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base lg:text-lg text-gray-800 font-normal">
                  {task.bypass}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-700">
                  <button className="text-gray-500 hover:text-gray-900">
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
