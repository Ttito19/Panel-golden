import React, { useContext } from "react";
import { CompanyContext } from "../../../context/companyContext";

const CompanySelect = ({ refs }) => {
  const listCompany = useContext(CompanyContext);
  console.log(listCompany);
  return (
    <>
      <label>Empresas</label>

      <select className="custom-select" ref={refs}>
        {listCompany.company.map((v, i) => (
          <option key={i} value={v.name}>
            {v.name}
          </option>
        ))}
      </select>
    </>
  );
};
export default CompanySelect;
