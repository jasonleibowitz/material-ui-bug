import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles';
import withRoot from '../../withRoot';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
]

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

class NavBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired
  }

  state = {
    open: false,
    value: pages.findIndex(page => page.path === this.props.router.pathname) || 0,
  }

  handleChange = (event, value) => {
    const page = pages[value];
    this.setState(() => ({ value }), () => {
      Router.push(page.path);
    })
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            aria-label="Menu"
            classes={{ root: classes.iconButtonRoot }}
            color="inherit"
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Tabs
            classes={{
              root: classes.tabsRoot,
              flexContainer: classes.tabsFlexContainer
            }}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
          >
            {pages.map(page => (<Tab key={page.path} classes={{ root: classes.root }} label={page.label} />))}
          </Tabs>
          <SwipeableDrawer
            open={this.state.open}
            onOpen={this.handleDrawerOpen}
            onClose={this.handleDrawerClose}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          >
            <div>
              <List>
                <Link passHref href="/">
                  <ListItem button>
                    <ListItemText primary="More From Today" />
                  </ListItem>
                </Link>
                <Link passHref href="/about">
                  <ListItem button>
                    <ListItemText primary="About" />
                  </ListItem>
                </Link>
                <Link passHref href="/take-action">
                  <ListItem button>
                    <ListItemText primary="Take Action" />
                  </ListItem>
                </Link>
              </List>
            </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withRoot(withStyles(styles)(NavBar)));