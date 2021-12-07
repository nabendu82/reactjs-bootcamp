import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event) => {
        console.log('Mouse Event')
        setX(event.clientX);
        setY(event.clientY);
    }

    useEffect(() => {
        console.log('Hook useEffect called')
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    return (
        <h2>
            Hooks X - {x} Y - {y}
        </h2>
    )
}

export default HookMouse
