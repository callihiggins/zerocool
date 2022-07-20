import * as React from "react"
import { Helmet } from 'react-helmet';
import SITE_IMAGE from './assets/images/logo_with_black_text.jpg';

const PageHelmet = ({ keywords, title, image }) => {
  return (
    <>
      <Helmet title="ZeroCool Media">
        <meta property="og:image" content={SITE_IMAGE}/>
        <meta property="og:image:secure_url" content={SITE_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="ZeroCool Logo" />
        <meta property="og:image:width" content="1080"/>
        <meta property="og:image:height" content="1080"/>>
        <meta property="og:site_name" content="ZeroCool Media"/>
        <meta property="og:title" content="ZeroCool Media"/>
        <meta property="og:url" content="https://www.zerocool.tv"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="ZeroCool Media is a multidisciplinary production company"/>
        
        <meta itemprop="name" content="ZeroCool Media"/>
        <meta itemprop="url" content="https://www.zerocool.tv"/>
        <meta itemprop="description" content="ZeroCool Media is a multidisciplinary production company"/>
        <meta itemprop="thumbnailUrl" content={SITE_IMAGE}/>
        <link rel="image_src" content={SITE_IMAGE} />
        <meta itemprop="image" content={SITE_IMAGE}/>
        <meta name="twitter:title" content="ZeroCool Media"/>
        <meta name="twitter:image" content={SITE_IMAGE}/>
        <meta name="twitter:url" content="https://www.zerocool.tv"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content="ZeroCool Media is a multidisciplinary production company"/>
        <meta name="description" content="ZeroCool Media is a multidisciplinary production company"/>
      </Helmet>
    </>
  )
}

export default PageHelmet;