import React, { useEffect, useState } from 'react'

export default function Date() {
    const [dateState, setDateState] = useState ();

    useEffect(() => {
        setInterval(() => {
            const dateFetched = new dateFetched();
            setDateState(dateFetched.toLocaleDateString());
        }, 1000) //how often clock should be updated - every 1 second.
    }, []);
    
  return (
    <div>{dateState}</div>
  )
}
