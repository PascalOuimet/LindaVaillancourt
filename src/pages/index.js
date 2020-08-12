import React, { useState, useEffect, useCallback } from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');
  const [wrapperRef, setWrapperRef] = useState(null);

  const images = useStaticQuery(graphql`
query {
  bg: file(relativePath: { eq: "bg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1920, quality:50) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
`)

  const handleOpenArticle = article => {
    setIsArticleVisible(!isArticleVisible)
    setArticle(article)

    setTimeout(() => {
      setIsTimeout(!isTimeout)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(!articleTimeout)
    }, 350)
  }

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(!articleTimeout)

    setTimeout(() => {
      setIsTimeout(!isTimeout)
    }, 325)

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible)
      setArticle('')
    }, 350)
  }, [articleTimeout, isArticleVisible, isTimeout])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef && !wrapperRef.contains(event.target) && event.clientX < document.documentElement.offsetWidth) {
        if (isArticleVisible) {
          handleCloseArticle()
        }
      }
    }

    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [wrapperRef, isArticleVisible, handleCloseArticle]);

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
        <div id="bg"><Img fluid={images.bg.childImageSharp.fluid} alt="Background" /></div>
      </div>
    </Layout>
  )
}

export default IndexPage
