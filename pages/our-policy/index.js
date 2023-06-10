import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import DesktopTopBar from '/pages/Components/nav-bar/desktop-top-bar.js';
import MobileTopBar from '/pages/Components/nav-bar/mobile-top-bar.js';
import TabletTopBar from '/pages/Components/nav-bar/tablet-top-bar';
import DesktopNavBar from '/pages/Components/nav-bar/desktop-nav-bar.js';
import TabletNavBar from '/pages/Components/nav-bar/tablet-nav-bar.js';
import MobileNavBar from '/pages/Components/nav-bar/mobile-nav-bar.js';
import MobileBottomNavBar from '/pages/Components/nav-bar/mobile-bottom-nav-bar.js';
import DesktopFooter from '/pages/Components/footer/desktop-footer';
import MobileFooter from '/pages/Components/footer/mobile-footer';
import TabletFooter from '/pages/Components/footer/tablet-footer';
import ContentOurPolicy from '/pages/our-policy/content-our-policy';

import { headerInput } from '/pages/core/info';

export default function OurPolicy() {
  if (process.browser){
    document.oncontextmenu = new Function("return false;");
  }
  return (
    <>
      <Head>
          <title>{headerInput.headerTitle}</title>
          <meta name="description" 
            content= {headerInput.metaDescription} />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link rel="icon" href={headerInput.relIcon} />
          <link rel="canonical" href={headerInput.relCanonical} />
          <link rel="alternate" hrefLang="en" href={headerInput.relCanonical} />
          <link rel="alternate" href={headerInput.relCanonical} hrefLang="x-default" />

          <meta name="geo.position" content={headerInput.metaGeoPosition} />
          <meta name="geo.placename" content={headerInput.metaGeoPlaceName} />
          <meta name="geo.region" content={headerInput.metaGeoRegion} />

          <meta property="og:site_name" content={headerInput.metaOgSiteName} />
          <meta property="og:locale" content={headerInput.metaOgLocale} />
          

          <meta property='og:title' content={headerInput.metaOgTitle} />
          <meta property='og:image' content={headerInput.metaOgImage} />
          <meta property='og:description' 
            content={headerInput.metaDescription} />
          <meta property='og:url' content={headerInput.relCanonical} />
          <meta property='og:image:width' content={headerInput.metaOgImageWidth} />
          <meta property='og:image:height' content={headerInput.metaOgImageHeight} />
          <meta property="og:type" content='website' />

        </Head>
      <div className="page-container">
            <div className="page-nav-bar">
              <div className="page-top-bar">
                <div className="page-desktop-top-bar">
                  <DesktopTopBar />
                </div>
                <div className="page-mobile-top-bar">
                  <MobileTopBar />
                </div>
                <div className="page-tablet-top-bar">
                  <TabletTopBar />
                </div>
              </div>
              <div className="page-nav-bar">
                <div className="page-mobile-nav-bar">
                  <MobileNavBar />
                </div>
                <div className="page-tablet-nav-bar">
                  <TabletNavBar />
                </div>
                <div className="page-desktop-nav-bar">
                  <DesktopNavBar />
                </div>
              </div>
              <div className="page-bottom-nav-bar">
                <div className="mobile-bottom-nav-bar">
                  <MobileBottomNavBar />
                </div>
              </div>
            </div>

            <div className="our-policy-content">
              <ContentOurPolicy />
            </div>
            <div className="page-footer">
              <div className="page-desktop-footer">
                <DesktopFooter />
              </div>
              <div className="page-mobile-footer">
                <MobileFooter />
              </div>
              <div className="page-tablet-footer">
                <TabletFooter />
              </div>
            </div>  
          </div>


    </>
  )
}
