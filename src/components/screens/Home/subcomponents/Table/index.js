import React, { FunctionComponent } from "react";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment";
import "./index.scss";

const Table = () => {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th className="item-thead">Hora de Ingreso</th>
          <th className="item-thead">Usuario</th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr className="item-column">
          <td className="item-tbody date">{moment().format("LLL")}</td>
          <td className="item-tbody">
            <span className="icon">
              <FaUserAlt />
            </span>
            <span>David Chavez</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
