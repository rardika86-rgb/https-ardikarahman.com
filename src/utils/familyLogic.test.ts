import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildFamilySentence,
  calculateQuizScore,
  calculateStudyProgress,
  filterFamilyMembers,
} from './familyLogic';
import { FAMILY_MEMBERS, QUIZ_QUESTIONS } from '../data/familyData';

test('buildFamilySentence validates matching pronoun and family gender', () => {
  const validFather = buildFamilySentence('He', 'father', FAMILY_MEMBERS);
  assert.equal(validFather.valid, true);
  assert.equal(validFather.sentenceEn, 'He is my father.');

  const invalidFather = buildFamilySentence('She', 'father', FAMILY_MEMBERS);
  assert.equal(invalidFather.valid, false);
  assert.match(invalidFather.feedback, /He is my father/);

  const validMother = buildFamilySentence('She', 'mother', FAMILY_MEMBERS);
  assert.equal(validMother.valid, true);
  assert.equal(validMother.sentenceEn, 'She is my mother.');

  const neutralCousin = buildFamilySentence('He', 'cousin', FAMILY_MEMBERS);
  assert.equal(neutralCousin.valid, true);
  assert.equal(neutralCousin.sentenceEn, 'He is my cousin.');
});

test('calculateQuizScore computes accurate score and mastery tier', () => {
  const allCorrect: Record<number, number> = {};
  QUIZ_QUESTIONS.forEach((q) => {
    allCorrect[q.id] = q.correctIndex;
  });

  const perfectResult = calculateQuizScore(allCorrect, QUIZ_QUESTIONS);
  assert.equal(perfectResult.correctCount, QUIZ_QUESTIONS.length);
  assert.equal(perfectResult.scoreOutOf100, 100);
  assert.equal(perfectResult.masteryTitle, 'Luar Biasa! Bintang Kelas 3');

  const halfCorrect: Record<number, number> = {};
  QUIZ_QUESTIONS.forEach((q, idx) => {
    halfCorrect[q.id] = idx < 5 ? q.correctIndex : (q.correctIndex + 1) % 4;
  });
  const midResult = calculateQuizScore(halfCorrect, QUIZ_QUESTIONS);
  assert.equal(midResult.correctCount, 5);
  assert.equal(midResult.scoreOutOf100, 63);
  assert.equal(midResult.masteryTitle, 'Bagus Sekali!');
});

test('calculateStudyProgress deduplicates explored member IDs and sets readiness threshold', () => {
  const early = calculateStudyProgress(['father', 'father', 'mother'], 10);
  assert.equal(early.count, 2);
  assert.equal(early.percentage, 20);
  assert.equal(early.isReadyForQuiz, false);

  const ready = calculateStudyProgress(['father', 'mother', 'brother', 'sister'], 10);
  assert.equal(ready.count, 4);
  assert.equal(ready.percentage, 40);
  assert.equal(ready.isReadyForQuiz, true);
});

test('filterFamilyMembers filters inti and besar categories cleanly', () => {
  const inti = filterFamilyMembers(FAMILY_MEMBERS, 'inti');
  const besar = filterFamilyMembers(FAMILY_MEMBERS, 'besar');
  assert.equal(inti.length, 5);
  assert.equal(besar.length, 5);
  assert.equal(filterFamilyMembers(FAMILY_MEMBERS, 'all').length, 10);
});
