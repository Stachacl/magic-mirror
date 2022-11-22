import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [clockState, setClockState] = useState ();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleDateString())

        }, 1000) //how often clock should be updated - every 1 second.
    })
  return (
    <div>Clock</div>
  )
}
