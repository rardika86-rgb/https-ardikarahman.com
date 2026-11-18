import { TEACHER_NAME, SCHOOL_NAME } from '../data/familyData';
import type { LessonStage } from './LearningPathBar';

interface FooterProps {
  onSelectStage: (stage: LessonStage) => void;
}

export function Footer({ onSelectStage }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-slate-900">
            Pembelajaran Interaktif Bahasa Inggris Kelas 3 SD · Materi My Family
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Disusun &amp; Diajarkan oleh <strong className="text-slate-700">{TEACHER_NAME}</strong> · {SCHOOL_NAME}
          </p>
        </div>

        <nav aria-label="Navigasi Bawah" className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
          <button
            type="button"
            onClick={() => onSelectStage('bab1')}
            className="hover:text-slate-900 hover:underline underline-offset-4 cursor-pointer"
          >
            Materi Dasar
          </button>
          <button
            type="button"
            onClick={() => onSelectStage('bab2')}
            className="hover:text-slate-900 hover:underline underline-offset-4 cursor-pointer"
          >
            Pohon Keluarga
          </button>
          <button
            type="button"
            onClick={() => onSelectStage('bab3')}
            className="hover:text-slate-900 hover:underline underline-offset-4 cursor-pointer"
          >
            Kalimat &amp; Cerita
          </button>
          <button
            type="button"
            onClick={() => onSelectStage('bab4')}
            className="hover:text-slate-900 hover:underline underline-offset-4 cursor-pointer"
          >
            Kartu Hafalan
          </button>
          <button
            type="button"
            onClick={() => onSelectStage('bab5')}
            className="hover:text-slate-900 hover:underline underline-offset-4 cursor-pointer"
          >
            Kuis
          </button>
        </nav>
      </div>
    </footer>
  );
}
