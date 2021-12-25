import React from "react";
import "./Notification.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { hideAction } from "../../redux/actions/notification/notificationActions";

const Notification = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.notification.type);
  const isShow = useSelector((state) => state.notification.showMessage);
  const message = useSelector((state) => state.notification.message);

  const hideNotification = () => {
    dispatch(hideAction());
  };

  if (isShow) {
    setTimeout(() => {
      dispatch(hideAction());
    }, 5000);
  }

  return (
    isShow && (
      <div className={` notification-container ${type}`}>
        <p>{message}</p>
        <div className="notification-close-wrapper">
          <div onClick={hideNotification} className="notification-close">
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
