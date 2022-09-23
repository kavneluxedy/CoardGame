import React, { Dispatch, SetStateAction, PropsWithChildren, ReactNode, ReactPropTypes, cloneElement, isValidElement, FunctionComponent, FC, ElementType } from 'react'

type t = {
    closeModal: VoidFunction
}
interface IModal {
    title?: string,
    children: any,
    modalVisible: boolean
    setModalVisibility: Dispatch<SetStateAction<boolean>>
}

function addPropsToReactElement(element:ReactNode, props:any) {
    if (isValidElement(element)) {
        return cloneElement(element, props)
    }
    return element
}

function addPropsToChildren(children:ReactNode, props:any) {
    if (!Array.isArray(children)) {
        return addPropsToReactElement(children, props)
    }
    return children.map(childElement =>
        addPropsToReactElement(childElement, props)
        )
    }
    
    const Modal = ({ modalVisible, title, children, setModalVisibility }: IModal): JSX.Element => {
        
    // TODO correct type of closeModal
    const closeModal = ():any => {
        setModalVisibility(false);
    }

    return (
        <>
            {modalVisible &&
                <div className="modal">
                    <div className="modal-content">

                        <div id="go-wrapper">
                            <div className="close-wrapper">
                                <button className="close" onClick={closeModal}>&times;</button>
                            </div>
                            <div>
                                {addPropsToChildren(children, { closeModal })}
                            </div>
                        </div>

                    </div>
                </div>}
        </>
    )
}

export default Modal
