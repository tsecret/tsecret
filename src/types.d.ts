export interface WishlistItem{
    name: string,
    alreadyPurchased: boolean,
    timeAdded: number,
    why?: string,
    urls: {
        image: string,
        amazon: string,
        kaspi?: string,
        tesla?: string,
    }
}