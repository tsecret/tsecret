export interface WishlistItem{
    name: string,
    alreadyPurchased: boolean,
    timeAdded: number,
    why?: string,
    sold?: boolean,
    urls: {
        image?: string,
        amazon?: string,
        kaspi?: string,
        tesla?: string,
        apple?: string,
    }
}

export interface Project {
    name: string,
    description: string,
    image?: string,
    url: string,
    frameworks?: string[]
}