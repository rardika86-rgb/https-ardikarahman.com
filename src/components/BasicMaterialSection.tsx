import { Volume2, ArrowRight, Lightbulb } from 'lucide-react';
import { FAMILY_MEMBERS, TEACHER_NAME, SCHOOL_NAME } from '../data/familyData';
import { speakEnglish } from '../utils/speech';
import { FamilyAvatar } from './FamilyAvatar';

interface BasicMaterialSectionProps {
  onNextStage: () => void;
}

export function BasicMaterialSection({ onNextStage }: BasicMaterialSectionProps) {
  const nuclearFamily = FAMILY_MEMBERS.filter((m) => m.category === 'inti');
  const extendedFamily = FAMILY_MEMBERS.filter((m) => m.category === 'besar');

  return (
    <section aria-labelledby="bab1-heading" className="py-10 lg:py-14 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Intro Explanation Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-sky-700">
              Bab 1 · Pengenalan Materi My Family
            </p>
            <h2
              id="bab1-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-balance"
            >
              Apa Itu “My Family”?
            </h2>
            <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
              Dalam bahasa Indonesia, <strong>My Family</strong> artinya <strong>Keluargaku</strong>. Setiap orang memiliki anggota keluarga yang saling menyayangi. Di kelas 3 ini, kita membagi anggota keluarga menjadi dua kelompok agar lebih mudah diingat:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-1.5">
              <p className="text-xs font-semibold text-sky-800">Kelompok 1</p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Nuclear Family (Keluarga Inti)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Keluarga yang paling dekat dan biasanya tinggal satu rumah dengan kita: <strong>Father</strong> (Ayah), <strong>Mother</strong> (Ibu), <strong>Brother</strong> (Saudara Laki-laki), <strong>Sister</strong> (Saudara Perempuan), dan <strong>Me</strong> (Saya).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <p className="text-xs font-semibold text-amber-800">Kelompok 2</p>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Extended Family (Keluarga Besar)
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Anggota keluarga lainnya yang melengkapi keluarga kita: <strong>Grandfather</strong> (Kakek), <strong>Grandmother</strong> (Nenek), <strong>Uncle</strong> (Paman), <strong>Aunt</strong> (Bibi), dan <strong>Cousin</strong> (Sepupu).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
            <Lightbulb className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Tips Belajar dari Pak {TEACHER_NAME} ({SCHOOL_NAME}):</strong> Klik tombol speaker di setiap kartu di bawah ini, lalu ucapkan dengan suara lantang agar cepat hafal!
            </p>
          </div>
        </div>

        {/* Part A: Nuclear Family Table/Cards */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              A. Mengenal Keluarga Inti (Nuclear Family)
            </h3>
            <p className="text-sm text-slate-600">
              Pelajari 5 kosakata keluarga inti terlebih dahulu:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nuclearFamily.map((member) => (
              <article
                key={member.id}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <FamilyAvatar memberId={member.id} size="md" />
                  <div className="min-w-0">
                    <h4 className="font-display text-lg font-bold text-slate-900 leading-tight">
                      {member.english}
                    </h4>
                    <p className="text-sm font-semibold text-sky-700">{member.indonesian}</p>
                    <p className="text-xs text-slate-500">/{member.pronunciation}/</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <p className="text-xs text-slate-600 leading-relaxed">{member.tip}</p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(member.english)}
                    aria-label={`Dengarkan pengucapan ${member.english}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Dengarkan Suara
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Part B: Extended Family Table/Cards */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              B. Mengenal Keluarga Besar (Extended Family)
            </h3>
            <p className="text-sm text-slate-600">
              Sekarang kenali 5 kosakata anggota keluarga besar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {extendedFamily.map((member) => (
              <article
                key={member.id}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <FamilyAvatar memberId={member.id} size="md" />
                  <div className="min-w-0">
                    <h4 className="font-display text-lg font-bold text-slate-900 leading-tight">
                      {member.english}
                    </h4>
                    <p className="text-sm font-semibold text-amber-700">{member.indonesian}</p>
                    <p className="text-xs text-slate-500">/{member.pronunciation}/</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2.5">
                  <p className="text-xs text-slate-600 leading-relaxed">{member.tip}</p>
                  <button
                    type="button"
                    onClick={() => speakEnglish(member.english)}
                    aria-label={`Dengarkan pengucapan ${member.english}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Dengarkan Suara
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Clear Next Stage CTA */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="font-display text-lg font-bold text-slate-900">
              Sudah Kenal Semua Anggota Keluarga?
            </p>
            <p className="text-sm text-slate-600">
              Ayo lihat hubungan kakek, orang tua, dan anak pada Bab 2: Pohon Keluarga!
            </p>
          </div>
          <button
            type="button"
            onClick={onNextStage}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Lanjut ke Bab 2: Pohon Keluarga
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
