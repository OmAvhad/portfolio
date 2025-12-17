import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
    // Mock data for projects based on the screenshot
    const projects = [
        {
            title: "Durgasakha",
            tags: ["NextJs", "Django", "AWS"],
            imageColor: "bg-blue-100", 
            link: "https://www.durgasakha.org",
            image: "/projects/3-devices-black.png",
            description: "Dynamic website built for a non-profit organization with a content management system, deployed on AWS."
        },
        {
            title: "Log Stream",
            tags: ["Kafka", "Flask", "Postgres",],
            imageColor: "bg-yellow-100",
            link: "https://github.com/OmAvhad/log-stream",
            image: "/projects/log-stream.png",
            description: "Streams logs from distributed services in real time, processes them via Kafka, and enables fast search, analytics, and visualization through a unified dashboard."
        },
        {
            title: "Vest - Trading Dashboard",
            tags: ["ReactJs", "Fast API", "SQLite"],
            imageColor: "bg-blue-100", 
            link: "https://github.com/OmAvhad/vest",
            image: "/projects/vest.png",
            description: "A full-stack trading application that supports real-time stock data, buy/sell orders, portfolio tracking, and transaction history."
        }
    ];

    return (
        <section id="work" className="py-10 md:py-15 lg:py-20">
            <h2 className="text-lg font-normal text-gray-500 mb-12 tracking-widest">Key projects</h2>
            
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                {projects.map((project, index) => (
                    <Link key={index} href={project.link} className='group block min-w-[300px] md:min-w-[400px] snap-center'>
                        <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 ${project.imageColor} relative border border-gray-100`}>
                             {project.image ? (
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill
                                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                             ) : (
                                 /* Placeholder if no image */
                                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    [Project Image: {project.title}]
                                 </div>
                             )}
                             
                             {/* Overlay/Hover effect */}
                             <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <h3 className="text-xl font-medium group-hover:underline">{project.title}</h3>
                        <h5 className="text-sm text-gray-500">{project.description}</h5>
                    </Link>
                ))}
            </div>
            
             {/* View all work link maybe? */}
             {/* <div className="mt-12">
                <Link href="/work" className="text-gray-500 hover:text-black hover:underline transition-colors">
                    View all projects &rarr;
                </Link>
             </div> */}
        </section>
    );
};

export default Work;
