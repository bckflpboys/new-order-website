import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie Rating Pro vs Letterboxd - The Best Alternative 2025",
    description: "Compare Movie Rating Pro vs Letterboxd. Discover why AI auto-detection, custom rating fields, and local privacy make Movie Rating Pro the superior choice for serious cinephiles.",
    keywords: ["movie rating pro vs letterboxd", "letterboxd alternative", "best movie tracker", "private movie rating app", "AI movie logger"],
    openGraph: {
        title: "Movie Rating Pro vs Letterboxd - The Ultimate Comparison",
        description: "Stop typing, start watching. See why Movie Rating Pro is the smartest alternative to Letterboxd.",
        url: "https://movie-pro.32d.one/vs-letterboxd",
        type: "article",
    },
};

// FAQ Schema for Comparison
const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is there a free alternative to Letterboxd Pro?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Movie Rating Pro offers advanced statistics, custom rating fields, and data export completely for free, features that are typically locked behind the paid Pro/Patron tiers on Letterboxd."
            }
        },
        {
            "@type": "Question",
            "name": "Can I rate movies privately without a social profile?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Unlike Letterboxd which is a social network, Movie Rating Pro stores all your data locally on your device. It is 100% private with no public profile required."
            }
        },
        {
            "@type": "Question",
            "name": "Does Letterboxd have auto-detection?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, Letterboxd requires manual search and entry. Movie Rating Pro uses AI to automatically detect the movie you are watching on Netflix, Prime Video, and other sites, logging it instantly."
            }
        }
    ]
};

export default function ComparisonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
            />
            {children}
        </>
    );
}
