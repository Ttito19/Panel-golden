import { useState, useRef } from "react";
import { firestore, storage } from "firebase";
import Swal from "sweetalert2";
const useAddClients = () => {
  ///States
  const [documentImage, setDocumentImage] = useState("Seleccionar Dni");
  const [profileImage, setProfileImage] = useState(" Seleccionar Foto");
  const [archivoImagenDocument, setArchivoImagenDocument] = useState("");
  const [archivoImagenProfile, setArchivoImagenProfile] = useState("");
  const [UrlImagenDocument, setUrlImagenDocument] = useState("");
  const [UrlImagenProfile, setUrlImagenProfile] = useState("");
  const [progress, setProgress] = useState(0);
  ///Refs
  const refCity = useRef();
  const refCode = useRef();
  const refDni = useRef();
  const refDocumentImage = useRef();
  const refEmail = useRef();
  const refName = useRef();
  const refApellido = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
  const refType = useRef();
  const refCompany = useRef();
  const refProfileImage = useRef();

  const getParamsClients = () => ({
    city: refCity.current.value,
    code: refCode.current.value,
    dni: refDni.current.value,
    documentImage: refDocumentImage.current.value,
    email: refEmail.current.value,
    fullName: refName.current.value + " " + refApellido.current.value,
    password: refPassword.current.value,
    phone: refPhone.current.value,
    type: refType.current.value,
    company: refCompany.current.value,
    profileImage: refProfileImage.current.value,
  });

  //calculate upload image
  const uploadImage = (snapShot) => {
    const progress = Math.round(
      (snapShot.bytesTransferred / snapShot.totalBytes) * 100
    );
    setProgress(progress);
  };
  ///function get name image document
  const handleDocumentImage = (e) => {
    setDocumentImage(
      refDocumentImage.current.files[0] == undefined
        ? documentImage
        : refDocumentImage.current.files[0].name
    );
    if (e.target.files[0]) {
      setArchivoImagenDocument(e.target.files[0]);
    }
  };
  ///function get name image profile
  const handleProfileImage = (e) => {
    setProfileImage(
      refProfileImage.current.files[0] == undefined
        ? profileImage
        : refProfileImage.current.files[0].name
    );
    if (e.target.files[0]) {
      setArchivoImagenProfile(e.target.files[0]);
    }
  };
  const AddedImage = async () => {
    const {
      city,
      code,
      dni,
      email,
      fullName,
      password,
      phone,
      type,
      company,
    } = getParamsClients();

    const refClients = storage().ref("clients");

    try {
      const fireBaseUrlDocument = await refClients
        .child(archivoImagenDocument.name)
        .getDownloadURL();
      setUrlImagenDocument(fireBaseUrlDocument);

      const fireBaseUrlProfile = await refClients
        .child(archivoImagenProfile.name)
        .getDownloadURL();
      setUrlImagenProfile(fireBaseUrlProfile);
      let data = {
        city,
        code,
        dni,
        documentImage: {
          name: archivoImagenDocument.name,
          url: fireBaseUrlDocument,
        },
        email,
        fullName,
        password,
        phone,
        type,
        company,
        profileImage: {
          name: archivoImagenProfile.name,
          url: fireBaseUrlProfile,
        },
      };

      await firestore().collection("clients").add(data);
      Swal.fire("Éxito", "Se agrego correctamente", "success");
    } catch (e) {
      console.log(e);
    }
  };

  ///método add clients
  const ButtonAddClients = (e) => {
    e.preventDefault();
    const {
      city,
      code,
      dni,
      documentImage,
      email,
      fullName,
      password,
      phone,
      type,
      profileImage,
    } = getParamsClients();
    if (
      (city && code && dni && documentImage && email && fullName,
      password && phone && type  && profileImage)
    ) {
      const uploadTaskDocument = storage()
        .ref(`clients/${archivoImagenDocument.name}`)
        .put(archivoImagenDocument);
      const uploadTaskProfile = storage()
        .ref(`clients/${archivoImagenProfile.name}`)
        .put(archivoImagenProfile);
      uploadTaskDocument.on(
        "state_changed",
        uploadImage,
        console.log,
        AddedImage
      );
      uploadTaskProfile.on("state_changed", uploadImage, console.log);
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacíos",
      });
    }
  };
  return {
    documentImage,
    profileImage,
    archivoImagenDocument,
    archivoImagenProfile,
    UrlImagenDocument,
    UrlImagenProfile,
    progress,
    refCity,
    refCode,
    refDni,
    refDocumentImage,
    refEmail,
    refName,
    refApellido,
    refPassword,
    refPhone,
    refType,
    refCompany,
    refProfileImage,
    handleDocumentImage,
    handleProfileImage,
    ButtonAddClients,
  };
};
export default useAddClients;
