import React from 'react';
import { Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

import './Widget.css'

function Widget({totalProducts,totalValue,outOfStock,totalCategory}) {
    return (
        <div>
            <div className='mx-1'> <h1>Inventory Stats</h1></div>
        <div className='widget-container'>
           
            <div className='widget-box'>
                <div className='top-icon-text'>
                <ShoppingCartIcon />
                <Typography >Total Product</Typography>
                </div>
                <div className='w-text'><Typography variant='h4'sx={{fontWeight: 'bold'}} >{totalProducts}</Typography></div>
                
            </div>

            <div className='widget-box'>
                <div className='top-icon-text'>
                <MonetizationOnIcon />
                <Typography >Total Store Value</Typography>
                </div>
                <div className='w-text'><Typography variant='h4'sx={{fontWeight: 'bold'}} >{totalValue}</Typography></div>
                
            </div>

            <div className='widget-box'>
                <div className='top-icon-text'>
                <RemoveShoppingCartIcon />
                <Typography >Out of Stock</Typography>
                </div>
                <div className='w-text'><Typography variant='h4'sx={{fontWeight: 'bold'}} >{outOfStock}</Typography></div>
                
            </div>

            <div className='widget-box'>
                <div className='top-icon-text'>
                <CategoryIcon />
                <Typography >No of Category</Typography>
                </div>
                <div className='w-text'><Typography variant='h4'sx={{fontWeight: 'bold'}} >{totalCategory}</Typography></div>
                
            </div>
        </div>
    </div>
    );
}

export default Widget;