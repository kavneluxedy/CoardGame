import React, {
  Dispatch,
  SetStateAction,
  ReactNode,
  cloneElement,
  isValidElement,
  useContext,
} from "react";
import AppContext from "../utils/ContextProvider";

interface IModal {
  title?: string;
  children: ReactNode;
}

function addPropsToReactElement(element: ReactNode, props: any) {
  if (isValidElement(element)) {
    return cloneElement(element, props);
  }
  return element;
}

function addPropsToChildren(children: ReactNode, props: any) {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, props);
  }
  return children.map((childElement) =>
    addPropsToReactElement(childElement, props)
  );
}

const Modal = ({ title, children }: IModal): JSX.Element => {
  const AppCtx = useContext(AppContext);
	if (AppCtx === null) { return<></>; }
	const {modalVisible, setModalVisibility } = {...AppCtx};
  const closeModal = (): void => {
    setModalVisibility(false);
  };

  return (
    <>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="go-wrapper">
              <div className="close-wrapper">
                <button className="close" onClick={closeModal}>
                  &times;
                </button>
                <h1 className="modal-title">{title}</h1>
              </div>
              <div>{addPropsToChildren(children, { closeModal })}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
