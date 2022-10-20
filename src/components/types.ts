export interface CartItem {
    id: number
    photo: string
    title: string
    price: number
    amount: number
}

export interface Photo {
    id: number
    small: string
    big: string
    isActive: boolean
    isLarge: boolean
}

export interface HomepageProps {
    cartItems: CartItem[]
    setCartItems: Function
    isPhotosModalOpen: boolean
    setIsPhotosModalOpen: Function
    photos: Photo[]
    activePhoto: Photo
    setActivePhoto: Function
}

export interface AppContextInterface {
    isItemAddedToCart: boolean | undefined
    setIsItemAddedToCart: Function
}

export interface NavbarProps {
    setIsSidebarOpen: Function
    cartItems: CartItem[]
    setCartItems: Function
    isCartOpen: boolean
    setIsCartOpen: Function
}

export interface PhotosModalProps {
    setIsPhotosModalOpen: Function
    isPhotosModalOpen: boolean
    photos: Photo[]
    activePhoto: Photo
    setActivePhoto: Function
}

export interface CartProps {
    isCartOpen: boolean
    cartItems: CartItem[]
    setCartItems: Function
}
