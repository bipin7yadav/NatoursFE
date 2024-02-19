import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import styles from '@/styles/Home.module.css'
import Card from './components/Card'
import { Button, Menu, MenuButton, MenuGroup, MenuList, MenuItem, MenuDivider, Avatar, Drawer, DrawerBody, DrawerOverlay,
     DrawerHeader, DrawerContent, useDisclosure,Box,FormLabel,IconButton} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from 'next/link'


function MainPage() {
    const { GetAllTours, state: { tours } } = useAuthContext()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')

    useEffect(() => {
        async function fetchData() {
            let res = await GetAllTours()
        }
        fetchData();
    }, [])
    console.log("tours :", tours);
    return (
        <div style={{ position: 'relative' }}>
            <div className={styles.fixedHeader}>
                <div>
                    <Button onClick={onOpen}>
                        <HamburgerIcon boxSize={6} />
                    </Button>
                    <Drawer height="50%" placement={placement} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                            <DrawerBody>
                                <Box>
                                    <Link href='/'><FormLabel>Home</FormLabel></Link>
                                    <Link href="/Admin">
                                    <FormLabel>Admin</FormLabel>
                                    </Link>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div>
                    <Menu>
                        <MenuButton   >
                            <Avatar name='Bipin Yadav' src='https://bit.ly/broken-link' />
                        </MenuButton>
                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem><Link href="/account">My Account</Link></MenuItem>
                                <MenuItem>Bookings </MenuItem>
                                <MenuItem><Link href="Login">Login</Link></MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </MenuGroup>
                            {/* <MenuDivider />
                            <MenuGroup title='Help'>
                                <MenuItem>Docs</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                            </MenuGroup> */}
                        </MenuList>
                    </Menu>
                </div>
            </div>

            <div className='card-container'>

                {
                    tours.map((a) => {
                        return (
                            <>
                                <Card tour={a} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage
