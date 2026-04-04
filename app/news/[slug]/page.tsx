import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { getNewsArticleBySlug } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getNewsArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    return { title: 'Not Found' };
  }

  return {
    title: `${article.title} — Starford International University`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = await getNewsArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // categoryColors mapping could be moved to a shared constant file, 
  // but for simplicity we keep it here as well.
  const categoryColors: Record<string, string> = {
    Admissions: "bg-[#a41034] text-white",
    Achievement: "bg-green-800 text-white",
    Leadership: "bg-[#1b1c1d] text-white",
    Community: "bg-purple-900 text-white",
    Event: "bg-amber-800 text-white",
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <NavBar />
      
      <main className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
        <div className="mb-10 text-center">
          <Link href="/news" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline mb-8 inline-block">
            ← Back to News
          </Link>
          <div className="flex justify-center mb-6">
            <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryColors[article.category] ?? "bg-[#1b1c1d] text-white"}`}>
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1b1c1d] leading-tight mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            {article.title}
          </h1>
          {article.date && (
            <p className="text-gray-500 text-sm font-medium">
              {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>

        {article.image && (
          <div className="relative w-full h-64 md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {/* If the CMS provides rich text in body, ideally we'd use a PortableText renderer,
              but for simple fallback we can render the excerpt or string body. */}
          {article.body ? (
            typeof article.body === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            ) : (
              // In case it's a complex object (like Sanity's PortableText block array),
              // we can stringify or just show excerpt for now
              <p>{article.excerpt}</p>
            )
          ) : (
            <p>{article.excerpt}</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <div className="w-full bg-[#111] border-t-4 border-[#a41034] py-8 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Starford International University. All rights reserved.</p>
        <Link href="/" className="text-[#a41034] font-bold text-xs uppercase tracking-widest hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
