import React, { Component } from 'react';


import Record from './record-player/Record';
import Header from './common/Header';

import { Segment, Button, List, Grid, Form, Message } from 'semantic-ui-react'
import './App.css';
const buttonPadding = {
  marginTop: '10px'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {emailRecieved: false, playing: true}
  }

  handleMouseOnOff(isPlaying) {

    if(isPlaying === 'on') {
      this.setState({playing: true})
    }
    else {
      this.setState({playing: false})
    }

  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({emailRecieved: true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div onMouseEnter={this.handleMouseOnOff.bind(this, 'on')} onMouseLeave={this.handleMouseOnOff.bind(this, 'off')}>
          <Grid centered>
            <Grid.Row>
              <Record isPlaying={this.state.playing} />
            </Grid.Row>
            <Grid.Row fluid>
              <Segment padded>

                <List >
                  <List.Item icon='users' content='One Public NY' />
                  <List.Item icon='marker' content='New York, NY' />
                  <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>onepublic-nyc@gmail.com</a>} />
                </List>

                <Form success={this.state.emailRecieved}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Form.Input placeholder='joe@schmoe.com' />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Form.Input placeholder='First Name' />
                        <Form.Input placeholder='Last Name' />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Message
                    success
                    content="You're all signed up for the Updates"
                  />
                  <Button onClick={this.handleSubmit.bind(this)} style={buttonPadding}>Submit</Button>
                </Form>
              </Segment>
            </Grid.Row>
          </Grid>
        </div>

      </div>
    );
  }
}

export default App;
