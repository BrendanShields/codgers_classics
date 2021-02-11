import React from 'react'
import { Link } from 'react-router-dom';
import { CodgersClassicsLogo } from '../assets/CodgersClassicsLogo';

export const Nav = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {CodgersClassicsLogo}
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to='/' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                    <Link to='/movies' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</Link>
                                    <Link to='/search' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}