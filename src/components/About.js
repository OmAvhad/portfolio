import Link from 'next/link';

const About = () => {
    return (
        <section id="about" className="py-10 md:py-20">
            <h2 className="text-lg font-normal text-gray-500 mb-12 tracking-widest">About me</h2>
            
            <div className="max-w-3xl">
                <h3 className="text-lg md:text-2xl mb-8 leading-snug">
                    I&apos;m a designer, creator and traveller - <br/>
                    who loves to draw inspiration from the <br/>
                    world around me.
                </h3>
                
                <div className="space-y-6 text-sm md:text-lg text-gray-500 leading-relaxed font-light">
                    <p>
                        I spent the last 5 years crafting solutions for several aspects of fintech in 
                        Indian start up space before moving onto Google. It has helped me develop 
                        a deep understanding of how users perceive money as well as given me a 
                        knack for simplifying complex workflows into simple, easy to use, habit 
                        forming products.
                    </p>
                    
                    <p>
                        I love to observe how people interact with tech in their daily lives. I feel well 
                        designed products are like toothbrushes, an invisible companion to your life 
                        that you cannot do without.
                    </p>
                    
                    <p>
                        I am passionate about design as a medium to solve problems elegantly and 
                        joyfully, and in the last couple of years human-AI partnership [in workflows, 
                        in life, as an interest] is my strongest obsession, much like Arthur Weasley&apos;s 
                        with Muggles [What exactly is the function of a rubber duck? 🐥]
                    </p>
                    
                    <p>
                        I segued into design from fashion management, social impact and English 
                        literature. Naturally, I am drawn towards reading and researching. I love 
                        travelling, nature, pop-cat meme and baking.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
