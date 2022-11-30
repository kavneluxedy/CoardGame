import React, { MouseEvent, ReactNode, useRef } from 'react'

const useModal = () => {
    const modal = useRef<HTMLDivElement>(null)

    const handleVisibility = () => {
        // let modal = document.querySelector<HTMLDivElement>('#' + name);
        // if (!modal) return
        if (!modal.current) return

        switch (modal.current.style.display) {
            case 'none':
                modal.current.style.display = 'block';
                break;
            case 'block':
                modal.current.style.display = 'none';
                break;
            default:
                modal.current.style.display = 'none';
        }
    }

    window.onclick = function (event: MouseEvent) {
        if (event.target === modal.current!) {
            handleVisibility();
        }
    }

    const Modal = ({ children, title }: { children: ReactNode, title: string }) => {
        return (
            <div ref={modal} className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <div className="modal-wrapper">

                        <div className="modal-closer">

                            <div className="closer"></div>

                            <div className="closer">
                                <h1>{title}</h1>
                            </div>

                            <div className="closer close-button">
                                <button className="closer close" onClick={() => handleVisibility()}>
                                    &times;
                                </button>
                            </div>

                        </div>

                        <div className="modal-children">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return { Modal, handleVisibility }
}

export default useModal