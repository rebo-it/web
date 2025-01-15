import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderButton.css';

interface HeaderButtonprops {
  label: string;
  routePath: string;
 
  LabelColor: string;
}

const HeaderButton: React.FC<HeaderButtonprops> = ({ label, routePath,  LabelColor }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(routePath);
  };

  const isActive = location.pathname === routePath;

  return (
    <Button
      onClick={handleClick}
      className={`HeaderButton d-inline-flex align-items-center ${isActive ? 'active' : ''}`}
      style={{
        color: LabelColor,
        backgroundColor: isActive ? 'rgba(255, 113, 0, 1)' : 'transparent',
        border: isActive ? '1px solid rgba(255, 113, 0, 1)' : 'none',
      }}
    >
      
      {label}
    </Button>
  );
};

export default HeaderButton;
