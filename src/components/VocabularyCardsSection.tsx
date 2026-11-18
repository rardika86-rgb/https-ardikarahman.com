import { useState } from 'react';
import { Volume2, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { FAMILY_MEMBERS } from '../data/familyData';
import { filterFamilyMembers } from '../utils/familyLogic';
import { speakEnglish } from '../utils/speech';
import { FamilyAvatar } from './FamilyAvatar';

interface VocabularyCardsSectionProps {
  onPrevStage: () => void;
  onNextStage: () => void;
}

export function VocabularyCardsSection({
  onPrevStage,
  onNextStage,
}: VocabularyCardsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'inti' | 'besar'>('all');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const visibleMembers = filterFamilyMembers(FAMILY_MEMBERS, filter);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const revealAll = () => {
    const next: Record<string, boolean> = {};
    visibleMembers.forEach((m) => {
      next[m.id] = true;
    });
    setRevealedIds((prev) => ({ ...prev, ...next }));
  };

  const hideAll = () => {
    setRevealedIds({});
  };

  return (
    <section id="kosakata" className="scroll-mt-20 py-12 lg:py-16 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header & Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-sky-700">Bab 4 · Kartu Hafalan Kosakata</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
              Uji Ingatanmu Sebelum Mengerjakan Kuis
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Tebak arti kata bahasa Inggris di bawah ini, lalu klik tombol “Lihat Arti” untuk mencocokkan jawabanmu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Segmented Filter Control */}
            <div
              role="group"
              aria-label="Filter kategori keluarga"
              className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setFilter('all')}
                aria-pressed={filter === 'all'}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua (10)
              </button>
              <button
                type="button"
                onClick={() => setFilter('inti')}
                aria-pressed={filter === 'inti'}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === 'inti'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Keluarga Inti (5)
              </button>
              <button
                type="button"
                onClick={() => setFilter('besar')}
                aria-pressed={filter === 'besar'}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === 'besar'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Keluarga Besar (5)
              </button>
            </div>

            <button
              type="button"
              onClick={
                visibleMembers.every((m) => revealedIds[m.id]) ? hideAll : revealAll
              }
              className="px-3 py-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {visibleMembers.every((m) => revealedIds[m.id])
                ? 'Sembunyikan Semua'
                : 'Buka Semua Arti'}
            </button>
          </div>
        </div>

        {/* Flashcard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {visibleMembers.map((member) => {
            const isRevealed = Boolean(revealedIds[member.id]);
            return (
              <article
                key={member.id}
                className="flex flex-col justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/70"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-slate-500">
                      {member.category === 'inti' ? 'Inti' : 'Besar'}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakEnglish(member.english)}
                      aria-label={`Dengarkan pengucapan ${member.english}`}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex flex-col items-center text-center py-2">
                    <FamilyAvatar memberId={member.id} size="md" />
                    <h3 className="font-display text-lg font-bold text-slate-900 mt-3">
                      {member.english}
                    </h3>
                    <p className="text-xs text-slate-500">/{member.pronunciation}/</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 space-y-2.5">
                  {isRevealed ? (
                    <div className="text-center space-y-1">
                      <p className="text-sm font-bold text-emerald-700">
                        {member.indonesian}
                      </p>
                      <p className="text-xs text-slate-600 leading-snug">
                        {member.exampleEn}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-center text-slate-500 py-2">
                      Coba tebak artinya dalam bahasa Indonesia...
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleReveal(member.id)}
                    aria-expanded={isRevealed}
                    aria-label={`${isRevealed ? 'Sembunyikan' : 'Lihat'} arti ${member.english}`}
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isRevealed
                        ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        : 'bg-sky-600 text-white hover:bg-sky-700'
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" aria-hidden="true" />
                        Tutup Arti
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        Lihat Arti
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Stage Navigation Footer */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onPrevStage}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            Kembali ke Bab 3
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-slate-600 text-center sm:text-right">
              Sudah hafal semua kosakatanya?
            </p>
            <button
              type="button"
              onClick={onNextStage}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Lanjut ke Bab 5: Kerjakan Kuis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
