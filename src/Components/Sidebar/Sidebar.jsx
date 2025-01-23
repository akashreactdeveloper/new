// Sidebar.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";
import {
  GatepaxLogo,
  IntegrationsIcon,
  UserIcon,
  KnowledgeConfigIcon,
  SubscriptionIcon,
  PerformanceIcon,
  SettingsIcon,
} from "../Icons";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../redux/slice/userSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector(selectUserDetails);

  const menuItems = [
    { name: "Accounts", path: "/accounts", icon: <UserIcon /> },
    { name: "Integrations", path: "/integrations", icon: <IntegrationsIcon /> },
    {
      name: "Knowledge Configuration",
      path: "/knowledgeConfiguration",
      icon: <KnowledgeConfigIcon />,
    },
    {
      name: "Subscriptions",
      path: "/subscriptions",
      icon: <SubscriptionIcon />,
    },
    {
      name: "Performance Monitoring",
      path: "/performance",
      icon: <PerformanceIcon />,
    },
  ];

  return (
    <div className="sidebar">
      <div>
        <div
          className="sidebar-logo"
          onClick={() => {
            if (user) {
              navigate("/accounts");
            } else {
              navigate("/");
            }
          }}
        >
          <GatepaxLogo />
        </div>
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${
                location.pathname.includes(item.path) ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <i className="icon">{item.icon}</i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar-settings">
        <i className="icon settings-icon">
          <SettingsIcon />
        </i>
      </div>
    </div>
  );
};

export default Sidebar;
