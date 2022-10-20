import { createContext, useState } from 'react'
import { Navbar, Homepage, MobileSidebar, PhotosModal } from './components/'
import img1small from './assets/images/image-product-1-thumbnail.jpg'
import img2small from './assets/images/image-product-2-thumbnail.jpg'
import img3small from './assets/images/image-product-3-thumbnail.jpg'
import img4small from './assets/images/image-product-4-thumbnail.jpg'
import img1big from './assets/images/image-product-1.jpg'
import img2big from './assets/images/image-product-2.jpg'
import img3big from './assets/images/image-product-3.jpg'
import img4big from './assets/images/image-product-4.jpg'
import { CartItem, Photo, AppContextInterface } from './components/types'

export const AppContext = createContext<AppContextInterface>({
    isItemAddedToCart: false,
    setIsItemAddedToCart: () => {},
})

function App() {
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isPhotosModalOpen, setIsPhotosModalOpen] = useState<boolean>(false)
    const photos: Photo[] = [
        {
            id: 0,
            small: img1small,
            big: img1big,
            isActive: true,
            isLarge: false,
        },
        {
            id: 1,
            small: img2small,
            big: img2big,
            isActive: false,
            isLarge: false,
        },
        {
            id: 2,
            small: img3small,
            big: img3big,
            isActive: false,
            isLarge: false,
        },
        {
            id: 3,
            small: img4small,
            big: img4big,
            isActive: false,
            isLarge: false,
        },
    ]
    const [isItemAddedToCart, setIsItemAddedToCart] = useState<boolean>(false)
    const [activePhoto, setActivePhoto] = useState<Photo>(photos[0])

    return (
        <div className='app'>
            <AppContext.Provider
                value={{
                    isItemAddedToCart: isItemAddedToCart,
                    setIsItemAddedToCart: setIsItemAddedToCart,
                }}
            >
                <div className='app-container'>
                    <Navbar
                        setIsSidebarOpen={setIsSidebarOpen}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        isCartOpen={isCartOpen}
                        setIsCartOpen={setIsCartOpen}
                    />
                    <Homepage
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        isPhotosModalOpen={isPhotosModalOpen}
                        setIsPhotosModalOpen={setIsPhotosModalOpen}
                        photos={photos}
                        activePhoto={activePhoto}
                        setActivePhoto={setActivePhoto}
                    />
                </div>
                <MobileSidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <PhotosModal
                    setIsPhotosModalOpen={setIsPhotosModalOpen}
                    isPhotosModalOpen={isPhotosModalOpen}
                    photos={photos}
                    activePhoto={activePhoto}
                    setActivePhoto={setActivePhoto}
                />
            </AppContext.Provider>
        </div>
    )
}

export default App
