import type {Metadata} from "next";
import "./globals.css";
import {BrandingBlueMark, BrandingCharcoalMark, BrandingSnowMark} from "@/app/branding";

export const metadata: Metadata = {
    title: "Connect Buffalo",
    description: "Empowering our community with fast, affordable internet",
    icons: {
        icon: BrandingBlueMark,
        other: [
            {
                color: "dark",
                url: BrandingSnowMark,
            },
            {
                color: "light",
                url: BrandingCharcoalMark,
            },
        ],
    },
};

const giveButterCode = `window.Givebutter=window.Givebutter||function(){(Givebutter.q = Givebutter.q || []).push(arguments)};Givebutter.l=+new Date; window.Givebutter('setOptions', {accountId: "${process.env.NEXT_PUBLIC_GIVEBUTTER_ID}",});`
const gtagCode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`
export default function RootLayout({children}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <head>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
            <script dangerouslySetInnerHTML={{__html: gtagCode}}></script>
            <script
                async
                src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${process.env.NEXT_PUBLIC_GIVEBUTTER_ID}&p=other`}
            ></script>
            <script async src="https://js.givebutter.com/elements/latest.js"></script>
            <script dangerouslySetInnerHTML={{__html: giveButterCode}}></script>
        </head>
        <body>{children}</body>
        </html>
    );
}
