import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/reusable/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import * as fbq from "../lib/fpixel";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // For FB Pixel
  useEffect(() => {
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Debox Consulting - Business Consulting Firm</title>
        <meta
          name="description"
          content="Partnering with SMEs, Family Managed Businesses and Startups in driving Growth, Culture & Sustainability."
        />
        <link rel="canonical" href="https://debox.co.in" />
        {/* Facebook Open Graph Tags */}
        <meta
          property="og:title"
          content="Debox Consulting - Business Consulting Firm"
        />
        <meta
          property="og:description"
          content="Partnering with SMEs, Family Managed Businesses and Startups in driving Growth, Culture & Sustainability."
        />
        {/* <meta
          property="og:image"
          content="https://your-website.com/og-image.png"
        />
        <meta property="og:url" content="https://your-website.com" /> */}
      </Head>
      {/* Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      {/* Google Tag Manager */}
      <Script
        id="google-tags"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=UA-101882907-1"
      />
      <Script id="google-tags-2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-101882907-1');`}
      </Script>
      {/* Linkedin */}
      <Script id="linkedin-tag" strategy="lazyOnload" type="text/javascript">
        <Script id="linkedin-tag2" type="text/javascript">
          {/* _linkedin_partner_id = "188619"; */}
          {`window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(188619);`}
        </Script>

        <Script id="linkedin-tag3" type="text/javascript">
          {`(function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=188619&fmt=gif"
          />
        </noscript>
      </Script>
      <AnimatePresence mode="wait">
        {/* clip-path: polygon(0 0, 100% 0, 100% 100%, 88% 12%);
         */}
        {/* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
         */}
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          key={router.route}
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            },
            exitState: {
              opacity: 0,
              clipPath: "polygon(50% 0,50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
