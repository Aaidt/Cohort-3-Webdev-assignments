import { atom, selector } from "recoil";


export const WishListItemAtom = atom({
    key: "WishListItems",
    default: [
        {
            id: 1,
            image: "https://imgs.search.brave.com/MNq3b3vDFyfbGWbl5R4OlABBRdGuzere1F0QSYnlgdU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWRy/YWdvbnNob3AuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21pbmlr/ZXlib2FyZC5wbmc_/dj0xNjI5NDUyOTU0/JndpZHRoPTUzMw",
            title: "Redragon keyboard",
            price: "2322"
        },
        {
            id: 2,
            image: "https://imgs.search.brave.com/mys1XMYdNmHBfkDVHbstlsKlYx377C6yn0K8ZWaStxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMubGVncmFu/ZC51cy8yMjB0aF9z/bV9ja3Y5SHFzUnR0/dTYuanBnPzE2MjU3/MDY3NDQ",
            title: "USB C adapter",
            price: "399"
        },
        {
            id: 3,
            image: "https://imgs.search.brave.com/fgKw8DgbujkSrROBlgERC22VB-pfOLdGSw3nZB4zC6w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1Lzg5LzIx/LzM2MF9GXzY1ODky/MTU0X21HcTQ3UzRJ/TlF3Tk1aQTBDSUVC/cDJ6d3FyMW5aRFZC/LmpwZw",
            title: "Computer Monitor",
            price: "10,999"
        },
        {
            id: 4,
            image: "https://imgs.search.brave.com/zwA-AwNuDxCYsJs3eJqhv32CVHq_qEHsNkfNGH8PfrM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYWlyLXJlZC1i/b3hpbmctZ2xvdmVz/LWlzb2xhdGVkXzEz/Njg3NS05NTAuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
            title: "Boxing gloves",
            price: "5999"
        }
    ]
})