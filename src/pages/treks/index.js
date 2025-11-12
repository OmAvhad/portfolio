import React from 'react';
import { treks } from '../../data/trek';

function Treks() {
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
        <div className="flex flex-col lg:flex-row lg:gap-6">
            <aside className="border-b lg:border-b-0 lg:border-r border-gray-200 lg:sticky lg:top-0 lg:h-screen lg:flex-none lg:w-[320px]">
                <div className="flex flex-col h-full py-6 px-4">
                    <h1 className="m-0 mb-2 text-[56px] leading-[0.95] tracking-[-1px]">
                        Treks
                    </h1>
                    <h2 className="m-0 text-[18px] font-medium text-gray-600">
                        Trails, peaks, and timeless journeys.
                    </h2>
                    <p className="mt-3 mb-6 text-[16px] text-gray-900">
                        From forts to forests, documenting every ascent.
                    </p>
                    <nav className="mt-6 grid auto-rows-min gap-3 overflow-auto pr-2">
                        {Array.from(yearsToFirstId.keys())
                            .sort((a, b) => b - a)
                            .map((year) => (
                                <a
                                    key={year}
                                    href={`#${yearsToFirstId.get(year)}`}
                                    className="no-underline text-gray-900 font-semibold hover:text-blue-600"
                                >
                                    {year}
                                </a>
                            ))}
                    </nav>
                </div>
            </aside>

            <main className="relative flex-1 py-6 px-2 lg:px-2">
                {/* vertical line */}
                <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-[2px] bg-gradient-to-b from-gray-200 to-gray-300 lg:-translate-x-1/2" />

                {treks.map((t, index) => {
                    const isLeft = index % 2 === 0
                    const justifyClass = isLeft ? 'lg:justify-start' : 'lg:justify-end'

                    return (
                        <section
                            id={`y${t.year}-${index}`}
                            key={`${t.year}-${index}`}
                            className={`relative flex items-center my-14 min-h-[80px] justify-start ${justifyClass}`}
                        >
                            <div
                                className="absolute left-4 lg:left-1/2 top-1/2 w-[14px] h-[14px] bg-gray-900 border-4 border-white rounded-full ring-2 ring-gray-900/20 -translate-x-1/2 -translate-y-1/2"
                                aria-hidden
                            />
                            <article className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 ml-12 lg:ml-0 md:w-[68%] lg:w-[48%] lg:max-w-[680px]">
                                {t.image && (
                                    <div className="-mx-6 -mt-6 mb-3 rounded-t-xl overflow-hidden h-[300px] bg-gray-100">
                                        <img
                                            src={t.image}
                                            alt={`${t.title} (${t.year})`}
                                            className="w-full h-full object-cover block"
                                        />
                                    </div>
                                )}
                                <h3 className="text-[20px] mb-1.5">{t.title}</h3>
                                {t.date && (
                                    <div className="text-[13px] text-gray-500 mb-2">
                                        {new Date(t.date).toLocaleDateString(undefined, {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </div>
                                )}
                                <p className="text-gray-700 leading-6">{t.description}</p>
                            </article>
                        </section>
                    )
                })}
            </main>
        </div>
    )
}

export default Treks
