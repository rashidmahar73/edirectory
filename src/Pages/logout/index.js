import {  Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 function Logout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={showModal}
        style={{cursor:'pointer'}}
      >
        <path
          d="M11.2205 12.0853C11.0536 11.8881 10.9701 11.6641 10.9701 11.4135C10.9701 11.1634 11.0536 10.955 11.2205 10.788L12.9047 9.10384H6.37269C6.11475 9.10384 5.89868 9.01644 5.72449 8.84165C5.5497 8.66746 5.4623 8.4514 5.4623 8.19346C5.4623 7.93551 5.5497 7.71915 5.72449 7.54435C5.89868 7.37016 6.11475 7.28307 6.37269 7.28307H12.9047L11.2205 5.59886C11.0384 5.41678 10.9474 5.20072 10.9474 4.95067C10.9474 4.70001 11.0384 4.48364 11.2205 4.30156C11.3874 4.11949 11.5962 4.02845 11.8468 4.02845C12.0969 4.02845 12.3054 4.1119 12.4723 4.2788L15.7496 7.55619C15.8407 7.64723 15.9053 7.74585 15.9436 7.85206C15.9812 7.95827 16 8.07207 16 8.19346C16 8.31484 15.9812 8.42864 15.9436 8.53485C15.9053 8.64106 15.8407 8.73969 15.7496 8.83072L12.4723 12.1081C12.275 12.3054 12.0589 12.3924 11.8241 12.3694C11.5886 12.3469 11.3874 12.2522 11.2205 12.0853ZM1.82077 16.3869C1.32006 16.3869 0.891266 16.2088 0.534395 15.8525C0.178132 15.4956 0 15.0669 0 14.5661V1.82077C0 1.32006 0.178132 0.891266 0.534395 0.534395C0.891266 0.178132 1.32006 0 1.82077 0H7.28307C7.54101 0 7.75738 0.0870933 7.93218 0.26128C8.10636 0.436074 8.19346 0.652442 8.19346 0.910384C8.19346 1.16833 8.10636 1.38439 7.93218 1.55858C7.75738 1.73337 7.54101 1.82077 7.28307 1.82077H1.82077V14.5661H7.28307C7.54101 14.5661 7.75738 14.6535 7.93218 14.8283C8.10636 15.0025 8.19346 15.2186 8.19346 15.4765C8.19346 15.7345 8.10636 15.9505 7.93218 16.1247C7.75738 16.2995 7.54101 16.3869 7.28307 16.3869H1.82077Z"
          fill="#F63E50"
        ></path>
      </svg>
      <Modal
        title="Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
}

export {Logout};