import React, { useState, useEffect, useCallback } from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { useStaticQuery, graphql } from 'gatsby'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  const siteUrl = data.site.siteMetadata.siteUrl
  const canonicalUrl = `${siteUrl}/`
  const description = "Travailleuse sociale a Salaberry-de-Valleyfield offrant suivi psychosocial et evaluations psychosociales pour homologation d'un mandat de protection ou ouverture de tutelle."
  const ogImage = `${siteUrl}/icon_color.png`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Linda Vaillancourt - Travailleuse sociale',
    url: siteUrl,
    description,
    telephone: '+1-450-807-2449',
    image: ogImage,
    areaServed: 'Salaberry-de-Valleyfield, Quebec, Canada',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '63, rue Saint-Jean-Baptiste bureau #203',
      addressLocality: 'Salaberry-de-Valleyfield',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
  }

  return (
    <>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_CA" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  )
}

const IndexPage = props => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [isTimeout, setIsTimeout] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')
  const [wrapperRef, setWrapperRef] = useState(null)
  const [showAvailabilityNotice, setShowAvailabilityNotice] = useState(false)

  const handleOpenArticle = article => {
    setIsArticleVisible(!isArticleVisible)
    setArticle(article)

    setTimeout(() => setIsTimeout(!isTimeout), 325)
    setTimeout(() => setArticleTimeout(!articleTimeout), 350)
  }

  const handleCloseArticle = useCallback(() => {
    if (isArticleVisible) {
      setArticleTimeout(!articleTimeout)

      setTimeout(() => setIsTimeout(!isTimeout), 325)

      setTimeout(() => {
        setIsArticleVisible(false)
        setArticle('')
      }, 350)
    }
  }, [articleTimeout, isArticleVisible, isTimeout])

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef && !wrapperRef.contains(event.target) && event.clientX < document.documentElement.offsetWidth) {
        handleCloseArticle()
      }
    }

    const timeoutId = setTimeout(() => setLoading(''), 100)

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef, isArticleVisible, handleCloseArticle])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const noticeDismissed = window.localStorage.getItem('availability-notice-dismissed')

    if (!noticeDismissed) {
      const noticeTimeoutId = setTimeout(() => setShowAvailabilityNotice(true), 1200)
      return () => clearTimeout(noticeTimeoutId)
    }

    return undefined
  }, [])

  const handleCloseAvailabilityNotice = () => {
    setShowAvailabilityNotice(false)

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('availability-notice-dismissed', 'true')
    }
  }

  return (
    <Layout location={props.location}>
      <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={isTimeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={isTimeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={isTimeout} />
        </div>
        {showAvailabilityNotice && !isArticleVisible && (
          <aside
            className="availability-notice"
            aria-label="Notification de disponibilités rapides"
          >
            <button
              type="button"
              className="availability-notice-close"
              aria-label="Fermer la notification"
              onClick={handleCloseAvailabilityNotice}
            >
              ×
            </button>
            <p className="availability-notice-eyebrow">Disponibilités rapides</p>
            <p className="availability-notice-text">
              Évaluations psychosociales disponibles rapidement pour l’homologation d’un mandat de protection
              ou l’ouverture de tutelle au majeur.
            </p>
          </aside>
        )}
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
