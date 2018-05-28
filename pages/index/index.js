import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import NavBar from '../../src/components/NavBar';
import Layout from '../../src/components/Layout';

// Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withRoot from '../../src/withRoot';

const items = [
  {
    id: 0,
    headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://www.nytimes.com/',
    coverImage: 'https://picsum.photos/1200/600/?image=447'
  },
  {
    id: 1,
    headline: 'Morbi id dui consectetur, eleifend nisi ac, congue purus.',
    link: 'https://nypost.com/',
    coverImage: 'https://picsum.photos/1200/600/?image=952'
  }
]

class Index extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <h1>Hello World</h1>
        {items.map(item => (
          <Card key={item.id} classes={{ root: classes.card }}>
            <CardMedia
              classes={{ root: classes.media }}
              image={item.coverImage}
            />
            <CardContent>
              <Typography variant="headline" component="h2" >{item.headline}</Typography>
            </CardContent>
            <CardActions>
              <Link passHref href={item.link}>
                <Button size="small" color="secondary">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(Index))
