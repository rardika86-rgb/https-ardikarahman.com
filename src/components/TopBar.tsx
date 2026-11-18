import type { LessonStage } from './LearningPathBar';

interface TopBarProps {
  activeStage: LessonStage;
  onSelectStage: (stage: LessonStage) => void;
  onStartQuiz: () => void;
}

export function TopBar({ activeStage, onSelectStage, onStartQuiz }: TopBarProps) {
  const navItems: { id: LessonStage; label: string }[] = [
    { id: 'bab1', label: 'Materi Dasar' },
    { id: 'bab2', label: 'Pohon Keluarga' },
    { id: 'bab3', label: 'Kalimat & Cerita' },
    { id: 'bab4', label: 'Kartu Hafalan' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => onSelectStage('bab1')}
          className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 rounded"
        >
          My Family · Kelas 3
        </button>

        {/* Zone 2: Clean single-line stage links */}
        <nav
          aria-label="Navigasi Materi"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const isActive = activeStage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectStage(item.id)}
                className={`hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive ? 'text-sky-700 font-semibold underline underline-offset-4' : ''
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onStartQuiz}
            className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
          >
            Mulai Kuis
          </button>
        </div>
      </div>
    </header>
  );
}
