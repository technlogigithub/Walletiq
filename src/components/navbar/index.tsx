const Navbar = () => {
  const navigationItems = [
    { label: 'Home' }, // No id for Home
    { label: 'Features', id: 'features' },
    { label: 'Token', id: 'token' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Whitepaper', id: 'whitepaper' },
    { label: 'Tokenomics', id: 'tokenomics' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className="flex flex-wrap gap-6 items-center self-stretch my-auto text-lg text-white whitespace-nowrap min-w-[240px] max-md:max-w-full">
      <ul className="navbar-menu font-face-urbanist-regular gap-2.5 self-stretch xxl:px-6 xl:px-1 lg:px-0 py-3 my-auto rounded-lg max-md:px-5">
        {navigationItems.map((item, index) => (
          <li key={index} className="hover:border-b-2 hover:border-white">
            {item.id ? (
              <a href={`#${item.id}`} className="scroll-link">
                {item.label}
              </a>
            ) : (
                <a href="/" className="scroll-link">
                  <span>{item.label}</span>
                </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
