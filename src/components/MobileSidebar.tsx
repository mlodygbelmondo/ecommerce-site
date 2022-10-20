import React, { useState, useEffect } from 'react'

import closeICO from '../assets/images/icon-close.svg'

interface MobileSidebarProps {
    isSidebarOpen: boolean
    setIsSidebarOpen: Function
}

const MobileSidebar = ({
    isSidebarOpen,
    setIsSidebarOpen,
}: MobileSidebarProps) => {
    // const [isSidebarClosed, setIsSidebarClosed] = useState(false)
    // const [doOpenSidebar, setDoOpenSidebar] = useState(true)
    // useEffect(() => {
    //     isSidebarOpen
    //         ? () => {
    //               setTimeout(() => {
    //                   setIsSidebarClosed(false)
    //               }, 1)
    //           }
    //         : setTimeout(() => {
    //               setIsSidebarClosed(true)
    //           }, 500)
    // }, [isSidebarOpen])

    return (
        <div
            className={`mobile-sidebar ${isSidebarOpen ? 'active' : ''}`}
            // style={{ display: isSidebarClosed ? 'none' : 'block' }}
        >
            <div
                className={`black-container ${isSidebarOpen ? 'active' : ''}`}
                onClick={() => {
                    setIsSidebarOpen(false)
                }}
            ></div>
            <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className='x-container'>
                    <img
                        src={closeICO}
                        alt='close icon'
                        onClick={() => {
                            setIsSidebarOpen(false)
                        }}
                    />
                </div>
                <div className='links-list'>
                    <p>Collections</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar
