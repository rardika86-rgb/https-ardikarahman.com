import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
  HelpCircle,
} from 'lucide-react';
import { QUIZ_QUESTIONS, TEACHER_NAME, SCHOOL_NAME } from '../data/familyData';
import { calculateQuizScore } from '../utils/familyLogic';

interface QuizSectionProps {
  quizStarted: boolean;
  onStartQuiz: () => void;
  onBackToMaterial: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export function QuizSection({
  quizStarted,
  onStartQuiz,
  onBackToMaterial,
}: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const selectedOption = answers[currentQuestion.id];
  const hasAnsweredCurrent = selectedOption !== undefined;
  const isCurrentCorrect = selectedOption === currentQuestion.correctIndex;

  const currentSummary = calculateQuizScore(answers, QUIZ_QUESTIONS);
  const answeredCount = Object.keys(answers).length;

  const handleSelectOption = (optionIdx: number) => {
    if (hasAnsweredCurrent) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIdx,
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    onStartQuiz();
  };

  return (
    <section id="kuis" className="scroll-mt-20 py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-1.5 mb-8 text-center">
          <p className="text-sm font-semibold text-sky-700">Bab 5 · Kuis Evaluasi Kelas 3</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-balance">
            Uji Pemahaman Materi My Family
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Setelah mempelajari Bab 1 sampai Bab 4 bersama Pak {TEACHER_NAME}, ayo kerjakan 8 soal pilihan ganda di bawah ini!
          </p>
        </div>

        {/* State 1: Quiz Intro (before clicking Mulai Kuis) */}
        {!quizStarted && !isCompleted && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <HelpCircle className="w-7 h-7" aria-hidden="true" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Siap Mengerjakan Kuis?
              </h3>
              <p className="text-sm text-slate-600">
                Terdiri dari 8 soal mudah tentang kosakata keluarga, penggunaan He/She, dan hubungan keluarga. Nilai langsung muncul!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
              <span>8 Soal Pilihan Ganda</span>
              <span aria-hidden="true">·</span>
              <span>Penjelasan Langsung</span>
              <span aria-hidden="true">·</span>
              <span>Pengajar: {TEACHER_NAME}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={onStartQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Mulai Kuis Sekarang
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onBackToMaterial}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Baca Materi Dulu
              </button>
            </div>
          </div>
        )}

        {/* State 2: Active Question View */}
        {quizStarted && !isCompleted && (
          <div
            data-testid="quiz-active"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-6"
          >
            {/* Progress & Live Stats Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="font-semibold text-slate-900 tabular-nums">
                  Soal {currentIndex + 1} dari {QUIZ_QUESTIONS.length}
                </span>
                <span aria-hidden="true">·</span>
                <span>Topik: {currentQuestion.type}</span>
              </div>

              <div className="text-sm text-slate-600 tabular-nums">
                Jawaban Benar:{' '}
                <strong className="text-slate-900">
                  {currentSummary.correctCount} / {answeredCount}
                </strong>
              </div>
            </div>

            {/* Progress Bar */}
            <div
              className="w-full h-2 bg-slate-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={Math.round(((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Kemajuan kuis"
            >
              <div
                className="h-full bg-sky-600 transition-all duration-200"
                style={{
                  width: `${Math.round(((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%`,
                }}
              />
            </div>

            {/* Question Prompt */}
            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug text-balance">
                {currentQuestion.question}
              </h3>
              {currentQuestion.clue && (
                <p className="text-sm text-slate-600">
                  Petunjuk: {currentQuestion.clue}
                </p>
              )}
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isRightOption = idx === currentQuestion.correctIndex;

                let buttonStyle =
                  'bg-white border-slate-200 hover:border-sky-400 hover:bg-sky-50/40 text-slate-900';

                if (hasAnsweredCurrent) {
                  if (isRightOption) {
                    buttonStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950';
                  } else if (isSelected && !isRightOption) {
                    buttonStyle = 'bg-rose-50 border-rose-600 text-rose-950';
                  } else {
                    buttonStyle = 'bg-white border-slate-200 text-slate-400';
                  }
                }

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={hasAnsweredCurrent}
                    onClick={() => handleSelectOption(idx)}
                    aria-label={`Pilihan ${OPTION_LETTERS[idx]}: ${option}`}
                    className={`flex items-center justify-between gap-3 p-4 rounded-xl border text-left transition-colors ${buttonStyle} ${
                      hasAnsweredCurrent ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                          hasAnsweredCurrent && isRightOption
                            ? 'bg-emerald-600 text-white'
                            : hasAnsweredCurrent && isSelected && !isRightOption
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {OPTION_LETTERS[idx]}
                      </span>
                      <span className="text-base font-medium leading-snug">{option}</span>
                    </div>

                    {hasAnsweredCurrent && isRightOption && (
                      <CheckCircle2
                        className="w-5 h-5 text-emerald-700 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {hasAnsweredCurrent && isSelected && !isRightOption && (
                      <XCircle
                        className="w-5 h-5 text-rose-700 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Feedback & Next Action */}
            {hasAnsweredCurrent && (
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div
                  role="status"
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    isCurrentCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                  }`}
                >
                  {isCurrentCorrect ? (
                    <CheckCircle2
                      className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <XCircle
                      className="w-5 h-5 text-rose-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-sm space-y-1">
                    <p className="font-bold">
                      {isCurrentCorrect
                        ? 'Hebat! Jawabanmu Benar.'
                        : `Belum tepat. Jawaban yang benar adalah "${currentQuestion.options[currentQuestion.correctIndex]}".`}
                    </p>
                    <p className="leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {currentIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Soal Berikutnya'
                      : 'Lihat Hasil Nilai'}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* State 3: Quiz Completed Score Summary */}
        {isCompleted && (
          <div
            data-testid="quiz-summary"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <Award className="w-8 h-8" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Rapor Kuis My Family · {TEACHER_NAME} · {SCHOOL_NAME}
                </p>
                <p
                  data-testid="quiz-final-score"
                  className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mt-2 tabular-nums"
                >
                  {currentSummary.scoreOutOf100} <span className="text-xl text-slate-500">/ 100</span>
                </p>
                <p className="text-sm font-semibold text-sky-700 mt-1 tabular-nums">
                  {currentSummary.correctCount} dari {currentSummary.totalCount} soal terjawab benar
                </p>
              </div>

              <div className="max-w-lg mx-auto space-y-1">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {currentSummary.masteryTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentSummary.masteryDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Ulangi Kuis
                </button>
                <button
                  type="button"
                  onClick={onBackToMaterial}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  Kembali ke Materi
                </button>
              </div>
            </div>

            {/* Answer Review List */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h4 className="font-display text-base font-bold text-slate-900">
                Pembahasan Jawaban
              </h4>
              <div className="divide-y divide-slate-200">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const chosen = answers[q.id];
                  const correct = chosen === q.correctIndex;
                  return (
                    <div key={q.id} className="py-3.5 first:pt-1 last:pb-0 flex items-start gap-3">
                      {correct ? (
                        <CheckCircle2
                          className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircle
                          className="w-5 h-5 text-rose-700 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <div className="text-sm space-y-1">
                        <p className="font-semibold text-slate-900">
                          <span className="tabular-nums">{idx + 1}.</span> {q.question}
                        </p>
                        <p className="text-slate-600">
                          Jawabanmu:{' '}
                          <strong className={correct ? 'text-emerald-700' : 'text-rose-700'}>
                            {chosen !== undefined ? q.options[chosen] : '-'}
                          </strong>
                          {!correct && (
                            <>
                              {' '}
                              · Kunci:{' '}
                              <strong className="text-emerald-700">
                                {q.options[q.correctIndex]}
                              </strong>
                            </>
                          )}
                        </p>
                        <p className="text-xs text-slate-500">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
