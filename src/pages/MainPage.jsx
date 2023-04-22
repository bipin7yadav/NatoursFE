import React, { useEffect, } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'

function MainPage() {
    const { GetAllTours, state: { tours } } = useAuthContext()

    useEffect(() => {
        async function fetchData() {
            let res = await GetAllTours()
        }
        fetchData();
    }, [])
    console.log("tours :", tours.map((a) => a.name));
    return (
        <div>
            Tours

            <ol>

                {
                    tours.map((a) => {
                        return (

                            <li key={a.id}>{a.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default MainPage
