import { FAMILY_MEMBERS, type FamilyMember, type QuizQuestion } from '../data/familyData';

export type Pronoun = 'He' | 'She';

export interface SentenceResult {
  valid: boolean;
  sentenceEn: string;
  sentenceId: string;
  feedback: string;
}

export interface QuizScoreSummary {
  correctCount: number;
  totalCount: number;
  percentage: number;
  scoreOutOf100: number;
  masteryTitle: string;
  masteryDescription: string;
}

export interface StudyProgressSummary {
  count: number;
  total: number;
  percentage: number;
  isReadyForQuiz: boolean;
}

export function buildFamilySentence(
  pronoun: Pronoun,
  memberId: string,
  members: FamilyMember[] = FAMILY_MEMBERS
): SentenceResult {
  const member = members.find((m) => m.id === memberId) ?? members[0];
  const memberLower = member.english.toLowerCase();
  const indoLower = member.indonesian.toLowerCase();

  if (member.id === 'me') {
    return {
      valid: false,
      sentenceEn: 'This is me!',
      sentenceId: 'Ini adalah saya!',
      feedback:
        'Untuk diri sendiri ("Me"), kita memakai "This is me" atau "I am...", bukan He/She.',
    };
  }

  const isGenderMatch =
    member.gender === 'neutral' ||
    (pronoun === 'He' && member.gender === 'male') ||
    (pronoun === 'She' && member.gender === 'female');

  if (!isGenderMatch) {
    const suggested = member.gender === 'male' ? 'He' : 'She';
    const genderLabel = member.gender === 'male' ? 'laki-laki' : 'perempuan';
    return {
      valid: false,
      sentenceEn: `${pronoun} is my ${memberLower}.`,
      sentenceId: `Kurang tepat! "${member.english}" adalah ${genderLabel}.`,
      feedback: `Coba ganti menjadi "${suggested} is my ${memberLower}." karena ${member.indonesian} adalah ${genderLabel}.`,
    };
  }

  const pronounIndo = pronoun === 'He' ? 'Dia (laki-laki)' : 'Dia (perempuan)';
  return {
    valid: true,
    sentenceEn: `${pronoun} is my ${memberLower}.`,
    sentenceId: `${pronounIndo} adalah ${indoLower} saya.`,
    feedback: `Tepat sekali! Kata "${pronoun}" cocok untuk ${member.english} (${member.indonesian}).`,
  };
}

export function calculateQuizScore(
  answers: Record<number, number>,
  questions: QuizQuestion[]
): QuizScoreSummary {
  const totalCount = questions.length;
  if (totalCount === 0) {
    return {
      correctCount: 0,
      totalCount: 0,
      percentage: 0,
      scoreOutOf100: 0,
      masteryTitle: 'Belum Ada Soal',
      masteryDescription: 'Silakan tambahkan pertanyaan kuis.',
    };
  }

  const correctCount = questions.reduce((acc, q) => {
    return answers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((correctCount / totalCount) * 100);
  const scoreOutOf100 = percentage;

  let masteryTitle = 'Terus Berlatih!';
  let masteryDescription =
    'Ayo baca kembali Pohon Keluarga dan Kartu Kosakata bersama Pak Ardika Rahman, lalu coba lagi!';

  if (percentage >= 85) {
    masteryTitle = 'Luar Biasa! Bintang Kelas 3';
    masteryDescription =
      'Kamu sudah menguasai kosakata dan kalimat My Family dengan sangat baik!';
  } else if (percentage >= 60) {
    masteryTitle = 'Bagus Sekali!';
    masteryDescription =
      'Pemahamanmu sudah baik. Cek kembali beberapa soal yang masih keliru agar makin mahir.';
  }

  return {
    correctCount,
    totalCount,
    percentage,
    scoreOutOf100,
    masteryTitle,
    masteryDescription,
  };
}

export function calculateStudyProgress(
  exploredIds: string[],
  totalMembers: number = FAMILY_MEMBERS.length
): StudyProgressSummary {
  const uniqueValidCount = Math.min(new Set(exploredIds).size, totalMembers);
  const percentage =
    totalMembers === 0 ? 0 : Math.round((uniqueValidCount / totalMembers) * 100);

  return {
    count: uniqueValidCount,
    total: totalMembers,
    percentage,
    isReadyForQuiz: uniqueValidCount >= 4,
  };
}

export function filterFamilyMembers(
  members: FamilyMember[],
  filter: 'all' | 'inti' | 'besar'
): FamilyMember[] {
  if (filter === 'all') return members;
  return members.filter((m) => m.category === filter);
}
