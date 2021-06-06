import Helmet from "react-helmet"
import React from "react"
import '../style/tailwind.css'


export default function SEO({ description, title, siteTitle }) {
    return (
        <Helmet>
            <title>{`${title}`}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"/>
            {/* <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={config.social.twitter} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} /> */}
        </Helmet>
    )
}