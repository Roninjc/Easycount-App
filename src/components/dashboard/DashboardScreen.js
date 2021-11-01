import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { NavBar } from '../ui/NavBar';
import { MesActual } from './MesActual';
import { Iva } from './Iva';
import { ResultadoExp } from './ResultadoExp';

import './grid.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '0 1px 10px 1px rgb(0, 0, 0, .09)',
    height: '100%',
    padding: '0',
    borderRadius: '20px',
    overflow: 'hidden',
    //   display: 'grid',
}));

export const DashboardScreen = () => {

    const handleClick = () => {
        console.log('click');
    };

    return (
        <>
            <NavBar />
            <Box sx={{ flexGrow: 1, padding: '20px 5vw' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <h2 className="title">Dashboard</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <Item
                            className="clickable"
                            onClick={ handleClick }
                        >
                            <MesActual />
                        </Item>
                    </Grid>
                    <Grid item xs={6} container spacing={4} direction="column">
                        <Grid item xs>
                            <Item
                                className="clickable"
                                onClick={ handleClick }
                                
                            >
                                <Iva />
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item
                                className="clickable"
                                onClick={ handleClick }
                            >
                                <ResultadoExp />
                            </Item>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
// export const DashboardScreen = () => {
//     return (
//         <>
//             <NavBar />
//             <Box sx={{ flexGrow: 1 }}>
//                 <Grid container spacing={0}>
//                     <Grid item xs={3}>
//                         <SideBar />
//                     </Grid>
//                     <Grid container spacing={2} item xs={9}>
//                         <Grid item xs={12}>
//                             <h2 className="title">Dashboard</h2>
//                         </Grid>
//                         <Grid item xs={4}>
//                             <Item>IVA</Item>
//                         </Grid>
//                         <Grid item xs={4}>
//                             <Item>R. Expl</Item>
//                         </Grid>
//                         <Grid item xs={4}>
//                             <Item>Mes actual</Item>
//                         </Grid>
//                     </Grid>

//                 </Grid>
//             </Box>
//         </>
//     );
// }
// export const DashboardScreen = () => {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Grid container spacing={0}>
//                 <Grid item xs={12}>
//                     <NavBar />
//                 </Grid>
//                 <Grid item xs={3} sx={{ display: 'grid' }}>
//                     <Item className="sidebar">Sidebar</Item>
//                 </Grid>
//                 <Grid item xs={9} container spacing={2}>
//                     <Grid item xs={12} sx={{ display: 'grid' }}>
//                         <h2 className="title">Dashboard</h2>
//                     </Grid>
//                     <Grid item xs={4} sx={{ display: 'grid' }}>
//                         <Item>IVA</Item>
//                     </Grid>
//                     <Grid item xs={4} sx={{ display: 'grid' }}>
//                         <Item>R. Expl</Item>
//                     </Grid>
//                     <Grid item xs={4} sx={{ display: 'grid' }}>
//                         <Item>Mes actual</Item>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }
