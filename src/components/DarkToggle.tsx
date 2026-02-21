import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

export function DarkModeToggle(): React.ReactElement {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <label
      htmlFor="dark-mode-toggle"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        marginRight: '10rem',
      }}
    >
      <Switch
        id="dark-mode-toggle"
        checked={isDark}
        onChange={setIsDark}
        checkedIcon={<div style={{ paddingLeft: 4 }}>🌙</div>}
        uncheckedIcon={<div style={{ paddingRight: 4 }}>🔆</div>}
        onColor="#343a40"
        offColor="#dee2e6"
        aria-label="Dark mode toggle"
      />
    </label>
  )
}
