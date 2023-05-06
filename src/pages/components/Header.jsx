import React from 'react'
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { BiLogIn, BiLogOut } from "react-icons/bi"

function HeaderComp() {
    return (
        <header className='header'>
            {/* <h1>Natours</h1> */}
            <Link href="/MainPage">
                    <h1 >Natours</h1>
                </Link>
            <div className='btn-group'>
                <Link href="/Login">
                    <Button rightIcon={<BiLogIn />} colorScheme='whiteAlpha' >Login</Button>
                </Link>
                <Link href={"/SignUp"}>
                    <Button colorScheme='blackAlpha'>SignUp</Button>
                </Link>
            </div>
        </header>
    );

}

export default HeaderComp
