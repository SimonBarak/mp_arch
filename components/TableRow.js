import React from "react";

const TableRow = ({ title, value }) => {
  if (!value) {
    return null;
  }

  return (
    <tr className="border-0 border-b border-gray-400">
      <td className="w-1/3 py-3  text-gray-500 align-top">{title}</td>
      <th className="py-3 text-left font-normal">{value}</th>
    </tr>
  );
};

export default TableRow;
