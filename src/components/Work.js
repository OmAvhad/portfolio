import Link from 'next/link';

const Work = () => {
    // Mock data for projects based on the screenshot
    const projects = [
        {
            title: "Scapia - Travel Credit Card",
            tags: ["Cross Platform UX", "Service Design", "Scalable Components"],
            imageColor: "bg-blue-100", // Placeholder color
            link: "/work/scapia"
        },
        {
            title: "Razorpay - Payment Gateway",
            tags: ["Product Launch", "UX Design", "Interaction Design"],
            imageColor: "bg-yellow-100",
            link: "/work/razorpay"
        }
    ];

    return (
        <section id="work" className="py-10 md:py-15 lg:py-20">
            <h2 className="text-lg font-normal text-gray-500 mb-12 tracking-widest">Key projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <Link key={index} href={project.link} className='group block'>
                        <div className={`aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 ${project.imageColor} relative border border-gray-100`}>
                             {/* Placeholder for project image */}
                             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                [Project Image: {project.title}]
                             </div>
                             {/* Overlay/Hover effect could go here */}
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
                    </Link>
                ))}
            </div>
            
             {/* View all work link maybe? */}
             <div className="mt-12">
                <Link href="/work" className="text-gray-500 hover:text-black hover:underline transition-colors">
                    View all projects &rarr;
                </Link>
             </div>
        </section>
    );
};

export default Work;
