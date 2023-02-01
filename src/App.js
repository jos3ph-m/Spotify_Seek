import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';

import { useState, useEffect } from 'react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search aka Seek
  async function search() {
    console.log('Searching for ' + searchInput);

    // Get request using search to get Artist ID

    // Get request with Artist ID grab all the albums from that artist
  }

  return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == 'Enter') {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Seek</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
