import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';

function MainComponent() {

  return (
    <Container maxWidth="sm" style={{
        backgroundColor: '#42756e', 
        width: '100vw', 
        height: '100vh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr',
        paddingLeft: 0,
        paddingRight: 0}}>
            <AppBar position="static" sx={{backgroundColor: '#10433c'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                      <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                          mr: 2,
                          display: 'flex',
                          flexGrow: 1,
                          fontWeight: 900,
                          letterSpacing: '.1rem',
                          color: 'gold',
                          textDecoration: 'none',
                        }}
                      >
                        PF Audit
                      </Typography>
                      <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Typography gutterBottom noWrap sx={{ fontSize: 14, m: 'auto', mr: 1, maxWidth: 150 }}>
                            Имя пользователя
                        </Typography>
                        <Avatar alt="Remy Sharp"/>
                      </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{
                marginY: 2,
            }}>
                <Card variant="outlined" sx={{backgroundColor: '#276159ff', color: 'white'}}>
                    <CardContent>
                        <Box sx={{ display: 'flex', gap: 1}}>
                            <Typography gutterBottom variant='subtitle2' fontSize='small' >
                                Новые чаты
                            </Typography>
                            <MarkChatReadIcon fontSize='small'/>
                        </Box>
                      
                      <Typography variant="h5" component="div" >
                        Всего было обработано чатов: <b style={{color: 'gold'}}>2000</b>
                      </Typography>

                      <Typography variant='body2' sx={{mt: 1}}>
                         Последнее обновление: 31.07.2025 17:01
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button startIcon={<AddBoxOutlinedIcon />} sx={{color: 'gold'}}>Добавить</Button>
                      <Button startIcon={<ListAltOutlinedIcon />} sx={{color: 'gold'}}>Список</Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" sx={{backgroundColor: '#276159ff', color: 'white', mt: 1}}>
                    <CardContent>
                        <Box sx={{ display: 'flex', gap: 1}}>
                            <Typography variant='subtitle2' gutterBottom fontSize='small' >
                                Доставки
                            </Typography>
                            <LocalFloristIcon fontSize='small'/>
                        </Box>
                      
                      <Typography variant="h5" component="div" >
                        Всего заработано на доставках: <b style={{color: 'gold'}}>20000000</b> руб.
                      </Typography>
                      <Typography variant='body2' sx={{mt: 1}}>
                         Последнее обновление: 31.07.2025 17:01
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button startIcon={<AddBoxOutlinedIcon />} sx={{color: 'gold'}}>Добавить</Button>
                      <Button startIcon={<ListAltOutlinedIcon />} sx={{color: 'gold'}}>Список</Button>
                    </CardActions>
                </Card>
            </Box>
      {/* <header className="App-header">
        <h1>React + Telegram Web App</h1>
        {userData ? (
          <div>
            <p>Пользователь: {userData.user?.first_name}</p>
            <button onClick={sendDataToTelegram}>Отправить данные</button>
          </div>
        ) : (
          <p>Загрузка...</p>
        )}
      </header> */}
    </Container>
  );
}

export default MainComponent;