import React from 'react'
import { WishlistItem as WishlistItemType } from '../types'

import { kaspi, amazon, tesla } from '../assets';

const WishlistItem = ({data, keyID}: any) => {
    const [item] = React.useState<WishlistItemType>(data);

    const calculateTime = () => {
        const now: number = new Date().getTime();
        const days: number = parseInt(((now - item.timeAdded) / (24 * 60 * 60 * 1000)).toFixed(0));
        return days? <span className="">In the list for <strong>{days}</strong> days</span> :
        <span className="">Just added today</span>
    }
    
    return (
        <>

        <input type="checkbox" id={`buy-modal-${keyID}`} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Thank you for your interest in {item.name}!</h3>
                <p className="py-4">You can purchase this item using links below:</p>
                
                <div className="btn-group">
                    {item.urls.kaspi && <button className="btn" onClick={() => window.open(item.urls.kaspi, "_blank")}>Kaspi</button> }
                    {item.urls.amazon && <button className="btn" onClick={() => window.open(item.urls.amazon, "_blank")}>Amazon</button> }
                    {item.urls.apple && <button className="btn" onClick={() => window.open(item.urls.apple, "_blank")}>Apple</button> }
                    {item.urls.tesla && <button className="btn" onClick={() => window.open(item.urls.tesla, "_blank")}>Tesla</button> }
                </div>

                <div className="modal-action">
                    <label htmlFor={`buy-modal-${keyID}`} className="btn">Back 🥺</label>
                </div>
            </div>
        </div>

        <div className={`card w-72 bg-white shadow-xl pt-4 m-2 ${item.alreadyPurchased ? "opacity-25" : "hover:-translate-y-2 transition-all duration-200"}`}>
            <figure className="flex flex-col items-center"><img src={item.urls.image} alt="pic" className="w-9/12" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                {!item.alreadyPurchased && calculateTime()}
                {item.why && <p>Why? {item.why}</p>}
                <div className="card-actions justify-end">
                    {item.alreadyPurchased?
                    <button className="btn btn-secondary cursor-not-allowed">GOT IT</button>
                    : <label htmlFor={`buy-modal-${keyID}`} className="btn btn-primary">Buy now</label> }
                </div>
            </div>
        </div>
        </>
    )
}

export default WishlistItem;