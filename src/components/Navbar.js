import React from 'react';

const Navbar = () => {
    return (
        <nav className={"bg-blue-100"}>
            <div className="container mx-auto py-4">

                <ul className={"flex justify-around"}>
                    <li>O'zbekistonliklar qayerlarda dam olmoqda?</li>

                    <li>Yurtimizga qaysi davlatlardan turistlar kelmoqda?</li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;