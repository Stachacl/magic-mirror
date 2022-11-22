import React, { useEffect, useState } from 'react'

export default function Day() {
    const [dayState, setDayState] = useState ();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDayState(date.toLocaleDateString());
        }, 1000) //how often clock should be updated - every 1 second.
    }, []);

  return (
    <div>{dayState}</div>
  )
}
