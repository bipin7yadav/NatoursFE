import React, { useEffect, } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import Card from './components/Card'

function MainPage() {
    const { GetAllTours, state: { tours } } = useAuthContext()

    useEffect(() => {
        async function fetchData() {
            let res = await GetAllTours()
        }
        fetchData();
    }, [])
    console.log("tours :", tours);
    return (
        <div className='card-container'>

                {
                    tours.map((a) => {
                        return (
                            <>
                            <Card tour={a}/>
                            </>
                        )
                    })
                }
        </div>
    )
}

export default MainPage
