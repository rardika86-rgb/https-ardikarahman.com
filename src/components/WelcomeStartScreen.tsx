import { useState } from 'react';
import { Play, Users, GraduationCap, BookOpen } from 'lucide-react';
import { TEACHER_NAME, SCHOOL_NAME } from '../data/familyData';

interface WelcomeStartScreenProps {
  onStart: () => void;
}

const HERO_IMAGE_PATH = '/src/assets/images/hero_happy_family_illustration_1794982996380.jpg';

export function WelcomeStartScreen({ onStart }: WelcomeStartScreenProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
      {/* Left Full-Height Opening Content */}
      <div className="lg:col-span-6 flex flex-col justify-between px-6 sm:px-12 lg:px-16 py-10 lg:py-14 bg-white">
        {/* Top Subject Header */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <BookOpen className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
          <span className="font-semibold text-slate-900">Bahasa Inggris Kelas 3 SD</span>
          <span aria-hidden="true">·</span>
          <span>Pembelajaran Interaktif</span>
        </div>

        {/* Center Hero Identity: Full Teacher Name & School + Topic */}
        <div className="my-auto py-8 space-y-6 max-w-xl">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-sky-700">
              Materi Pembelajaran
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance">
              My Family
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
              Belajar mengenal anggota keluarga dalam bahasa Inggris dengan mudah—pelajari materi dahulu, lalu kerjakan kuis interaktif!
            </p>
          </div>

          {/* Full Prominent Teacher & School Block */}
          <div className="pt-6 border-t border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
              <GraduationCap className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
              <span>Pengajar &amp; Penyusun Materi</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-sky-700 leading-tight">
              {TEACHER_NAME}
            </h2>
            <p className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
              {SCHOOL_NAME}
            </p>
          </div>

          {/* Prominent Start Button */}
          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={onStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
              <span>Mulai Masuk · {TEACHER_NAME}</span>
            </button>
            <p className="text-xs sm:text-sm text-slate-500">
              {SCHOOL_NAME} · Klik tombol Mulai untuk membuka materi &amp; kuis.
            </p>
          </div>
        </div>

        {/* Bottom Simple Flow Indicator */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600">
          <span>1. Pohon Keluarga</span>
          <span aria-hidden="true">·</span>
          <span>2. Kartu Kosakata</span>
          <span aria-hidden="true">·</span>
          <span>3. Pola Kalimat</span>
          <span aria-hidden="true">·</span>
          <span>4. Kuis Evaluasi</span>
        </div>
      </div>

      {/* Right Full-Bleed Family Illustration */}
      <div className="lg:col-span-6 bg-slate-100 relative min-h-[280px] sm:min-h-[360px] lg:min-h-screen border-t lg:border-t-0 lg:border-l border-slate-200">
        {!imgError ? (
          <img
            src={HERO_IMAGE_PATH}
            alt="Ilustrasi keluarga bahagia untuk pembelajaran My Family Kelas 3"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-sky-50 to-amber-50 text-slate-800">
            <Users className="w-14 h-14 text-sky-600 mb-4" aria-hidden="true" />
            <p className="font-display text-2xl font-bold">{TEACHER_NAME}</p>
            <p className="text-base font-medium text-slate-600 mt-1">{SCHOOL_NAME}</p>
          </div>
        )}
      </div>
    </main>
  );
}
