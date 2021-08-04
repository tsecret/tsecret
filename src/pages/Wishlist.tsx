import React from 'react'

import { Button } from 'antd';
import { WishlistItem } from '../components';
import { WishlistItem as WishlistItemType } from '../types';
import data from '../data';

const Wishlist = () => {

    return (
        <div className="page">
            <span className="header">Wishlist</span>
            <span className="desc">You are my friend or just a random stranger looking for a perfect gift for me? Those are the things I'm currently interested in 🙂</span>
            <div className='wishlist-container'>
                {data.wishlistItems.map((item: WishlistItemType) => <WishlistItem data={item}/> )}
            </div>
            <Button className="button" href="/">Back, you sure?</Button>
        </div>
    )
}

export default Wishlist;