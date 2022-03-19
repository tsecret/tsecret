
import { WishlistItem } from '../components';
import { WishlistItem as WishlistItemType } from '../types';
import data from '../data';

const Wishlist = () => {

    return (
        <div className="page">
            <span className="page-title">Wishlist</span>
            <div className="alert">You are my friend or just a random stranger looking for a perfect gift for me? Those are the things I'm currently interested in 🙂</div>
            <div className="withlist-items">
                {data.wishlistItems.map((item: WishlistItemType, i: number) => <WishlistItem data={item} keyID={i}/> )}
            </div>
            {/* <div className="alert">
                Or you can donate some of your wealth directly to help me reach my goals faster
                <p>Card: 5304960002107222</p>
            </div> */}
        </div>
    )
}

export default Wishlist;
