import React from 'react';
import RecipeReviewCard from '../component/card/CardInfo'
import {
Grid,
} from '@mui/material';
import { productList } from './productInfo';

export default () => {

    const renderItems = productList.map((p, i) => {
        return (
            <Grid key={i} style={{padding: 10}}>
                <RecipeReviewCard
                    key={i}
                    name={p.name}
                    color={p.color}
                    image={p.image}
                    price={p.price}
                />
            </Grid>
            
        )
    });

    return (
        <>
            {renderItems}
        </>
    );
};