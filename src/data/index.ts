import { Project, WishlistItem } from "../types"
import { reserved } from "../assets"

const wishlistItems: WishlistItem[] = [
    {
        name: "Apple Pro Display XDR",
        alreadyPurchased: false,
        timeAdded: 1647645575000,
        why: "To code in XDR",
        urls: {
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/pro-display-hero?wid=820&hei=474&fmt=jpeg&qlt=80&.v=1572384750703",
            apple: "https://www.apple.com/shop/buy-mac/pro-display-xdr",
            amazon: "https://www.amazon.com/Apple-32-inch-Pro-Display-Retina/dp/B082M1P2ZQ/ref=sr_1_2?keywords=apple+xdr+pro+display&qid=1647645645&sprefix=apple+xdr%2Caps%2C172&sr=8-2"
        }
    },
    {
        name: "Tesla Model X Plaid",
        alreadyPurchased: false,
        timeAdded: 1620023067000,
        why: "2.5s 0-100, 1020HP",
        urls: {
            image: "https://alatp-photos-kl.kcdn.kz/webp/98/9819b826-7479-4087-bcf9-4524e12690e2/1-full.webp",
            tesla: "https://www.tesla.com/modelx"
        }
    },
    {
        name: "GeForce RTX 3090",
        alreadyPurchased: false,
        timeAdded: 1625442873000,
        why: "I only have 90FPS in Warzone",
        urls: {
            image: "https://m.media-amazon.com/images/I/61shiWYCJxL._AC_SL1024_.jpg",
            kaspi: "https://kaspi.kz/shop/p/palit-rtx3090-gamingpro-24gb-100767424/?c=710000000",
            amazon: "https://www.amazon.com/MSI-GeForce-RTX-3090-VENTUS/dp/B08HR9D2JS/ref=sr_1_4?dchild=1&keywords=rtx+3090&qid=1628013498&sr=8-4"
        }
    },
    {
        name: "Apple AirPods Pro",
        alreadyPurchased: true,
        timeAdded: 1622850873000,
        why: "To watch Dynasty on the plane",
        urls: {
            image: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
            kaspi: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=710000000",
            amazon: "https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=sr_1_3?dchild=1&keywords=airpods+pro&qid=1628014056&sr=8-3"
        },
    },
    {
        name: "Paintball gun",
        alreadyPurchased: false,
        timeAdded: 1628058861000,
        why: "No reason :)",
        urls: {
            image: "https://m.media-amazon.com/images/I/71smNBfLr9L._AC_SL1500_.jpg",
            amazon: "https://www.amazon.com/JT-ER2-Pump-Pistol-RTS/dp/B00L6ATCSO/ref=sr_1_3?dchild=1&keywords=paintball+gun&qid=1628058826&sr=8-3"
        }
    },
]

const projects: Project[] = [
    {
        name: "Vault",
        description: "Password manager. Generate random passwords for different services like Google or Netflix and save them using a keyword",
        url: "https://github.com/TSecretT/vault",
        image: "https://repository-images.githubusercontent.com/322893937/2e7b3d92-b091-40cc-8200-813ef11ec2d9",
        frameworks: ["React", "FastAPI", "Tailwind CSS"]
    },
    {
        name: "Lemon NFT",
        description: "Free NFT marketplace where people can upload their own picture, video or GIF into NFT and sell or buy with others",
        image: "https://raw.githubusercontent.com/TSecretT/nft-generator/master/src/assets/NFT.png",
        url: "https://github.com/TSecretT/nft-generator",
        frameworks: ["React", "Firebase", "ERC20", "Solidity"]
    },
    {
        name: "Faceit tips",
        description: "Web tool that parses current match's data and displays the performance, optimal map, and other statistics versus your enemy",
        url: "https://github.com/TSecretT/faceit-tips",
        image: "https://github.com/TSecretT/faceit-tips/blob/master/src/assets/FACEITTIPS.png?raw=true",
        frameworks: ["React", "Faceit API", "Firebase"]
    },
    {
        name: "SpaceX Edu",
        description: "Fun-based app that for educational purposes",
        url: "https://github.com/TSecretT/spacex-edu",
        image: "https://github.com/TSecretT/spacex-edu/blob/main/src/assets/preview.png?raw=true",
        frameworks: ["React", "SpaceX API", "TailwindCSS", "DaisyUI"]
    },
    {
        name: "Got any idea?",
        description: "Feel free to propose your idea",
        url: "/#contact",
        image: reserved,
        frameworks: ["Python", "NodeJS", "TypeScript", "React", "React Native", "Expo", "Arduino", "RasPi"]
    },
]

export default {
    wishlistItems,
    projects
}