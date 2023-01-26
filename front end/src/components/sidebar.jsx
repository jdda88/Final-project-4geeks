import React from 'react'

export const Sidebar = ({ Show, Hide, children }) => {

    const handleClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${Show && 'modal-open'}`} onClick={Hide}>
            <div className="modal__dialog" onClick={handleClick}>
                <h1>Sidebar</h1> 
                <button onClick={Hide}>
                    Close
                </button>

                {children}

            </div>
        </div>
    )
}
