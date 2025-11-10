import React from 'react'

function Treks() {
    const treks = [
        {
            year: 2025,
            title: 'Torna | Prachandgad',
            description:
                'The first fort captured by Shivaji Maharaj, where the dream of Swarajya began.',
            image: '/torna/image-1.jpeg',
            date: '2022-11-08',
        },
        {
            year: 2025,
            title: 'Rajgad',
            description:
                'The first fort captured by Shivaji Maharaj, where the dream of Swarajya began.',
            image: '/rajgad/image-1.jpg',
            date: '2025-10-11',
        },
        {
            year: 2025,
            title: 'Sinhagad',
            description:
                'A symbol of bravery — where Tanaji’s sacrifice turned defeat into legend.',
            image: '/sinhagad/image-1.jpg',
            date: '2025-09-07',
        },
        {
            year: 2022,
            title: 'Irshalgad',
            description:
                'A hidden gem near Karjat — short, scenic, and perfect for an adventurous climb with stunning views.',
            image: '/irshalgad/image-2.jepg',
            date: '2022-07-06',
        },
    ]

    const yearsToFirstId = React.useMemo(() => {
        const map = new Map()
        treks.forEach((t, index) => {
            const sectionId = `y${t.year}-${index}`
            if (!map.has(t.year)) {
                map.set(t.year, sectionId)
            }
        })
        return map
    }, [treks])

    return (
        <div className="treks-page">
            <aside className="left-panel">
                <div className="left-wrap">
                    <h1 className="title">Treks</h1>
                    <h2 className="subtitle">
                        Forts, trails, and timeless journeys.
                    </h2>
                    <p className="lede">
                        From forts to forests — documenting every ascent.
                    </p>
                    <nav className="years">
                        {Array.from(yearsToFirstId.keys())
                            .sort((a, b) => b - a)
                            .map((year) => (
                                <a
                                    key={year}
                                    href={`#${yearsToFirstId.get(year)}`}
                                    className="year-link"
                                >
                                    {year}
                                </a>
                            ))}
                    </nav>
                </div>
            </aside>
            <main className="timeline">
                <div className="line" />
                {treks.map((t, index) => {
                    const sideClass = index % 2 === 0 ? 'left' : 'right'
                    return (
                        <section
                            id={`y${t.year}-${index}`}
                            key={t.year}
                            className={`item ${sideClass}`}
                        >
                            <div className="dot" aria-hidden />
                            <article className="card">
                                {t.image && (
                                    <div className="card-media">
                                        <img src={t.image} alt={`${t.title} (${t.year})`} />
                                    </div>
                                )}
                                <h3 className="card-title">
                                    {t.year} — {t.title}
                                </h3>
                                {t.date && (
                                    <div className="card-meta">
                                        {new Date(t.date).toLocaleDateString(undefined, {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </div>
                                )}
                                <p className="card-text">{t.description}</p>
                            </article>
                        </section>
                    )
                })}
            </main>
            <style jsx>{`
                .treks-page {
                    display: flex;
                    gap: 48px;
                    padding: 20px 24px;
                }
                .left-panel {
                    position: sticky;
                    top: 0;
                    height: 100vh;
                    flex: 0 0 360px;
                    border-right: 1px solid #e5e7eb;
                }
                .left-wrap {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 24px 16px;
                }
                .title {
                    margin: 0 0 8px 0;
                    font-size: 56px;
                    line-height: 0.95;
                    letter-spacing: -1px;
                }
                .subtitle {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 500;
                    color: #4b5563;
                }
                .lede {
                    margin: 12px 0 24px;
                    font-size: 16px;
                    color: #111827;
                }
                .years {
                    margin-top: 24px;
                    display: grid;
                    grid-auto-rows: min-content;
                    gap: 12px;
                    overflow: auto;
                    padding-right: 8px;
                }
                .year-link {
                    text-decoration: none;
                    color: #111827;
                    font-weight: 600;
                }
                .year-link:hover {
                    color: #2563eb;
                }

                .timeline {
                    position: relative;
                    flex: 1 1 auto;
                    padding: 24px 8px 24px 8px;
                }
                .line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(#e5e7eb, #cbd5e1);
                    transform: translateX(-50%);
                }
                .item {
                    position: relative;
                    display: flex;
                    align-items: center;
                    margin: 56px 0;
                    min-height: 80px;
                }
                .item.left {
                    justify-content: flex-start;
                }
                .item.right {
                    justify-content: flex-end;
                }
                .card {
                    width: calc(50% - 24px);
                    max-width: 680px;
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04);
                    padding: 24px 24px;
                }
                .card-media {
                    margin: -24px -24px 12px -24px;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    overflow: hidden;
                    height: 240px;
                    background: #f3f4f6;
                }
                .card-media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .card-title {
                    margin: 0 0 6px 0;
                    font-size: 20px;
                }
                .card-meta {
                    margin: 0 0 10px 0;
                    font-size: 13px;
                    color: #6b7280;
                    letter-spacing: 0.2px;
                }
                .card-text {
                    margin: 0;
                    color: #374151;
                    line-height: 1.6;
                }
                .dot {
                    position: absolute;
                    left: 50%;
                    width: 14px;
                    height: 14px;
                    background: #111827;
                    border: 3px solid #ffffff;
                    border-radius: 50%;
                    box-shadow: 0 0 0 2px #11182722;
                    transform: translate(-50%, -50%);
                    top: 50%;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .treks-page {
                        gap: 24px;
                    }
                    .left-panel {
                        flex-basis: 300px;
                    }
                }
                @media (max-width: 840px) {
                    .treks-page {
                        flex-direction: column;
                        padding: 24px 16px;
                    }
                    .left-panel {
                        position: relative;
                        height: auto;
                        border-right: none;
                        border-bottom: 1px solid #e5e7eb;
                    }
                    .timeline {
                        padding-top: 32px;
                    }
                    .line {
                        left: 24px;
                        transform: none;
                    }
                    .item,
                    .item.left,
                    .item.right {
                        justify-content: flex-start;
                    }
                    .card {
                        width: auto;
                        margin-left: 48px;
                    }
                    .dot {
                        left: 24px;
                        transform: translate(-50%, -50%);
                    }
                }
            `}</style>
        </div>
    )
}

export default Treks