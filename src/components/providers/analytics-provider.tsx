'use client'

import React from 'react'

import Script from 'next/script'

// Note: PostHog is initialized via instrumentation-client.ts (Next.js 15.3+ recommended approach)
// This provider now only handles GA and Clarity - PostHog is globally available via `import posthog from 'posthog-js'`

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Google Analytics 4 */}
            {process.env.NEXT_PUBLIC_GA_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                        `}
                    </Script>
                </>
            )}

            {/* Microsoft Clarity */}
            {process.env.NEXT_PUBLIC_CLARITY_ID && (
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                    `}
                </Script>
            )}
            {children}
        </>
    )
}
