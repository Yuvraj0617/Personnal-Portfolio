import React from 'react'


export default function Footer() {
    return (
        <div className="bg-black py-2">
            <div className="mt-3">
                <p className="text-white text-center">
                    &copy; {new Date().getFullYear()} Yubraj Sapkota. All rights reserved.
                </p>
            </div>
        </div>
    )
}
