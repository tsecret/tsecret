import React from 'react'
import { WishlistItem as WishlistItemType } from '../types'

import { kaspi, amazon, tesla } from '../assets';
import { Divider } from 'antd';

const WishlistItem = ({data}: any) => {
    const [item] = React.useState<WishlistItemType>(data);

    const calculateTime = () => {
        const now: number = new Date().getTime();
        const days: number = parseInt(((now - item.timeAdded) / (24 * 60 * 60 * 1000)).toFixed(0));
        return days? <span className="">In the list for <strong>{days}</strong> days</span> :
        <span className="">Just added today</span>
    }

    return (
        <div className="wishlist-item-container">
            <img src={item.urls.image} className='wishlist-item-image' alt="pic" />
            <span className="wishlist-item-name">{item.name}</span>
            {calculateTime()}
            {item.why && <span className="wishlist-item-reason">Why? {item.why}</span>}
            <div className="row" style={{ maxHeight: 50, position: "absolute", bottom: 10 }}>
                {item.urls.kaspi && <img onClick={() => window.open(item.urls.kaspi, "_blank")}  className="shop-icon" src={kaspi} alt="kaspi" />}
                {item.urls.amazon && <img onClick={() => window.open(item.urls.amazon, "_blank")} className="shop-icon" style={{ padding: 5 }} src={amazon} alt="amazon" />}
                {item.urls.tesla && <img onClick={() => window.open(item.urls.tesla, "_blank")} className="shop-icon" style={{ padding: 5 }} src={tesla} alt="tesla" />}
            </div>
        </div>
    )
}

export default WishlistItem;