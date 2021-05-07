import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/images/icon.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    background: '#f8bbd0'
  },
  menuLink: {
    marginRight: theme.spacing(1),
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = props => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.navBar}>
      <Container fixed>
        <Toolbar>
          <IconButton className={classes.menuButton}>
            <img src={icon} alt='' />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            React pizza
          </Typography>
          <Box mr={3}>
            <NavLink to='/basket' color='inherit' className={classes.menuLink}>
              <Button className={classes.menuButton}>Корзина</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
