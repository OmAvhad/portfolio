import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();

    const menuItems = [
        { name: 'Hello', href: '#hello' },
        { name: 'Work', href: '#work' },
        { name: 'About me', href: '#about' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <aside className="fixed w-64 px-10 py-20 h-screen hidden md:flex flex-col justify-start">
            <nav className="space-y-0">
                {menuItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href}
                        className="block text-gray-600 hover:text-black transition-colors text-lg"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
