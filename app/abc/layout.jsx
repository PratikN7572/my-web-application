export default function AbcLayout({ children }) {
  return (
    <section>
      <header>
        <nav>
          <ul className="flex gap-6"> 
          <li>Home Abc</li>
            <li>Contact Abc</li>
          </ul>
        </nav>
      </header>
          {children}
          <footer>
              <h1>footer of abc route</h1>
          </footer>
    </section>
  );
}
