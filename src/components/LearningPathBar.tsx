import { BookOpen, Users, GitBranch, MessageSquare, Layers, Award } from 'lucide-react';

export type LessonStage = 'bab1' | 'bab2' | 'bab3' | 'bab4' | 'bab5';

export interface StageItem {
  id: LessonStage;
  numberLabel: string;
  title: string;
  shortLabel: string;
}

export const LESSON_STAGES: StageItem[] = [
  { id: 'bab1', numberLabel: 'Bab 1', title: 'Pengenalan & Kosakata Dasar', shortLabel: 'Materi Dasar' },
  { id: 'bab2', numberLabel: 'Bab 2', title: 'Pohon Keluarga 3 Generasi', shortLabel: 'Pohon Keluarga' },
  { id: 'bab3', numberLabel: 'Bab 3', title: 'Pola Kalimat & Cerita', shortLabel: 'Kalimat & Cerita' },
  { id: 'bab4', numberLabel: 'Bab 4', title: 'Kartu Hafalan', shortLabel: 'Kartu Hafalan' },
  { id: 'bab5', numberLabel: 'Bab 5', title: 'Kuis Evaluasi', shortLabel: 'Kuis' },
];

interface LearningPathBarProps {
  activeStage: LessonStage;
  completedStages: LessonStage[];
  onSelectStage: (stage: LessonStage) => void;
}

function getStageIcon(id: LessonStage) {
  switch (id) {
    case 'bab1':
      return BookOpen;
    case 'bab2':
      return GitBranch;
    case 'bab3':
      return MessageSquare;
    case 'bab4':
      return Layers;
    case 'bab5':
      return Award;
    default:
      return Users;
  }
}

export function LearningPathBar({
  activeStage,
  completedStages,
  onSelectStage,
}: LearningPathBarProps) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <p className="text-xs sm:text-sm font-semibold text-slate-700">
            Alur Belajar Berurutan (Ikuti dari Bab 1 sampai Bab 5)
          </p>
          <span className="text-xs text-slate-500 tabular-nums">
            Tahap aktif: {LESSON_STAGES.findIndex((s) => s.id === activeStage) + 1} / {LESSON_STAGES.length}
          </span>
        </div>

        <nav aria-label="Alur Belajar Bertahap" className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {LESSON_STAGES.map((stage) => {
            const Icon = getStageIcon(stage.id);
            const isActive = activeStage === stage.id;
            const isDone = completedStages.includes(stage.id) && !isActive;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelectStage(stage.id)}
                aria-current={isActive ? 'step' : undefined}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                  isActive
                    ? 'bg-sky-600 border-sky-600 text-white'
                    : isDone
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950 hover:bg-emerald-100/70'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-white' : isDone ? 'text-emerald-700' : 'text-slate-500'
                  }`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span
                    className={`block text-[11px] font-semibold leading-none ${
                      isActive ? 'text-sky-100' : isDone ? 'text-emerald-700' : 'text-slate-500'
                    }`}
                  >
                    {stage.numberLabel}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold truncate mt-1">
                    {stage.shortLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
