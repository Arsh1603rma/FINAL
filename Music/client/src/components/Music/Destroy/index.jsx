import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/music/destroy`, { _id: id })
    .then(() => {
      setNotification(`Music was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected music due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/"/>;
}
 
export default Destroy;