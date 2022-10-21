import React,{useContext} from "react";
import { IAppContext, AppContext } from "../../App";
import  Modal  from "../Modal";

const Register = () => {
  const { modalVisible, setModalVisibility, modalName, setModalName } =
    useContext<IAppContext>(AppContext);

  return (
    <>
      <Modal
        title={"Personnaliser votre partie"}
        modalVisible={modalVisible}
        setModalVisibility={setModalVisibility}
      >
        <p>REGISTER</p>
      </Modal>
    </>
  );
}

export default Register;