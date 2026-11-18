import { useState, useEffect } from 'react';
import { WelcomeStartScreen } from './components/WelcomeStartScreen';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { LearningPathBar, type LessonStage } from './components/LearningPathBar';
import { BasicMaterialSection } from './components/BasicMaterialSection';
import { FamilyTreeSection } from './components/FamilyTreeSection';
import { SentenceBuilderSection } from './components/SentenceBuilderSection';
import { VocabularyCardsSection } from './components/VocabularyCardsSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export default function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<LessonStage>('bab1');
  const [completedStages, setCompletedStages] = useState<LessonStage[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<string>('father');
  const [exploredIds, setExploredIds] = useState<string[]>(['father']);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      setHasEntered(true);
    }
    if (params.get('autostart') === 'quiz') {
      setHasEntered(true);
      setActiveStage('bab5');
      setQuizStarted(true);
    }
  }, []);

  if (!hasEntered) {
    return (
      <WelcomeStartScreen
        onStart={() => {
          setHasEntered(true);
          setActiveStage('bab1');
          window.scrollTo({ top: 0, behavior: 'auto' });
        }}
      />
    );
  }

  const markCompleted = (stage: LessonStage) => {
    setCompletedStages((prev) => (prev.includes(stage) ? prev : [...prev, stage]));
  };

  const scrollToStageContent = () => {
    const el = document.getElementById('tahap-belajar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectStage = (stage: LessonStage) => {
    setActiveStage(stage);
    if (stage === 'bab5') {
      setQuizStarted(true);
    }
    setTimeout(scrollToStageContent, 30);
  };

  const handleAdvanceStage = (from: LessonStage, to: LessonStage) => {
    markCompleted(from);
    handleSelectStage(to);
  };

  const handleSelectMember = (memberId: string) => {
    setSelectedMemberId(memberId);
    setExploredIds((prev) => (prev.includes(memberId) ? prev : [...prev, memberId]));
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    handleSelectStage('bab5');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <TopBar
        activeStage={activeStage}
        onSelectStage={handleSelectStage}
        onStartQuiz={handleStartQuiz}
      />

      <main className="flex-1">
        <HeroSection
          onExploreMaterial={() => handleSelectStage('bab1')}
          onStartQuiz={handleStartQuiz}
        />

        <div id="tahap-belajar" className="scroll-mt-16">
          <LearningPathBar
            activeStage={activeStage}
            completedStages={completedStages}
            onSelectStage={handleSelectStage}
          />

          {activeStage === 'bab1' && (
            <BasicMaterialSection
              onNextStage={() => handleAdvanceStage('bab1', 'bab2')}
            />
          )}

          {activeStage === 'bab2' && (
            <FamilyTreeSection
              selectedMemberId={selectedMemberId}
              exploredIds={exploredIds}
              onSelectMember={handleSelectMember}
              onPrevStage={() => handleSelectStage('bab1')}
              onNextStage={() => handleAdvanceStage('bab2', 'bab3')}
            />
          )}

          {activeStage === 'bab3' && (
            <SentenceBuilderSection
              onPrevStage={() => handleSelectStage('bab2')}
              onNextStage={() => handleAdvanceStage('bab3', 'bab4')}
            />
          )}

          {activeStage === 'bab4' && (
            <VocabularyCardsSection
              onPrevStage={() => handleSelectStage('bab3')}
              onNextStage={() => handleAdvanceStage('bab4', 'bab5')}
            />
          )}

          {activeStage === 'bab5' && (
            <QuizSection
              quizStarted={quizStarted}
              onStartQuiz={() => setQuizStarted(true)}
              onBackToMaterial={() => handleSelectStage('bab1')}
            />
          )}
        </div>
      </main>

      <Footer onSelectStage={handleSelectStage} />
    </div>
  );
}
