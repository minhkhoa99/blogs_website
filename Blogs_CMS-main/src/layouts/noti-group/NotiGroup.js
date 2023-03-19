import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Space, Dropdown, Menu } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import './NotiGroup.scss';

import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions';
import { APICore } from '../../helpers/api/apiCore';
const api = new APICore();
const NotiGroup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = api.getLoggedInUser();
    function logOut() {
        dispatch(logoutUser());
    }
    const userMenu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Account
                <Link to="/account" />
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logOut}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        // <div className="noti-group">
        //     <Notification />

        //     <Language />

        //     <Dropdown overlay={userMenu} placement="bottomLeft">
        //         <Space className="item" onClick={(e) => e.preventDefault()}>
        //             <Avatar size={25} src={user?.pictureUrl} />
        //             {user?.givenName}
        //         </Space>
        //     </Dropdown>

        // </div>

        <div class="dropdown">
            <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Xin chào admin
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">
                        <ion-icon name="person"></ion-icon>
                        <span>Thông tin cá nhân</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        <ion-icon name="lock-closed"></ion-icon>
                        <span>Đổi mật khẩu</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="/login">
                        <ion-icon name="power"></ion-icon>
                        <span>Đăng xuất</span>
                    </a>
                </li>
            </ul>
        </div>

        // <nav class="nav-container">
        //     <div class="dropdown">
        //         <a
        //             class="btn btn-secondary dropdown-toggle"
        //             href="#"
        //             role="button"
        //             data-bs-toggle="dropdown"
        //             aria-expanded="false">
        //             Xin chào admin
        //         </a>
        //         <ul class="dropdown-menu">
        //             <li>
        //                 <a class="dropdown-item" href="#">
        //                     <ion-icon name="person"></ion-icon>
        //                     <span>Thông tin cá nhân</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a class="dropdown-item" href="#">
        //                     <ion-icon name="lock-closed"></ion-icon>
        //                     <span>Đổi mật khẩu</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a class="dropdown-item" href="#">
        //                     <ion-icon name="power"></ion-icon>
        //                     <span>Đăng xuất</span>
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default NotiGroup;
