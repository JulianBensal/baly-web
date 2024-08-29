"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletterPopupShown')) {
        setIsVisible(true)
      }
    }, 5000) // Mostrar después de 5 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('newsletterPopupShown', 'true')
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return false

    const [, domain] = email.split('@')
    const domainParts = domain.split('.')
    const tld = domainParts[domainParts.length - 1]
    const secondLevelDomain = domainParts[domainParts.length - 2]

    const validTLDs = ['com', 'org', 'net', 'edu', 'gov', 'mil', 'io', 'co', 'us', 'uk', 'ca', 'au', 'de', 'fr', 'es', 'it', 'jp', 'ru', 'cn', 'in', 'br', 'mx', 'ar', 'cl', 'pe', 'co', 've', 'ec', 'bo', 'uy', 'py']
    const validSecondLevelDomains = ['com', 'org', 'net', 'edu', 'gov', 'mil']

    return validTLDs.includes(tld) || (validSecondLevelDomains.includes(secondLevelDomain) && validTLDs.includes(tld))
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    setIsValidEmail(validateEmail(newEmail))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidEmail) {
      console.log('Email subscrito:', email)
      alert("¡Suscripción exitosa! Gracias por suscribirte a nuestras novedades.")
      handleClose()
    }
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFD700',
        padding: '16px',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '16px' }}>
          <h2 style={{ color: '#000', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>¡Suscríbete a nuestras novedades!</h2>
          <p style={{ color: '#000', fontSize: '0.875rem', marginBottom: '8px' }}>Recibe las últimas noticias y ofertas especiales de Baly.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: '8px' }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={handleEmailChange}
              style={{
                flex: 1,
                marginRight: '8px',
                padding: '8px',
                borderRadius: '4px',
                border: isValidEmail || !email ? '1px solid #ccc' : '1px solid red',
                color: isValidEmail || !email ? '#000' : 'red',
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#000',
                color: '#FFD700',
                padding: '8px 16px',
                borderRadius: '4px',
                border: 'none',
                cursor: isValidEmail && email ? 'pointer' : 'not-allowed',
              }}
              disabled={!isValidEmail || !email}
            >
              Suscribirse
            </button>
          </div>
          {!isValidEmail && email && (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>Por favor, ingresa un correo electrónico válido.</p>
          )}
        </form>
        <button
          onClick={handleClose}
          style={{
            marginLeft: '16px',
            color: '#000',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <X style={{ width: '24px', height: '24px' }} />
          <span style={{ display: 'none' }}>Cerrar</span>
        </button>
      </div>
    </div>
  )
}