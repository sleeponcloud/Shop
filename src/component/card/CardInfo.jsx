import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import store from 'store2';

const StyledButton = styled(Button)(() => ({
    'color': '#fff',
    'height': '100%',
    'backgroundColor': '#000',
    '&:hover': {
        backgroundColor: '#E8C25A',
        color: '#000',
    },
}));

export default function RecipeReviewCard(props) {

    const addItems = () => {
        const num = store.session.get('cartNum') ? store.session.get('cartNum') : 0;
        const currentNum = num + 1;
        store.session.set('cartNum', currentNum);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="450"
                image={props.image}
                style={{
                    filter: 'sepia(40%)'
                }}
            />
            <CardContent>
                <Typography variant="button">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.color}
                </Typography>
                <Typography variant="h6" style={{fontWeight: 'bold'}}>
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <StyledButton fullWidth onClick={addItems}>Add to cart</StyledButton>
            </CardActions>
        </Card>
    );
}
