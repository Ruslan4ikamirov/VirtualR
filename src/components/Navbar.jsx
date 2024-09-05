import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo and Branding */}
                    <div className="flex items-center shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}><a href={item.href} className="hover:text-orange-500">{item.label}</a></li>
                        ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <a href="#" className="py-2 px-3 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors delay-300 duration-500 ease-in">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white">Create an account</a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleNavbar} className="p-2">
                            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-neutral-900 shadow-lg p-4">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}><a href={item.href} className="block text-white hover:text-orange-500">{item.label}</a></li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-col space-y-4">
                            <a href="#" className="py-2 px-3 border border-orange-500 rounded-md text-center text-white hover:bg-orange-500 hover:text-white">Sign In</a>
                            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-center text-white">Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
