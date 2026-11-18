import { useState } from 'react';
import { Volume2, CheckCircle2, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';
import {
  FAMILY_MEMBERS,
  GRAMMAR_RULES,
  FAMILY_STORY_LINES,
} from '../data/familyData';
import { buildFamilySentence, type Pronoun } from '../utils/familyLogic';
import { speakEnglish } from '../utils/speech';

interface SentenceBuilderSectionProps {
  onPrevStage: () => void;
  onNextStage: () => void;
}

export function SentenceBuilderSection({
  onPrevStage,
  onNextStage,
}: SentenceBuilderSectionProps) {
  const [pronoun, setPronoun] = useState<Pronoun>('He');
  const [memberId, setMemberId] = useState<string>('father');

  const selectableMembers = FAMILY_MEMBERS.filter((m) => m.id !== 'me');
  const result = buildFamilySentence(pronoun, memberId, FAMILY_MEMBERS);

  const handlePlayAllStory = () => {
    const fullText = FAMILY_STORY_LINES.map((l) => l.english).join(' ');
    speakEnglish(fullText);
  };

  return (
    <section id="pola-kalimat" className="scroll-mt-20 py-10 lg:py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Part A: 4 Simple Grammar Rules */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-sky-700">
              Bab 3 · Pola Kalimat &amp; Cerita Singkat
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
              A. 4 Cara Mudah Memperkenalkan Keluarga
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Pahami 4 pola kalimat paling penting di Kelas 3 SD berikut ini sebelum berlatih merangkai kalimat:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GRAMMAR_RULES.map((rule) => (
              <article
                key={rule.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-sky-700">
                    {rule.pattern}
                  </h3>
                  <p className="text-sm font-semibold text-slate-900">{rule.meaning}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{rule.usage}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      “{rule.exampleEn}”
                    </p>
                    <p className="text-xs text-slate-600">{rule.exampleId}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakEnglish(rule.exampleEn)}
                    aria-label={`Dengarkan contoh ${rule.exampleEn}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Dengarkan Contoh
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Part B: Interactive He / She Sentence Builder */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              B. Latihan Merangkai Kalimat “He” dan “She”
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              Pilih kata ganti (<strong className="text-slate-900">He</strong> untuk laki-laki,{' '}
              <strong className="text-slate-900">She</strong> untuk perempuan) lalu pilih anggota keluarga untuk melihat apakah pasanganmu sudah benar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Control Zone */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  1. Pilih Kata Ganti Orang (Pronoun)
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPronoun('He')}
                    aria-pressed={pronoun === 'He'}
                    className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                      pronoun === 'He'
                        ? 'bg-sky-50 border-sky-600 text-slate-900'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="block font-display text-xl font-bold text-slate-900">
                      He
                    </span>
                    <span className="text-xs text-slate-600">Dia (Laki-laki)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPronoun('She')}
                    aria-pressed={pronoun === 'She'}
                    className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                      pronoun === 'She'
                        ? 'bg-sky-50 border-sky-600 text-slate-900'
                        : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="block font-display text-xl font-bold text-slate-900">
                      She
                    </span>
                    <span className="text-xs text-slate-600">Dia (Perempuan)</span>
                  </button>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <p className="block text-xs font-semibold text-slate-500 mb-3">
                  2. Pilih Anggota Keluarga
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {selectableMembers.map((member) => {
                    const isActive = member.id === memberId;
                    return (
                      <button
                        key={member.id}
                        type="button"
                        onClick={() => setMemberId(member.id)}
                        aria-pressed={isActive}
                        className={`px-3 py-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-sky-50 border-sky-600 text-slate-900'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <span className="block text-sm font-semibold leading-tight text-slate-900">
                          {member.english}
                        </span>
                        <span
                          className={`block text-xs mt-0.5 ${
                            isActive ? 'text-sky-800 font-medium' : 'text-slate-500'
                          }`}
                        >
                          {member.indonesian}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Output Zone */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    Hasil Kalimat Kamu
                  </span>
                  <button
                    type="button"
                    onClick={() => speakEnglish(result.sentenceEn)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Dengarkan Kalimat
                  </button>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {result.sentenceEn}
                  </p>
                  <p className="text-base text-slate-600">{result.sentenceId}</p>
                </div>

                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    result.valid
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  {result.valid ? (
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-sm space-y-0.5">
                    <p className="font-semibold">
                      {result.valid ? 'Kalimat Sudah Benar!' : 'Perlu Disesuaikan'}
                    </p>
                    <p className="leading-relaxed">{result.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part C: Short Guided Reading Story */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>C. Contoh Bacaan Pendek</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Cerita Singkat: “Budi’s Family”
              </h3>
            </div>
            <button
              type="button"
              onClick={handlePlayAllStory}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" aria-hidden="true" />
              Bacakan Semua Cerita
            </button>
          </div>

          <div className="divide-y divide-slate-200">
            {FAMILY_STORY_LINES.map((line) => (
              <div
                key={line.id}
                className="py-3.5 first:pt-1 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <p className="text-base font-semibold text-slate-900">
                    <span className="text-sky-700 mr-2 tabular-nums">{line.id}.</span>
                    {line.english}
                  </p>
                  <p className="text-sm text-slate-600 pl-5">{line.indonesian}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speakEnglish(line.english)}
                  aria-label={`Dengarkan kalimat ${line.id}: ${line.english}`}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                  Dengarkan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stage Navigation Footer */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onPrevStage}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Kembali ke Bab 2
          </button>

          <button
            type="button"
            onClick={onNextStage}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Lanjut ke Bab 4: Kartu Hafalan
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
