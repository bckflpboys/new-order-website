import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works - Movie Rating Pro Guide",
    description: "Learn how to use Movie Rating Pro's AI-powered features. A step-by-step guide to automatic title detection, custom rating fields, and data management.",
    keywords: ["how to use movie rating pro", "movie rating guide", "AI movie detection tutorial", "chrome extension guide", "movie tracking tutorial"],
    openGraph: {
        title: "How It Works - Movie Rating Pro Guide",
        description: "Master the art of movie rating with our AI-powered tools. Complete guide to features and usage.",
        url: "https://movie-pro.32d.one/how-it-works",
        type: "article",
    },
};

// HowTo Schema for AEO
const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Rate Movies with AI Precision using Movie Rating Pro",
    "description": "A comprehensive guide to using the Movie Rating Pro Chrome extension for automatic movie tracking and detailed scoring.",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Install the Extension",
            "text": "Download Movie Rating Pro from the Chrome Web Store or install it manually from GitHub.",
            "image": "https://movie-pro.32d.one/assets/install-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#install"
        },
        {
            "@type": "HowToStep",
            "name": "Navigate to a Movie",
            "text": "Open Netflix, Prime Video, or any streaming site and start playing a movie. The AI will automatically detect the title and genre.",
            "image": "https://movie-pro.32d.one/assets/detect-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#detection"
        },
        {
            "@type": "HowToStep",
            "name": "Rate and Save",
            "text": "Use the popup interface to rate the movie on various criteria, add custom notes, and save it to your local database.",
            "image": "https://movie-pro.32d.one/assets/rate-step.jpg",
            "url": "https://movie-pro.32d.one/how-it-works#rating"
        }
    ],
    "tool": [
        {
            "@type": "HowToTool",
            "name": "Movie Rating Pro Chrome Extension"
        },
        {
            "@type": "HowToTool",
            "name": "Google Chrome Browser"
        }
    ]
};

// Breadcrumb Schema for better navigation structure
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://movie-pro.32d.one"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "How It Works",
        "item": "https://movie-pro.32d.one/how-it-works"
    }]
};

// Speakable Schema for Voice Assistants
const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "p.text-lg", "h2", ".text-slate-300"]
};

// VideoObject Schema for Google Search "Videos" tab
const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to use Movie Rating Pro AI Detection",
    "description": "A quick demonstration of how Movie Rating Pro automatically detects movie titles from Netflix and Prime Video.",
    "thumbnailUrl": [
        "https://movie-pro.32d.one/assets/video-thumbnail.jpg"
    ],
    "uploadDate": "2024-01-01T08:00:00+08:00",
    "duration": "PT0M30S",
    "contentUrl": "https://movie-pro.32d.one/assets/demo-video.mp4",
    "embedUrl": "https://movie-pro.32d.one/embed/demo-video",
    "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "WatchAction" },
        "userInteractionCount": 5643
    }
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Does Movie Rating Pro work on all streaming sites?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, the extension is designed to work on major platforms like Netflix, Prime Video, and Disney+. For unsupported sites, you can manually enter the movie title."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is my data private?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. All your ratings and data are stored locally on your device. We do not track your viewing habits or collect personal information."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I export my ratings?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you can export your entire rating history to a CSV file, which is compatible with Excel, Google Sheets, and other spreadsheet software."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the extension free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Movie Rating Pro is 100% free and open-source. There are no hidden costs or premium subscriptions."
                                }
                            }
                        ]
                    })
                }}
            />
            {children}
        </>
    );
}
