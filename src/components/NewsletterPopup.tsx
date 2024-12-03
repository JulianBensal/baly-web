import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import LataBaly from '../assets/Gustos/Tradicional_473ml.webp'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const [shakeImages, setShakeImages] = useState(false)

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
      setShowNotification(true)
      setShakeImages(true)
      setTimeout(() => {
        setShowNotification(false)
        setShakeImages(false)
        handleClose()
      }, 3000)
    }
  }

  if (!isVisible) return null

  return (
    <>
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
          width: '100%',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div
            className={shakeImages ? 'shake' : ''}
            style={{
              width: '60px',
              height: '120px',
              backgroundImage: `url(${LataBaly})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'absolute',
              left: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          <div style={{ flex: 1, marginRight: '16px', minWidth: '200px', marginBottom: '8px' }}>
            <h2 style={{ color: '#000', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>¡Suscríbete a nuestras novedades!</h2>
            <p style={{ color: '#000', fontSize: '0.875rem', marginBottom: '8px' }}>Recibe las últimas noticias y ofertas especiales de Baly.</p>
          </div>
          <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: '200px' }}>
            <div style={{ display: 'flex', marginBottom: '8px', flexWrap: 'wrap' }}>
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
                  marginBottom: '8px', // Margin bottom para móviles
                  minWidth: '150px',
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
                  minWidth: '150px',
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
          <div
            className={shakeImages ? 'shake' : ''}
            style={{
              width: '60px',
              height: '120px',
              backgroundImage: `url(${LataBaly})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'absolute',
              right: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
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
      {showNotification && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '16px',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1001,
            textAlign: 'center',
          }}
        >
          ¡Suscripción exitosa! Gracias por suscribirte a nuestras novedades.
        </div>
      )}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateY(-50%) rotate(0deg); }
            25% { transform: translateY(-50%) rotate(5deg); }
            50% { transform: translateY(-50%) rotate(0deg); }
            75% { transform: translateY(-50%) rotate(-5deg); }
            100% { transform: translateY(-50%) rotate(0deg); }
          }
          .shake {
            animation: shake 0.5s ease-in-out infinite;
          }
        `}
      </style>
    </>
  )
}