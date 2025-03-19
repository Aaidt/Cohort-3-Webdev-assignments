import { atom } from "recoil";

export const cartItemsState = atom({
    key: "CartItems",
    default: [
        {
            id: 1,
            image: "https://imgs.search.brave.com/MNq3b3vDFyfbGWbl5R4OlABBRdGuzere1F0QSYnlgdU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWRy/YWdvbnNob3AuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21pbmlr/ZXlib2FyZC5wbmc_/dj0xNjI5NDUyOTU0/JndpZHRoPTUzMw",
            title: "Redragon Keyboard",
            price: "2322",
            quantity: 1
        },
        {
            id: 2,
            image: "https://imgs.search.brave.com/mys1XMYdNmHBfkDVHbstlsKlYx377C6yn0K8ZWaStxc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMubGVncmFu/ZC51cy8yMjB0aF9z/bV9ja3Y5SHFzUnR0/dTYuanBnPzE2MjU3/MDY3NDQ",
            title: "USB C adapter",
            price: "399",
            quantity: 1
        }
    ]
}) 