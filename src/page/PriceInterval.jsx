import React, {useState} from 'react';

import {
Grid,
} from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default (props) => {
    const [priceBelowThirty, setPriceBelowThirty] = useState(false);
    const [priceBelowFifty, setPriceBelowFifty] = useState(false);
    const [priceBelowEighty, setPriceBelowEighty] = useState(false);

    const clickCheckbox = (e) => {
        const name = e.target.name;
        console.log(`name===`, name)
        const price = []
        switch (name) {
            case 30:
                setPriceBelowThirty(!priceBelowThirty);
                // price.push(30);
                break;
            case 50:
                setPriceBelowFifty(!priceBelowFifty);
                // price.push(50);

                break;
            case 80:
                setPriceBelowEighty(!priceBelowEighty);
                // price.push(80);

                break;
            default:
                break;
        };
        // props.onClick(price)
    };

    return (
        <FormGroup>
            <FormControlLabel
                name={'30'}
                control={
                    <Checkbox
                        checked={priceBelowThirty}
                        onChange={clickCheckbox}
                    />
                }
                label='$0 ~ $30'
            />
            <FormControlLabel
                name={'50'}
                control={
                    <Checkbox
                        checked={priceBelowFifty}
                        onChange={clickCheckbox}
                    />
                }
                label='$30 ~ $50'
            />
            <FormControlLabel
                name={'80'}
                control={
                    <Checkbox
                        checked={priceBelowEighty}
                        onChange={clickCheckbox}
                    />
                }
                label='$50 ~ $80'
            />
        </FormGroup>
    );
}