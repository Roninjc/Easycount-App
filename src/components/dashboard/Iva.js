import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';

import { useStyles } from '../../hooks/useStyles';


export const Iva = () => {
    
    const classes = useStyles();

    return (
        <Card sx={{ boxShadow: 0 }} className={ classes.h100 }>
            <CardActionArea className={ classes.h100 }>
                <CardContent sx={{ textAlign: 'left' }} className={ classes.fitbox }>
                    <Typography variant="body5" color="text.secondary">
                        Iva
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        1.234 €
                    </Typography>
                    <hr/>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} >
                            <Grid item xs={6} >
                                <Typography variant="body5" color="text.secondary" component="div" display="inline-block" textAlign="left">
                                    Soportado
                                </Typography>
                                <Typography variant="body5" color="text.secondary" component="div" display="inline-block" className={ classes.right }>
                                    1.234 €
                                </Typography>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography variant="body5" color="text.secondary" component="div" display="inline" textAlign="left">
                                    Repercutido
                                </Typography>
                                <Typography variant="body5" color="text.secondary" component="div" display="inline" className={ classes.right }>
                                    1.234 €
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
