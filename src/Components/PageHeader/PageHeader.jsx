import React, { useState, useEffect, useRef } from "react";
import "./PageHeader.css";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../redux/slice/userSlice";
import Cookies from "js-cookie";
import { NotificationIcon } from "../Icons";

const PageHeader = ({ header }) => {
  const user = useSelector(selectUserDetails);
  const [showDialog, setShowDialog] = useState(false);
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);
  const dialogRef = useRef();
  const notificationDialogRef = useRef();

  const handleProfileClick = () => {
    setShowDialog((prev) => !prev);
  };

  const handleNotificationClick = () => {
    setShowNotificationDialog((prev) => !prev);
  };

  const handleSignOut = () => {
    // Remove the gatepaxUserSession cookie
    Cookies.remove("gatepaxUserSession");
    console.log("Sign out clicked, session cleared");

    // Optional: Redirect to the login page or home page
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowDialog(false);
      }
      if (
        notificationDialogRef.current &&
        !notificationDialogRef.current.contains(event.target)
      ) {
        setShowNotificationDialog(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="page-header-top">
      <div className="page-header-profile" ref={dialogRef}>
        <div
          className="notification-icon"
          ref={notificationDialogRef}
          onClick={handleNotificationClick}
        >
          <NotificationIcon />
          {showNotificationDialog && (
            <div className="notification-dialog">
              <h4 style={{ color: "black", fontSize: "1rem" }}>
                Notifications
              </h4>
              <div className="notification-content">
                <div>You Have Caught Up with All</div>
              </div>
            </div>
          )}
        </div>
        <div className="round-profile-header" onClick={handleProfileClick}>
          {/* <img src={user.picture} alt="" srcSet="" /> */}H
        </div>
        {showDialog && (
          <div className="profile-dialog">
            <div className="round-profile-header-big">
              <img src={user.picture} alt="" srcSet="" />
            </div>
            <div>
              {user.given_name} {user.name}
            </div>
            <div className="dialog-email">{user.email}</div>
            <div className="dialog-signout" onClick={handleSignOut}>
              Sign Out
            </div>
          </div>
        )}
      </div>
      <div className="page-header-name">{header}</div>
    </div>
  );
};

export default PageHeader;
