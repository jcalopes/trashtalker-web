import { useState } from 'react'

const useHome = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    return { navigation, mobileMenuOpen, setMobileMenuOpen }
}

export default useHome
