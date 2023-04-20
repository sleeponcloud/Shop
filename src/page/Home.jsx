import React, {useEffect} from 'react';
import { NavBar } from '../component/navbar/NavBar';
import Product from './Product';
import {
    Grid,
} from '@mui/material';
import store from 'store2';

function Home() {
    useEffect(() => {
        store.session.set('cartNum', 0)
    }, []);

    return (
        <div>
            <NavBar/>
            <div
                style={{
                    height: "25px",
                    backgroundColor: '#E8C25A'
                }}
            >
                What's New
            </div>
            <Grid container justifyContent={''}>
                <Grid container item xs={3}>
                </Grid>
                <Grid container item xs={9}>
                    <Product/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
