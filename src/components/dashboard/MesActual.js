import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useStyles } from '../../hooks/useStyles';


export const MesActual = () => {

    const classes = useStyles();

    return (
        <Card sx={{ boxShadow: 0, height: '100%' }}>
            <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body5" color="text.secondary">
                        Current month
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Octubre
                    </Typography>
                    <hr/>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline-block" textAlign="left">
                        Ingreso
                    </Typography>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline-block" className={ classes.right }>
                        1234 €
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" textAlign="left">
                        Gasto
                    </Typography>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" className={ classes.right }>
                        1234 €
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" textAlign="left">
                        Sesiones
                    </Typography>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" className={ classes.right }>
                        12
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
