import React from 'react';
import { Card, Col, Container,Row} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return (
    <div className="gradient-custom-2">
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">
            <Card>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <Card.Img src={user.picture}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <Card.Title tag="h5">{user.nickname}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                  <div className="px-3">
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                  <div>
                    <Card.Text className="mb-1 h5"></Card.Text>
                    <Card.Text className="small text-muted mb-0"></Card.Text>
                  </div>
                </div>
              </div>
              <Card.Body className="text-black p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Card.Text className="lead fw-normal mb-0">Favorite Farms</Card.Text>
                </div>
                <Row>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                </Row>
                <Row className="g-2">
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                  <Col className="mb-2">
                    <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
};

export default withAuth0(Profile);
