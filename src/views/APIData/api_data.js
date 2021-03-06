import React, { Component } from 'react';
import {CardColumns, Card, CardHeader, CardBody} from 'reactstrap';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

const withFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      return <Comp { ...this.props } { ...this.state } />
    }
  }

const App = ({ data, isLoading, error }) => {
  const hits = data.hits || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="animated fadeIn">
      <CardColumns className="cols-2">
        <Card>
          <CardHeader>
            Line Chart
            <div className="card-actions">
            </div>
          </CardHeader>
          <CardBody>
            {hits.map(hit =>
              <div key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
                _____
              </div>
            )}
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(App);
