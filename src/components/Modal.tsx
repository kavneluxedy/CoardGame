import React, { Dispatch, SetStateAction, PropsWithChildren } from 'react'

interface IModal {
    title?: string,
    children: any,
    modalVisible: boolean
    setModalVisibility: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ modalVisible, title, children, setModalVisibility }: IModal): JSX.Element => {

    return (
        <>
            {modalVisible &&
                <div className="modal">
                    <div className="modal-content">

                        <div id="go-wrapper">
                            <div className="close-wrapper">
                                <button className="close" onClick={() => setModalVisibility(false)}>&times;</button>
                            </div>
                            {children}
                        </div>

                    </div>
                </div>}
        </>
    )
}

export default Modal