import React from 'react';

const Navbar = () => {
    return (
        <nav className={"sticky top-0 text-white font-bold bg-transparent"}>
                <marquee>
                    {/*<ul className={"flex justify-around"}>*/}
                        <span  className={"cursor-pointer mx-4 hover:text-blue-500 select-none"}>O'zbekistonliklar qayerlarda dam olmoqda?</span>

                        <span  className={"cursor-pointer mx-4 hover:text-blue-500 select-none"}>Yurtimizga qaysi davlatlardan turistlar kelmoqda?</span>

                        <span className={"cursor-pointer mx-4 hover:text-blue-500 select-none"}>O'zbekistonliklar qaysi davlatlarga vizasiz sayohat qilsa bo'ladi?</span>

                        <span className={"cursor-pointer mx-4 hover:text-blue-500 select-none"}>Eng mashxur turistik shaxarlar?</span>
                        <span className={"cursor-pointer mx-4 hover:text-blue-500 select-none"}><a href="#famous-places">Eng mashxur joylar?</a> </span>

                    {/*</ul>*/}
                </marquee>
        </nav>
    );
};

export default Navbar;