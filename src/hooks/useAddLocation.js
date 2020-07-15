import { useState, useRef } from "react";
import { firestore , storage } from "firebase";
import Swal from "sweetalert2";

const useAddLocation = () => {
  //states
  const [ imageLoc , setImageLoc ] = useState("Seleccionar imagen del lugar");
  const [ archivoImagen , setArchivoImagen ] = useState("");
  const [ UrlImagen , setUrlImagen ] = useState("");
  const [ progress , setProgress ] = useState(0);

  //Ref
  const refLatitude = useRef();
  const refLongitude = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refName = useRef();
  const refRegion = useRef();

  /*ADD LOCATION*/
  const getParams = () => ({
    latitude : refLatitude.current.value,
    longitude : refLongitude.current.value,
    description : refDescription.current.value,
    image : refImage.current.value,
    name : refName.current.value,
    region : refRegion.current.value
  });

  const uploadImage = (snapShot) => {
    const progress = Math.round((snapShot.bytesTransferred / snapShot.totalBytes) * 100);
    setProgress(progress);
  }

  const AddedImage = async () => {
    const { latitude , description, longitude , name , region } = getParams();

    const refLocation = storage().ref("location");

    try {
      const fireBaseUrl = await refLocation.child(archivoImagen.name).getDownloadURL();
      setUrlImagen(fireBaseUrl);

      let data = {
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
      }

      await firestore().collection("location").add(data);
      Swal.fire("Éxito", "Se agrego correctamente", "success");

    } catch(e) {
      console.log(e);
    }
  }

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

    const { latitude , description, image , longitude , name , region } = getParams();

    if (latitude && longitude && description && image && name && region) {
      const uploadTask = storage().ref(`location/${archivoImagen.name}`).put(archivoImagen);
      uploadTask.on("state_changed", uploadImage , console.log, AddedImage);
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacíos",
      });
    }
  };

  return {
    imageLoc,
    archivoImagen, 
    UrlImagen,
    progress,
    refLatitude,
    refLongitude,
    refDescription,
    refImage,
    refName,
    refRegion,
    /*Functions*/
    handleImage,
    ButtonAddLocation
  }
}

export default useAddLocation;