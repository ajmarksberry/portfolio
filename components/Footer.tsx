export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-name">AJ Marksberry</p>
      <ul className="footer-links">
        <li><a href="https://www.linkedin.com/in/ajmarksberry" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="mailto:ajmarksberry@gmail.com">Email</a></li>
      </ul>
      <p className="footer-copy">© {new Date().getFullYear()}</p>
    </footer>
  );
}
