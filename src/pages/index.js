import React, { useState, useEffect, useCallback, useRef } from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = props => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  const wrapperRef = useRef(null);

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
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && event.clientX < document.documentElement.offsetWidth) {
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
            setWrapperRef={wrapperRef}
          />
          <Footer timeout={isTimeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
