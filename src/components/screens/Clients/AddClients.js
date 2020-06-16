import React, { useRef } from "react";
import Input from "../../subcomponets/Input";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";

function AddClients() {
  const fb = useFirebaseApp();
  const refCity = useRef();
  const refCode = useRef();
  const refDni = useRef();
  const refDocumentImage = useRef();
  const refEmail = useRef();
  const refName = useRef();
  const refApellido = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
  const refProfileImage = useRef();
  const ButtonAddClients = (e) => {
    e.preventDefault();
    const city = refCity.current.value;
    const code = refCode.current.value;
    const dni = refDni.current.value;
    const documentImage = refDocumentImage.current.value;
    const email = refEmail.current.value;
    const Name = refName.current.value;
    const Apellido = refApellido.current.value;
    const password = refPassword.current.value;
    const phone = refPhone.current.value;
    const profileImage = refProfileImage.current.value;
    if (
      city &&
      code &&
      dni &&
      documentImage &&
      email &&
      Name &&
      Apellido &&
      password &&
      phone &&
      profileImage
    ) {
      fb.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((v) => {
          const id = v.user.uid;
          console.log(id);

          const data = {
            city,
            code,
            dni,
            documentImage,
            email,
            fullName: Name + " " + Apellido,
            password,
            phone,
            profileImage,
          };

          fb.firestore()
            .collection("clients")
            .doc(id)
            .set(data)
            .then(
              (c) => console.log(c),

              Swal.fire("Éxito", "Se agrego correctamente", "success")
            );
        })

        .catch(function (error) {
          // Handle Errors here.
          Swal.fire({
            icon: "error",
            title: "Lo sentimos",
            text: "No se pudo registrar",
          });
          // ...
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacíos",
      });
    }
  };
  return (
    <div className="container mt-4">
      <form className="row">
        <div className="col-6">
          <div className="custom-file">
            <Input
              type="file"
              className="custom-file-input "
              id="customFileLang"
              lang="es"
              refs={refDocumentImage}
            />
            {/* <label className="custom-file-label" for="customFileLang">
              Seleccionar Dni
            </label> */}
          </div>
          <Input name="Ciudad" type="text" refs={refCity} />
        </div>

        <div className="col-6">
          <div className="custom-file">
            <Input
              type="file"
              className="custom-file-input "
              id="customFileLang"
              lang="es"
              refs={refProfileImage}
            />
            {/* <label className="custom-file-label" for="customFileLang">
              Seleccionar Foto
            </label> */}
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
