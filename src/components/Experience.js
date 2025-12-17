
const Experience = () => {
    return (
        <section id="experience" className="py-10 md:py-15 lg:py-20">
            <h2 className="text-lg font-normal text-gray-500 mb-12 tracking-widest">Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 md:gap-4 max-w-4xl">
                {/* Now */}
                <div className="text-gray-400 text-md py-1">Now</div>
                
                <div className="flex justify-between items-center text-sm md:text-base">
                    <div className="flex-1 flex items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg" alt="Deutsche Bank" className="w-6 h-6 mr-2 object-contain" /> Deutsche Bank
                    </div>
                    <div className="flex-1 text-gray-500">Software Engineer</div>
                </div>

                {/* Previous */}
                <div className="text-gray-400 text-md py-1 md:mt-6">Previous</div>
                
                <div className="flex flex-col gap-2 md:mt-6 text-sm md:text-base">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMJ-U45JyOY06BJYUrlaMGJ746Urj_KDP-w&s" alt="Scapia" className="w-6 h-6 mr-2 object-contain" /> True Beacon
                        </div>
                        <div className="flex-1 text-gray-500">Software Engineer Intern</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg" alt="Deutsche Bank" className="w-6 h-6 mr-2 object-contain" /> Deutsche Bank
                        </div>
                        <div className="flex-1 text-gray-500">Summer Intern</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYo8yLPnQ3SlI-C1L5Vxv2VvidHM0UodGJw&s" alt="Scapia" className="w-6 h-6 mr-2 object-contain" /> Fischer Jordan
                        </div>
                        <div className="flex-1 text-gray-500">Backend Engineer Intern</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBxPhaTs0iSUkqgeSex1ojksl7lFgOmQyEg&s" alt="Scapia" className="w-6 h-6 mr-2 object-contain" /> M0 Ventures
                        </div>
                        <div className="flex-1 text-gray-500">Full Stack Developer Intern</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://d12aarmt01l54a.cloudfront.net/cms/images/fyle-logo-1565884500/1224-400.png" alt="Scapia" className="w-6 h-6 mr-2 object-contain" /> Fyle (now Sage)
                        </div>
                        <div className="flex-1 text-gray-500">Backend Engineer Intern</div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJsqPNclnoo71hXkBN4p_aEtIFCx98RTHrg&s" alt="Scapia" className="w-6 h-6 mr-2 object-contain" /> XIRCLS (now Axentra OS)
                        </div>
                        <div className="flex-1 text-gray-500">Python Developer Intern</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
