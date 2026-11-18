import { useState } from 'react';
import { Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { FAMILY_MEMBERS, type FamilyMember } from '../data/familyData';
import { calculateStudyProgress } from '../utils/familyLogic';
import { speakEnglish } from '../utils/speech';
import { FamilyAvatar } from './FamilyAvatar';

interface FamilyTreeSectionProps {
  selectedMemberId: string;
  exploredIds: string[];
  onSelectMember: (memberId: string) => void;
  onPrevStage: () => void;
  onNextStage: () => void;
}

export function FamilyTreeSection({
  selectedMemberId,
  exploredIds,
  onSelectMember,
  onPrevStage,
  onNextStage,
}: FamilyTreeSectionProps) {
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const selectedMember: FamilyMember =
    FAMILY_MEMBERS.find((m) => m.id === selectedMemberId) ?? FAMILY_MEMBERS[0];

  const grandparents = FAMILY_MEMBERS.filter((m) => m.generation === 'grandparents');
  const parents = FAMILY_MEMBERS.filter((m) => m.generation === 'parents');
  const children = FAMILY_MEMBERS.filter((m) => m.generation === 'children');

  const progress = calculateStudyProgress(exploredIds, FAMILY_MEMBERS.length);

  const handleSpeak = (text: string, id: string) => {
    setSpeakingId(id);
    speakEnglish(text, () => setSpeakingId(null));
  };

  const renderNodeButton = (member: FamilyMember) => {
    const isSelected = member.id === selectedMember.id;
    const isExplored = exploredIds.includes(member.id);

    return (
      <button
        key={member.id}
        type="button"
        onClick={() => onSelectMember(member.id)}
        aria-pressed={isSelected}
        aria-label={`Pelajari ${member.english} (${member.indonesian})`}
        className={`group flex flex-col items-center p-3 rounded-xl border transition-colors text-center min-w-[104px] sm:min-w-[118px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
          isSelected
            ? 'bg-sky-50 border-sky-600 text-slate-900'
            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
        }`}
      >
        <div className="relative mb-2">
          <FamilyAvatar memberId={member.id} size="md" />
          {isExplored && (
            <span
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center"
              title="Sudah dipelajari"
            >
              <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          )}
        </div>
        <span className="text-sm font-semibold text-slate-900 leading-tight">
          {member.english}
        </span>
        <span className="text-xs text-slate-500 mt-0.5">{member.indonesian}</span>
      </button>
    );
  };

  return (
    <section id="pohon-keluarga" className="scroll-mt-20 py-12 lg:py-16 border-b border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading + Progress */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-sky-700">Bab 2 · Pohon Keluarga 3 Generasi</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
              Klik Anggota Keluarga untuk Melihat Hubungannya
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <span className="font-medium tabular-nums">
              Dipahami: <strong className="text-slate-900">{progress.count}</strong> / {progress.total}
            </span>
            <div
              className="w-28 h-2 bg-slate-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progress.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progres belajar anggota keluarga"
            >
              <div
                className="h-full bg-sky-600 transition-all duration-200"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Two-Zone Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Interactive Family Tree Diagram */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
            <div className="space-y-6">
              {/* Tier 1: Grandparents */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 text-center">
                  Generasi 1 · Kakek &amp; Nenek (Grandparents)
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  {grandparents.map(renderNodeButton)}
                </div>
              </div>

              <div className="border-t border-slate-200" aria-hidden="true" />

              {/* Tier 2: Parents & Aunt/Uncle */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 text-center">
                  Generasi 2 · Orang Tua, Paman &amp; Bibi (Parents &amp; Relatives)
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {parents.map(renderNodeButton)}
                </div>
              </div>

              <div className="border-t border-slate-200" aria-hidden="true" />

              {/* Tier 3: Children & Cousin */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 text-center">
                  Generasi 3 · Aku, Saudara &amp; Sepupu (Children)
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {children.map(renderNodeButton)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Zone: Concept Deck for Selected Family Member */}
          <aside
            aria-label="Detail Anggota Keluarga"
            className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-6"
          >
            <div className="flex items-start gap-4">
              <FamilyAvatar memberId={selectedMember.id} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>
                    {selectedMember.category === 'inti' ? 'Keluarga Inti' : 'Keluarga Besar'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Cara baca: /{selectedMember.pronunciation}/</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  {selectedMember.english}
                </h3>
                <p className="text-lg font-semibold text-sky-700 mt-0.5">
                  Artinya: {selectedMember.indonesian}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleSpeak(selectedMember.english, `word-${selectedMember.id}`)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" aria-hidden="true" />
                {speakingId === `word-${selectedMember.id}`
                  ? 'Sedang Mengucapkan...'
                  : `Dengarkan "${selectedMember.english}"`}
              </button>
            </div>

            {/* Clean Divider + Example Sentence */}
            <div className="pt-5 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500">
                  Contoh Kalimat Mudah
                </span>
                <button
                  type="button"
                  onClick={() =>
                    handleSpeak(selectedMember.exampleEn, `sentence-${selectedMember.id}`)
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline underline-offset-4 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                  Dengarkan Kalimat
                </button>
              </div>
              <p className="text-base font-semibold text-slate-900">
                “{selectedMember.exampleEn}”
              </p>
              <p className="text-sm text-slate-600">
                Artinya: {selectedMember.exampleId}
              </p>
            </div>

            {/* Clean Divider + Teacher Tip */}
            <div className="pt-5 border-t border-slate-200 space-y-2">
              <p className="text-xs font-semibold text-slate-500">
                Catatan Pak Ardika Rahman
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedMember.tip}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={onPrevStage}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Kembali ke Bab 1
              </button>
              <button
                type="button"
                onClick={onNextStage}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors cursor-pointer"
              >
                Lanjut ke Bab 3
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
