import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const MusicForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
  event.persist();
    setInputs({
      ...inputs, 
	  [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
	  event.preventDefault();
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Music was updated successfully"
        });
      }

      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: ` ${globalStore.REACT_APP_ENDPOINT}/${endpoint} There was an error updating the music: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Artist</Form.Label>

      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          name="artist" 
          placeholder="My Chemical Romance"
          defaultValue={inputs.artist}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="title" 
          placeholder="Helena"
          defaultValue={inputs.title}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Genre</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="genre" 
          placeholder="Emo"
          defaultValue={inputs.genre}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default MusicForm;