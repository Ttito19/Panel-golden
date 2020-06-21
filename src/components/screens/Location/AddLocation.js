import React, { useState, useRef } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
import { storage } from "../../../providers/firebase";
function AddLocation() {
  //firebase
  const { firestore } = useFirebaseApp();

  //states
  const [imageLoc, setImageLoc] = useState("Seleccionar imagen del lugar");
  const [archivoImagen, setArchivoImagen] = useState("");
  const [UrlImagen, setUrlImagen] = useState("");
  const [progress, setProgress] = useState(0);

  //Ref
  const refLatitude = useRef();
  const refLongitude = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refName = useRef();
  const refRegion = useRef();
  const handleImage = (e) => {
    setImageLoc(
      refImage.current.files[0] == undefined
        ? imageLoc
        : refImage.current.files[0].name
    );

    // console.log(refImage.current.files[0].name);

    if (e.target.files[0]) {
      setArchivoImagen(e.target.files[0]);
    }
  };

  const ButtonAddLocation = (e) => {
    e.preventDefault();

    const latitude = refLatitude.current.value;
    const longitude = refLongitude.current.value;
    const description = refDescription.current.value;
    const image = refImage.current.value;
    const name = refName.current.value;
    const region = refRegion.current.value;

    if (latitude && longitude && description && image && name && region) {
      const uploadTask = storage
        .ref(`location/${archivoImagen.name}`)
        .put(archivoImagen);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          const progress = Math.round(
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (err) => {
          // console.error(err);
        },
        () => {
          storage
            .ref("location")
            .child(archivoImagen.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setUrlImagen(fireBaseUrl);

              const fb = firestore();
              fb.collection("location")
                .add({
                  coords: new firestore.GeoPoint(
                    parseFloat(latitude),
                    parseFloat(longitude)
                  ),
                  description,
                  image: {
                    name: archivoImagen.name,
                    url: fireBaseUrl,
                  },
                  name,
                  region,
                })
                .then(() =>
                  Swal.fire("Éxito", "Se agrego correctamente", "success")
                );
            });
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacíos",
      });
    }
  };

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
