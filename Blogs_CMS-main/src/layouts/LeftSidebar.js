// @flow
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import logorikkei from '../assets/images/Logo-Rikkei.9319377e.png';
import './leftsidebar.scss';

import { getMenuItems } from '../helpers/menu';

// components
import AppMenu from './Menu';

import logoSm from '../assets/images/logo_sm.png';
import logoDark from '../assets/images/logo-dark.png';
import logoDarkSm from '../assets/images/logo_sm_dark.png';
import logo from '../assets/images/logo.png';
import profileImg from '../assets/images/users/avatar-1.jpg';

import leftsidebarRoutes from '../routes/index.js';

// type SideBarContentProps = {
//     hideUserProfile: boolean,
// };

/* sidebar content */
// const SideBarContent = ({ hideUserProfile }: SideBarContentProps) => {
//     return (
//         <>
//             {!hideUserProfile && (
//                 <div className="leftbar-user">
//                     <Link to="/">
//                         <img src={profileImg} alt="" height="42" className="rounded-circle shadow-sm" />
//                         <span className="leftbar-user-name">Administrator</span>
//                     </Link>
//                 </div>
//             )}

//             <AppMenu menuItems={getMenuItems()} />
//             <div className="clearfix" />
//         </>
//     );
// };

// type LeftSidebarProps = {
//     hideLogo: boolean,
//     hideUserProfile: boolean,
//     isLight: boolean,
//     isCondensed: boolean,
// };

// const
function LeftSidebar() {
    //  =
    // { isCondensed, isLight, hideLogo, hideUserProfile }: LeftSidebarProps
    // : React$Element<any>
    //  =>
    // const menuNodeRef: any = useRef(null);

    /**
     * Handle the click anywhere in doc
     */
    // const handleOtherClick = (e: any) => {
    //     if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target)) return;
    //     // else hide the menubar
    //     if (document.body) {
    //         document.body.classList.remove('sidebar-enable');
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleOtherClick, false);

    //     return () => {
    //         document.removeEventListener('mousedown', handleOtherClick, false);
    //     };
    // }, []);

    return (
        <React.Fragment>
            {/* <div className="leftside-menu" ref={menuNodeRef}>
                {!hideLogo && (
                    <React.Fragment>
                        <Link to="/" className="logo text-center logo-light">
                            <span className="logo-lg"> */}
            {/* <img src={isLight ? logoDark : logo} alt="logo" height="16" />  comment2lan */}
            {/* <h1 style={{ color: 'white' }}>ME</h1> */}
            {/* </span> */}
            {/* <span className="logo-sm"> */}
            {/* <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" /> comment2lan */}
            {/* <h3 style={{ color: 'white' }}>ME</h3> */}
            {/* </span> */}
            {/* </Link> */}

            {/* <Link to="/" className="logo text-center logo-dark">
                            <span className="logo-lg">
                                <img src={isLight ? logoDark : logo} alt="logo" height="16" />
                            </span>
                            <span className="logo-sm">
                                <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
                            </span>
                        </Link>
                    </React.Fragment> */}
            {/* )} */}

            {/* {!isCondensed && (
                    <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
                        <SideBarContent
                            menuClickHandler={() => {}}
                            isLight={isLight}
                            hideUserProfile={hideUserProfile}
                        />
                    </SimpleBar>
                )}
                {isCondensed && <SideBarContent isLight={isLight} hideUserProfile={hideUserProfile} />}
            </div> */}

            <>
                <div className="side-bar">
                    <div className="img__rikkei">
                        <img src={logorikkei} />
                    </div>
                    <div className="side-barbody">
                        <ul className="list__mission">
                            {leftsidebarRoutes.map((cf) => (
                                <Link to={cf.path}>
                                    <li>
                                        <ion-icon name={cf.icon}></ion-icon>
                                        <span>{cf.name}</span>
                                    </li>
                                </Link>
                            ))}
                            <li data-bs-toggle="dropdown" aria-expanded="false">
                                <ion-icon name="bulb-outline"></ion-icon>
                                <span className="dropdown-toggle">Quản lí học liệu</span>
                            </li>

                            <ul className="dropdown-menu action">
                                <Link to={'/file'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="folder-outline"></ion-icon>
                                            <span>Cây thư mục</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/schedulemanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="bag-outline"></ion-icon>
                                            <span>Quản lí lộ trình học</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/modulemanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="calculator-outline"></ion-icon>
                                            <span>Quản lí mô đun</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/coursemanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="document-text-outline"></ion-icon>
                                            <span>Quản lí khóa học</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/lessonmanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="document-outline"></ion-icon>
                                            <span>Quản lí bài học</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/timemanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="alarm-outline"></ion-icon>
                                            <span>Quản lí khung giờ</span>
                                        </a>
                                    </li>
                                </Link>
                                <Link to={'/filemanagement'}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <ion-icon name="file-tray-full-outline"></ion-icon>
                                            <span>Quản lí tệp</span>
                                        </a>
                                    </li>
                                </Link>
                            </ul>
                        </ul>
                    </div>
                </div>
            </>
        </React.Fragment>
    );
}

// LeftSidebar.defaultProps = {
//     hideLogo: false,
//     hideUserProfile: false,
//     isLight: false,
//     isCondensed: false,
// };

export default LeftSidebar;
