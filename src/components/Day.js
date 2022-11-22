import React, { useEffect, useState } from 'react'

export default function Day() {
    const [dayState, setDayState] = useState ();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDayState(date.toLocaleDateString());
        }, 60000) //how often clock should be updated - every 60 seconds.
    }, []);

  return (
    <div>{dayState}</div>
  )
}
