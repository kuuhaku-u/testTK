const Navbar = () => {
  const menu = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  return (
    <nav className="ml-0 fixed z-10">
      <ul className="list-disc flex flex-col gap-5 fixed right-0 top-0 bottom-0 justify-center sm:m-10 m-3 ">
        {menu.map((x, index) => (
          <a
            href={x.url}
            key={index}
            className="flex items-center flex-row-reverse group "
          >
            <p
              className={`group-hover:opacity-100 transition duration-700  text-2xl mr-3 font-bold uppercase`}
            >
              {x.name}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;