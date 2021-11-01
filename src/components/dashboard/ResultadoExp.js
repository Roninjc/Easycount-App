import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { useStyles } from '../../hooks/useStyles';


export const ResultadoExp = () => {
    
    const classes = useStyles();

    return (
        <Card sx={{ boxShadow: 0 }}>
            <CardActionArea>
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body5" color="text.secondary">
                        Resultado de explotación
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        1.234 €
                    </Typography>
                    <hr/>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6} >
                                <Typography variant="body5" color="text.secondary" component="div" display="inline-block" textAlign="left">
                                    Ingreso
                                </Typography>
                                <Typography variant="body5" color="text.secondary" component="div" display="inline-block" className={ classes.right }>
                                    1.234 €
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Typography variant="body5" color="text.secondary" component="div" display="inline" textAlign="left">
                                    Gasto
                                </Typography>
                                <Typography variant="body5" color="text.secondary" component="div" display="inline" className={ classes.right }>
                                    1.234 €
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <br/>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
