import React, { Component } from 'react';
import { Link } from 'react-router';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const menuItems = [
  { text : `Dashboard`, link : `dashboard` },
  { text : `Stats`, link : `stats` },
  { text : `Diff`, link : `diff` },
  { text : `Trends`, link : `trends` },
  { text : `Timings`, link : `timings` },
  { text : `Errors`, link : `errors` },
  { text : `Breakdown`, link : `breakdown` },
  { text : `Events`, link : `events` },
  { text : `RPM`, link : `rpm` }
];


export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      open : false,
      checkedIndex : 0
    };
  }

  componentWillMount(){
    this.setState({
      checkedIndex : menuItems.findIndex((element, index) => element.link === this.props.locationPath)
    });
  }

  handleToggle(){
    this.setState({ open : !this.state.open });
  }

  handleClose(){
    this.setState({ open : false });
  }

  /**
   * Standard render function
   * @returns {XML}
   */
  render(){
    return (
      <div>
        <AppBar
          id="app-bar"
          title={menuItems[this.state.checkedIndex].text}
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({ open })}>
          {menuItems.map((item, i) => <Link to={item.link} key={i} onTouchTap={this.handleClose.bind(this)}><MenuItem style={ this.state.checkedIndex === i ? { backgroundColor : `grey` } : {}}>{item.text}</MenuItem></Link>)}
        </Drawer>
      </div>
    );
  }
}
