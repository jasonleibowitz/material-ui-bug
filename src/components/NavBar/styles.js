export default theme => ({
  root: {
    height: '100%',
  },
  tabsRoot: {
    display: 'none',
    [theme.breakpoints.up('small')]: {
      display: 'inline-block',
    }
  },
  tabsFlexContainer: {
    height: '64px',
  },
  iconButtonRoot: {
    display: 'inline-block',
    [theme.breakpoints.up('small')]: {
      display: 'none',
    }
  }
})