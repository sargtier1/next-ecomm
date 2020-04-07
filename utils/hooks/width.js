import React, { useState, useEffect } from 'react'

export default function useViewport() {
  const isWindowClient = typeof window === 'object'

  const [width, setWidth] = React.useState(
    isWindowClient ? window.innerWidth : undefined
  )

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  // Return the width so we can use it in our components
  return { width }
}
