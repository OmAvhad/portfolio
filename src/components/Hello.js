import Link from 'next/link';

const Hello = () => {
    return (
        <section id="hello" className="py-10 md:py-20 flex flex-col">
            <h1 className="text-2xl md:text-3xl leading-tight mb-8 text-black">
                I&apos;m Om, a <span className="font-normal border-b-2 border-transparent hover:border-black transition-colors">Software Engineer.</span> <br/>
                I build scalable <br/>
                backend solutions.
            </h1>
            <p className="text-md md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                Currently engineering at <span className="text-blue-900 font-semibold">Deutsche Bank</span>, Pune.
                <br/><br/>
                I previously solved for data pipelines and portfolio analysis at <span className="text-black">True Beacon</span>.
                I care deeply about purposeful technology and enjoy crafting systems that make complex financial insights clear and usable.
                </p>
        </section>
    );
};

export default Hello;
