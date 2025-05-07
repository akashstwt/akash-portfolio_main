import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState, useEffect } from "react";
// import NEXT_PUBLIC_GA_TRACKING_ID form .env
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
// global.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
// import useRouter
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <SpeedInsights />
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default MyApp;
