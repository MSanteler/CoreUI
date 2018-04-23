import React, { Component } from 'react';
import {Button, CardColumns, Card, CardHeader, CardBody} from 'reactstrap';

const API = 'http://localhost:3000/';
const DEFAULT_QUERY = 'endpoint';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };

      this.goFetch = this.goFetch.bind(this);
    }

    goFetch() {
      this.setState({isLoading: true}, function () {
        console.log("fetching...");
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Something went wrong ...');
            }
          })
          .then(data => this.setState({ data, isLoading: false, error: null }))
          .catch(error => this.setState({ error, isLoading: false }));
      });
    }

    componentDidMount() {
      this.goFetch();
    }

    render() {
      return <Comp { ...this.props } { ...this.state } goFetch={this.goFetch}/>
    }
  }

const App = props => {
  const hits = props.data.hits || [];

  const cardBodyContent = () => {
    if (props.isLoading) {
      return (
        <h3>Loading...</h3>
      );
    }
    if (props.error) {
      return (
        <h3>{props.error.message}</h3>
      );
    }
    return (
      hits.map((hit, index) =>
        <div key={index}>
          <h3>Foo: {hit.foo}</h3>
        </div>
      )
    );
  };

  const refreshButton = () => {
    var isSpinning = props.isLoading ? ' fa-spin' : '';
    return (
      <Button onClick={props.goFetch} color="primary"><i className={"fa fa-refresh"+isSpinning}></i>{'\u00A0'} Refresh</Button>
    );
  };

  return (
    <div className="animated fadeIn">
      <CardColumns className="cols-2">
        <Card>
          <CardHeader>
            API Card!
            <div className="card-actions">
            </div>
          </CardHeader>
          <CardBody>
            { cardBodyContent() }
            { refreshButton() }
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(App);
