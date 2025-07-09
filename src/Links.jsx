import './Links.css';

export default function Links({ links }) {
  return (
    <nav className="links">
      {links.map((link, i) => (
        <a
          className={`links__item${link.className ? ' ' + link.className : ''}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
