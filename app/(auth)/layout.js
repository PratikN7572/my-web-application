export default function AuthLayout({ children }) {
    return (
      <section>
        <header>
          <nav>
            <ul className="flex gap-6"> 
            <li className="text-red-500">Home AuthLayout</li>
              <li className="text-red-500">Contact AuthLayout</li>
            </ul>
          </nav>
        </header>
            {children}
            <footer>
                <h1 className="text-red-500">footer of AuthLayout route</h1>
            </footer>
      </section>
    );
  }
  