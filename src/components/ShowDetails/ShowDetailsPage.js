import React, {Fragment, Component} from 'react';
import {data} from '../../services/showService';

import ShowCast from './ShowCast';
import ShowDetails from './ShowDetails'

class ShowDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      actors: [],
    }
  }

  loadShowDetails() {
    let id = this.props.match.params.id;
    data.getShowDetails(id).then(data => {
      this.setState({
        details: data
      })
    })
  }

  loadShowCast() {
    let id = this.props.match.params.id;
    data.getShowCast(id).then(data => {
      this.setState({
        actors: data
      })
    })
  }

  componentDidMount() {
    this.loadShowDetails();
    this.loadShowCast()
  }

  render() {
    return (
      <Fragment>
        <ShowDetails details={this.state.details}/>
        <ShowCast actors={this.state.actors}/>
      </ Fragment>
    )
  }
}

export default ShowDetailsPage;
