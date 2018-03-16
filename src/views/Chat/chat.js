import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton
} from 'reactstrap';

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Chat</strong> Input
              </CardHeader>
              <CardBody>
                <ul id="messages">
                  <li>Fake message</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Chat</strong> Input
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="email" id="input2-group2" name="input2-group2" placeholder="Email"/>
                        <InputGroupButton>
                          <Button color="primary">Submit</Button>
                        </InputGroupButton>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                <Button type="reset" color="danger"><i className="fa fa-ban"></i> Reset</Button>{' '}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Cards;
