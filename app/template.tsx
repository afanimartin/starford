export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="page-enter">
      {children}
    </main>
  );
}
