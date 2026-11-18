import { useState } from 'react';
import { BookOpen, ArrowRight, Users } from 'lucide-react';
import { TEACHER_NAME, SCHOOL_NAME } from '../data/familyData';

interface HeroSectionProps {
  onExploreMaterial: () => void;
  onStartQuiz: () => void;
}

const HERO_IMAGE_PATH = '/src/assets/images/hero_happy_family_illustration_1794982996380.jpg';

export function HeroSection({ onExploreMaterial, onStartQuiz }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="beranda" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span>Bahasa Inggris Kelas 3 SD</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-900">
                  Pengajar: {TEACHER_NAME} ({SCHOOL_NAME})
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Belajar Mengenal Anggota Keluarga dalam Bahasa Inggris
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Ayo kenali kosakata <strong className="font-semibold text-slate-800">My Family</strong> dengan cara yang mudah dan menyenangkan. Pelajari materinya terlebih dahulu, dengarkan pengucapannya, lalu uji kemampuanmu lewat kuis interaktif!
              </p>
            </div>

            {/* Clear 2-Step Learning Path */}
            <div className="space-y-5">
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-semibold text-sky-700 mb-0.5 tabular-nums">
                    Bab 1 – 2
                  </span>
                  <span className="font-medium text-slate-900">Materi &amp; Pohon Keluarga</span>
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-semibold text-sky-700 mb-0.5 tabular-nums">
                    Bab 3 – 4
                  </span>
                  <span className="font-medium text-slate-900">Kalimat, Cerita &amp; Hafalan</span>
                </li>
                <li className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="block text-xs font-semibold text-sky-700 mb-0.5 tabular-nums">
                    Bab 5
                  </span>
                  <span className="font-medium text-slate-900">Kuis Evaluasi</span>
                </li>
              </ol>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreMaterial}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  Mulai Belajar Materi
                </button>
                <button
                  type="button"
                  onClick={onStartQuiz}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
                >
                  Langsung ke Kuis
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative min-h-[260px] lg:min-h-full">
              {!imgError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Ilustrasi keluarga Indonesia yang hangat berkumpul bersama di ruang keluarga"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full lg:h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-sky-50 to-amber-50 text-slate-700">
                  <Users className="w-12 h-12 text-sky-600 mb-3" aria-hidden="true" />
                  <p className="font-display font-semibold text-lg">My Family · Kelas 3</p>
                  <p className="text-sm text-slate-600">Materi oleh {TEACHER_NAME}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
