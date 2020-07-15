import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import TextArea from "../../subcomponets/TextArea";
import { firestore } from "firebase";
import Swal from "sweetalert2";
// import { storage } from "../../../providers/firebase";
export const ModalLocation = (props) => {
  //States
  const [closeModal, setCloseModal] = useState(false);
  //states

  const [imageLoc, setImageLoc] = useState("");
  const [archivoImagen, setArchivoImagen] = useState("");
  const [progress, setProgress] = useState(0);

  //refs
  const refLatitud = useRef();
  const refLongitud = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refName = useRef();
  const refRegion = useRef();
  const updateLocation = () => {
    //capturar su valor de cada input
    const latitud = refLatitud.current.value;
    const longitud = refLongitud.current.value;
    const description = refDescription.current.value;
    const image = imageLoc == "" ? props.id.image.name : imageLoc;
    const name = refName.current.value;
    const region = refRegion.current.value;

    if (latitud && longitud && description && name && region) {
      const uploadTask = firestore
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
          const storageRef = firestore.ref(`location/${props.id.image.name}`);
          storageRef
            .delete()
            .then(function () {
              console.log("eliminado correctamente");
            })
            .catch(function (error) {
              console.log(error);
            });

            firestore
            .ref(`location/${archivoImagen.name}`)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              const refDB = firestore().collection("location").doc(props.id.id);
              refDB
                .update({
                  coords: new firestore.GeoPoint(
                    parseFloat(latitud),
                    parseFloat(longitud)
                  ),
                  description,
                  image: {
                    name: image,
                    url: fireBaseUrl,
                  },
                  name,
                  region,
                })
                .then(
                  setImageLoc(""),
                  setProgress(0),
                  setCloseModal(props.handleClose),
                  Swal.fire(
                    "Éxito",
                    "Los datos se actualizaron correctamente",
                    "success"
                  )
                );
            });
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacios",
      });
    }
  };
  const handleImage = (e) => {
    setImageLoc(
      refImage.current.files[0] == undefined
        ? imageLoc
        : refImage.current.files[0].name
    );

    if (e.target.files[0]) {
      setArchivoImagen(e.target.files[0]);
    }
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Ubicación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-group">
          <Input
            defaultValue={props.id == null ? "" : props.id.coords.latitude}
            name="Latitud"
            type="text"
            refs={refLatitud}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.coords.longitude}
            name="Longitud"
            type="text"
            refs={refLongitud}
          />
          <TextArea
            defaultValue={props.id == null ? "" : props.id.description}
            name="Descripción"
            type="text"
            refs={refDescription}
          />

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
              {imageLoc == ""
                ? props.id == null
                  ? ""
                  : props.id.image.name
                : imageLoc}
            </label>
            <progress value={progress} max="100" />
          </div>

          <Input
            defaultValue={props.id == null ? "" : props.id.name}
            name="Nombre de Ubicación"
            type="text"
            refs={refName}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.region}
            name="Región"
            type="text"
            refs={refRegion}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={updateLocation}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
