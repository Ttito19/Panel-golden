import React from "react";
import Input from "../../UIComponents/Input";
import Select from "../../UIComponents/selectType";
import useAddClients from "../../../hooks/useAddClients";
import CompanySelect from "../../UIComponents/select-company";
function AddClients() {
  const {
    refCity,
    refCode,
    refDni,
    documentImage,
    profileImage,
    refEmail,
    refName,
    refApellido,
    refPassword,
    refPhone,
    refType,
    refCompany,
    refDocumentImage,
    refProfileImage,
    handleDocumentImage,
    handleProfileImage,
    ButtonAddClients,
  } = useAddClients();

  return (
    <div className="container mt-4">
      <form className="row">
        <div className="col-6">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input "
              id="customFileLang"
              lang="es"
              ref={refDocumentImage}
              onChange={handleDocumentImage}
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              {documentImage}
            </label>
          </div>
          <Input name="Ciudad" type="text" refs={refCity} />
        </div>

        <div className="col-6">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input "
              id="customFileLang"
              lang="es"
              ref={refProfileImage}
              onChange={handleProfileImage}
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              {profileImage}
            </label>
          </div>
          <Input name="Código" type="text" refs={refCode} />
        </div>
        <div className="col-6">
          <Input name="Nombre" type="text" refs={refName} />
          <Input name="Apellido" type="text" refs={refApellido} />
        </div>
        <div className="col-6">
          <Input name="Email" type="text" refs={refEmail} />
          <Input name="Dni" type="text" refs={refDni} />
        </div>
        <div className="col-6">
          <Input name="Celular" type="number" refs={refPhone} />
          <Input name="Password" type="password" refs={refPassword} />
        </div>
        <div className="col-6">
          <Select name="Tipo" refs={refType} />
          <CompanySelect refs={refCompany} />
        </div>

        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddClients}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddClients;
