import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    right: {
        float: 'right',
    },
});

export const Iva = () => {
    
    const classes = useStyles();

    return (
        <Card sx={{ boxShadow: 0 }}>
            <CardActionArea>
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body5" color="text.secondary">
                        Iva
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        1.234 €
                    </Typography>
                    <hr/>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline-block" textAlign="left">
                        Soportado
                    </Typography>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline-block" className={ classes.right }>
                        1.234 €
                    </Typography>
                    <br/>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" textAlign="left">
                        Repercutido
                    </Typography>
                    <Typography variant="body5" color="text.secondary" component="div" display="inline" className={ classes.right }>
                        1.234 €
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
