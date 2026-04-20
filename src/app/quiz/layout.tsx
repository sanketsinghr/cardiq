import { Footer } from '@/components/Footer';

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <main className="flex flex-1 items-start justify-center px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
