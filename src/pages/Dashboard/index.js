import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  mainListItems,
  secondaryListItems,
} from './components/Menu/menu-admin';
import DonutChart from './components/DonutChart';
import PieChartGraph from './components/PieChartGraph';
import ClusteredBarChartGraph from './components/ClusteredBarChartGraph';
import LineBarAreaComposedChartGraph from './components/LineBarAreaComposedChartGraph';
import PieChartWithCustomizedLabelGraph from './components/PieChartWithCustomizedLabelGraph';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Menu from '@mui/icons-material/Menu';
import Pets from '@mui/icons-material/Pets';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ExitToApp from '@mui/icons-material/ExitToApp';
import apids from "../../services/apids";
import { useNavigate } from 'react-router-dom';
import { DockSharp } from '@mui/icons-material';

function Copyright(props) {

  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='javascript:;'>
        Me Adota
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {

  const [open, setOpen] = React.useState(true);
  const [cats, setCats] = React.useState([]);
  const [dogs, setDogs] = React.useState([]);

  const [ageGroup, setAgeGroup] = React.useState([]);
  const [dogSize, setDogSize] = React.useState([]);

  const [castrationAnimals, setCastrationAnimals] = React.useState([]);

  

  const [qtyAnimal, setQtyAnimal] = React.useState(0);

  const [dataAnimal, setDataAnimal] = React.useState([]);
 
  React.useEffect(() => {
    async function getData() {
      if (qtyAnimal === 0) {
        try {
          const response =  await  apids.get('/api/animals',
          {method: 'GET', headers: {'Content-Type': 'application/json'}})
          setDataAnimal(response.data)
          setQtyAnimal(response.length)
          getGender(dataAnimal)
          ageGroupAnimal(dataAnimal)
        } catch (error) {
         console.log(error)
        }
      }
    }
    getData()
  }, [dataAnimal]);
  
  const getGender = (animals)  => {
    const cats = animals.filter((animal)=> animal.type === 'cat')
    setCats(cats)
    const dogs = animals.filter((animal)=> animal.type === 'dog')
    setDogs(dogs)

    castrationCatsDogs(cats, dogs)
    dogsOfSize(dogs)
  }


 const dogsOfSize = (dogs)  => {
    const data = [
      { name: 'Pequeno', value: dogs.filter((animal)=> animal.size === 'Pequeno').length},
      { name: 'Médio', value: dogs.filter((animal)=> animal.size === 'Médio').length},
      { name: 'Grande', value: dogs.filter((animal)=> animal.size === 'Grande').length},
    ];
    setDogSize(data)
  }
  
  const ageGroupAnimal = (animals)  => {
    const data = [
      { name: 'Adulto', value: animals.filter((animal)=> animal.age === 'Adulto').length},
      { name: 'Jovem', value: animals.filter((animal)=> animal.age === 'Jovem').length},
      { name: 'Sênior', value: animals.filter((animal)=> animal.age === 'Sênior').length},
    ];
    setAgeGroup(data)
  }

  const castrationCatsDogs = (cats, dogs)  => { 
    const data = [
      { name: 'Fêmea', 
        cat: cats.filter((animal)=> animal.castration === 's').length,
        dog: dogs.filter((animal)=> animal.castration === 's').length,
      },
      { name: 'Macho', 
        cat: cats.filter((animal)=> animal.castration === 'n').length,
        dog: dogs.filter((animal)=> animal.castration === 'n').length,
      },
    ];

    setCastrationAnimals(data)
  }

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const configSxPaperChart = () => {
    return {
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: 320,
    };
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar sx={{ pr: '24px' }}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>  */}
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <>
              <div>
                <ListItem
                  button
                  onClick={() => {
                    navigate('/menu/dashboard');
                  }}
                >
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate('/menu');
                  }}
                >
                  <ListItemIcon>
                    <Menu />
                  </ListItemIcon>
                  <ListItemText primary='Menu' />
                </ListItem>
              </div>
            </>
          </List>

          <Divider />

          <List>
            <>
              <div>
                <ListSubheader inset>Opções</ListSubheader>
                <ListItem
                  button
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary='Sair' />
                </ListItem>
              </div>
            </>
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid
              container
              item
              spacing={3}
              xs={12}
              justify='center'
              alignItems='center'
            >
              <Typography variant='h2' component='h2'>
                ANIMAIS PESQUISADOS
              </Typography>
            </Grid>
            {/* Charts */}
            <Grid container spacing={3} wrap='nowrap' xs={12}>
              <Grid item xs={6} md={8} lg={9}>
                <Paper sx={configSxPaperChart}>
                  <DonutChart
                    percentFirst={cats.length * 10}
                    percentSecond={dogs.length * 10}
                    name='Tipo'
                    nameFirst='Cat'
                    nameSecond='Dog'
                    valueFirst={cats.length}
                    valueSecond={dogs.length}
                  />
                </Paper>
              </Grid>

              <Grid item xs={6} md={8} lg={9}>
                <Paper sx={configSxPaperChart}>
                  <PieChartGraph
                    name='Gênero'
                    nameFirst='Fêmea'
                    nameSecond='Macho'
                    valueFirst={cats.length}
                    valueSecond={dogs.length}
                  />
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={3} wrap='nowrap' xs={12}>
              <Grid item xs={6} md={8} lg={9}>
                <Paper sx={configSxPaperChart}>
                  <ClusteredBarChartGraph
                    name='Contagem de castração por gênero e tipo'
                    data={castrationAnimals}
                  />
                </Paper>
              </Grid>

              <Grid item xs={6} md={8} lg={9}>
                <Paper sx={configSxPaperChart}>
                  <PieChartWithCustomizedLabelGraph
                   data={dogSize}
                  name='Cachorro por Porte'
                  listColors={['#00BFFF', '#FF00FF', '#8884d8']}
                  />
                </Paper>
              </Grid>

              <Grid item xs={6} md={8} lg={9}>
                <Paper sx={configSxPaperChart}>
                  <PieChartWithCustomizedLabelGraph
                    data={ageGroup}
                    name='Faixa Etária'
                    listColors={['#00C49F', '#FF2F30', '#8884d8']}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
