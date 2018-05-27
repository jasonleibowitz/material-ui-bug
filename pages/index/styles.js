export const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: '25px 0',
    [theme.breakpoints.up('small')]: {
      margin: '50px',
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});