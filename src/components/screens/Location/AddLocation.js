import React from "react";
import useAddLocation from "../../../hooks/useAddLocation";
import Input from "../../UIComponents/Input";

function AddLocation() {
  const { 
    imageLoc,
    progress,
    refLatitude,
    refLongitude,
    refDescription,
    refImage,
    refName,
    refRegion,
    handleImage,
    ButtonAddLocation
  } = useAddLocation();

  return (
    <div className="container">
      <form className="form-group">
        <div className="col-6">
          <Input refs={refLatitude} name="Latitud" type="number" />

          <Input refs={refLongitude} name="Longitud" type="number" />

          <Input refs={refDescription} name="Descripción" type="text" />

          <div className="custom-file mt-3 mb-3">
            <input
              type="file"
              className="custom-file-input "
              id="customFileLang"
              lang="es"
              ref={refImage}
              onChange={handleImage}
            />
            <label className="custom-file-label" htmlFor="customFileLang">
              {imageLoc}
            </label>
            <progress value={progress} max="100" />
          </div>
          <Input refs={refName} name="Nombre de Ubicación" type="text" />

          <Input refs={refRegion} name="Región" type="text" />
        </div>
        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddLocation}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
