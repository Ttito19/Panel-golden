import React, { useState } from "react";
// import { useFirebaseApp } from "reactfire";
// import "firebase/storage";
import { storage } from "../../../providers/firebase";

function Prueba() {
  //   const allInputs = { imgUrl: "" };
  const [archivoImagen, setArchivoImagen] = useState("");
  const [UrlImagen, setUrlImagen] = useState("");
  const [progress, setProgress] = useState(0);
  //  console.log(archivoImagen);
  //   console.log(UrlImagen.imgUrl);
  const onChangeuplodaImage = (e) => {
    // console.log(storage);

    // if (archivoImagen === "") {
    //   // saber el tipo de imagen
    //   console.error(`No es una imagen, es un archivo ${typeof archivoImagen}`);
    // }
    if (e.target.files[0]) {
      setArchivoImagen(e.target.files[0]);
    }
    // storage.ref(`images/${archivoImagen.name}`).put(archivoImagen);
  };
  const btnAdd = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`images/${archivoImagen.name}`)
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
          .ref("images")
          .child(archivoImagen.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            console.log(fireBaseUrl);
            setUrlImagen(fireBaseUrl);
            // setUrlImagen((prevObject) => ({
            //   ...prevObject,
            //   imgUrl: fireBaseUrl,
            // }));
          });
      }
    );
  };

  const btnDelete = (e) => {
    e.preventDefault();
    var storageRef = storage.ref();
    var dlt = storageRef.child("images/asa.jpg");
    dlt
      .delete()
      .then(function () {
        console.log("eliminado correctamente");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="form-group">
      <div className="col-6">
        <label> Selecciona Imagen </label>
        <input
          className="form-control"
          type="file"
          onChange={onChangeuplodaImage}
        />
        <progress value={progress} max="100" />
        <p>{UrlImagen}</p>
      </div>
      <div className="p-2">
        <button className="btn btn-primary" onClick={btnAdd}>
          Agregar
        </button>
        <button className="btn btn-danger" onClick={btnDelete}>
          Eliminar
        </button>
      </div>
      <div className="p-2">
        <img
          src={
            UrlImagen ||
            "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          }
          width="100"
        />
      </div>
    </form>
  );
}

export default Prueba;
