export type FamilyCategory = 'inti' | 'besar';
export type FamilyGender = 'male' | 'female' | 'neutral';
export type FamilyGeneration = 'grandparents' | 'parents' | 'children';

export interface FamilyMember {
  id: string;
  english: string;
  indonesian: string;
  pronunciation: string;
  category: FamilyCategory;
  gender: FamilyGender;
  generation: FamilyGeneration;
  exampleEn: string;
  exampleId: string;
  tip: string;
}

export interface QuizQuestion {
  id: number;
  type: 'Kosakata' | 'Kalimat' | 'Hubungan';
  question: string;
  clue?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const TEACHER_NAME = 'Ardika Rahman';
export const SCHOOL_NAME = 'SD Negeri 2 Putra Buyut';

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: 'grandfather',
    english: 'Grandfather',
    indonesian: 'Kakek',
    pronunciation: 'gren-fa-dher',
    category: 'besar',
    gender: 'male',
    generation: 'grandparents',
    exampleEn: 'He is my grandfather. He likes reading.',
    exampleId: 'Dia adalah kakek saya. Dia suka membaca.',
    tip: 'Sering juga dipanggil dengan sebutan akrab "Grandpa".',
  },
  {
    id: 'grandmother',
    english: 'Grandmother',
    indonesian: 'Nenek',
    pronunciation: 'gren-ma-dher',
    category: 'besar',
    gender: 'female',
    generation: 'grandparents',
    exampleEn: 'She is my grandmother. She cooks delicious food.',
    exampleId: 'Dia adalah nenek saya. Dia memasak makanan lezat.',
    tip: 'Sering juga dipanggil dengan sebutan akrab "Grandma".',
  },
  {
    id: 'father',
    english: 'Father',
    indonesian: 'Ayah',
    pronunciation: 'fa-dher',
    category: 'inti',
    gender: 'male',
    generation: 'parents',
    exampleEn: 'He is my father. He goes to work.',
    exampleId: 'Dia adalah ayah saya. Dia pergi bekerja.',
    tip: 'Bisa juga disebut "Dad" atau "Daddy" dalam percakapan sehari-hari.',
  },
  {
    id: 'mother',
    english: 'Mother',
    indonesian: 'Ibu',
    pronunciation: 'ma-dher',
    category: 'inti',
    gender: 'female',
    generation: 'parents',
    exampleEn: 'She is my mother. She is very kind.',
    exampleId: 'Dia adalah ibu saya. Dia sangat baik hati.',
    tip: 'Bisa juga disebut "Mom" atau "Mommy" dalam percakapan sehari-hari.',
  },
  {
    id: 'uncle',
    english: 'Uncle',
    indonesian: 'Paman',
    pronunciation: 'ang-kel',
    category: 'besar',
    gender: 'male',
    generation: 'parents',
    exampleEn: 'He is my uncle. He is my father’s brother.',
    exampleId: 'Dia adalah paman saya. Dia saudara laki-laki ayah saya.',
    tip: 'Digunakan untuk saudara laki-laki dari ayah maupun ibu.',
  },
  {
    id: 'aunt',
    english: 'Aunt',
    indonesian: 'Bibi / Tante',
    pronunciation: 'ant',
    category: 'besar',
    gender: 'female',
    generation: 'parents',
    exampleEn: 'She is my aunt. She brings me a gift.',
    exampleId: 'Dia adalah bibi saya. Dia membawakan saya hadiah.',
    tip: 'Digunakan untuk saudara perempuan dari ayah maupun ibu.',
  },
  {
    id: 'brother',
    english: 'Brother',
    indonesian: 'Saudara Laki-laki',
    pronunciation: 'bra-dher',
    category: 'inti',
    gender: 'male',
    generation: 'children',
    exampleEn: 'He is my brother. We play football together.',
    exampleId: 'Dia adalah saudara laki-laki saya. Kami bermain bola bersama.',
    tip: 'Kakak laki-laki disebut "older brother", adik laki-laki disebut "younger brother".',
  },
  {
    id: 'sister',
    english: 'Sister',
    indonesian: 'Saudara Perempuan',
    pronunciation: 'sis-ter',
    category: 'inti',
    gender: 'female',
    generation: 'children',
    exampleEn: 'She is my sister. She likes drawing.',
    exampleId: 'Dia adalah saudara perempuan saya. Dia suka menggambar.',
    tip: 'Kakak perempuan disebut "older sister", adik perempuan disebut "younger sister".',
  },
  {
    id: 'me',
    english: 'Me / Myself',
    indonesian: 'Saya Sendiri',
    pronunciation: 'mi / mai-self',
    category: 'inti',
    gender: 'neutral',
    generation: 'children',
    exampleEn: 'Hello! This is me. I am in grade three.',
    exampleId: 'Halo! Ini saya. Saya duduk di kelas tiga.',
    tip: 'Saat memperkenalkan diri sendiri, ucapkan "I am..." atau "This is me."',
  },
  {
    id: 'cousin',
    english: 'Cousin',
    indonesian: 'Sepupu',
    pronunciation: 'ka-zen',
    category: 'besar',
    gender: 'neutral',
    generation: 'children',
    exampleEn: 'My cousin comes to visit on Sunday.',
    exampleId: 'Sepupu saya datang berkunjung pada hari Minggu.',
    tip: 'Kata "cousin" berlaku untuk sepupu laki-laki maupun sepupu perempuan.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'Kosakata',
    question: 'Apa arti kata "Mother" dalam bahasa Indonesia?',
    clue: 'Anggota keluarga inti perempuan yang melahirkan dan merawat kita.',
    options: ['Nenek', 'Ibu', 'Bibi', 'Saudara perempuan'],
    correctIndex: 1,
    explanation: '"Mother" artinya Ibu. Kata panggil akrabnya adalah Mom.',
  },
  {
    id: 2,
    type: 'Kosakata',
    question: 'Bahasa Inggris dari "Kakek" adalah...',
    clue: 'Ayah dari ayah atau ibu kita.',
    options: ['Grandmother', 'Uncle', 'Grandfather', 'Father'],
    correctIndex: 2,
    explanation: '"Grandfather" berarti Kakek. Sedangkan "Grandmother" berarti Nenek.',
  },
  {
    id: 3,
    type: 'Kalimat',
    question: 'Lengkapi kalimat berikut: "___ is my father."',
    clue: 'Father adalah laki-laki. Kata ganti untuk laki-laki adalah...',
    options: ['She', 'He', 'It', 'They'],
    correctIndex: 1,
    explanation: 'Kita memakai "He" untuk satu orang laki-laki (ayah, kakek, paman, saudara laki-laki).',
  },
  {
    id: 4,
    type: 'Kalimat',
    question: 'Lengkapi kalimat berikut: "___ is my sister."',
    clue: 'Sister adalah saudara perempuan.',
    options: ['He', 'We', 'She', 'You'],
    correctIndex: 2,
    explanation: 'Kita memakai "She" untuk satu orang perempuan (ibu, nenek, bibi, saudara perempuan).',
  },
  {
    id: 5,
    type: 'Hubungan',
    question: 'Saudara laki-laki dari ayah kita disebut...',
    clue: 'Dalam bahasa Indonesia artinya Paman.',
    options: ['Aunt', 'Cousin', 'Brother', 'Uncle'],
    correctIndex: 3,
    explanation: '"Uncle" berarti Paman, yaitu saudara laki-laki dari ayah atau ibu kita.',
  },
  {
    id: 6,
    type: 'Hubungan',
    question: 'Anak dari paman dan bibi kita disebut...',
    clue: 'Dalam bahasa Indonesia artinya Sepupu.',
    options: ['Cousin', 'Sister', 'Grandmother', 'Brother'],
    correctIndex: 0,
    explanation: '"Cousin" berarti Sepupu (anak dari paman atau bibi kita).',
  },
  {
    id: 7,
    type: 'Kosakata',
    question: 'Apa arti kalimat "She is my aunt"?',
    clue: 'Ingat, "She" = dia perempuan dan "aunt" = bibi.',
    options: [
      'Dia adalah paman saya',
      'Dia adalah bibi saya',
      'Dia adalah ibu saya',
      'Dia adalah sepupu saya',
    ],
    correctIndex: 1,
    explanation: '"She is my aunt" artinya "Dia adalah bibi saya".',
  },
  {
    id: 8,
    type: 'Hubungan',
    question: 'Ibu dari ibu kita adalah...',
    clue: 'Generasi paling atas di pohon keluarga.',
    options: ['Mother', 'Aunt', 'Grandmother', 'Sister'],
    correctIndex: 2,
    explanation: 'Ibu dari orang tua kita adalah Nenek, dalam bahasa Inggris disebut "Grandmother".',
  },
];

export interface GrammarRule {
  id: string;
  pattern: string;
  meaning: string;
  usage: string;
  exampleEn: string;
  exampleId: string;
}

export const GRAMMAR_RULES: GrammarRule[] = [
  {
    id: 'this-is',
    pattern: 'This is my ...',
    meaning: 'Ini adalah ... saya',
    usage: 'Dipakai untuk memperkenalkan siapa saja (laki-laki maupun perempuan).',
    exampleEn: 'This is my mother.',
    exampleId: 'Ini adalah ibu saya.',
  },
  {
    id: 'he-is',
    pattern: 'He is my ...',
    meaning: 'Dia (laki-laki) adalah ... saya',
    usage: 'Khusus untuk 1 orang laki-laki: Father, Grandfather, Brother, Uncle.',
    exampleEn: 'He is my grandfather.',
    exampleId: 'Dia adalah kakek saya.',
  },
  {
    id: 'she-is',
    pattern: 'She is my ...',
    meaning: 'Dia (perempuan) adalah ... saya',
    usage: 'Khusus untuk 1 orang perempuan: Mother, Grandmother, Sister, Aunt.',
    exampleEn: 'She is my sister.',
    exampleId: 'Dia adalah saudara perempuan saya.',
  },
  {
    id: 'i-have',
    pattern: 'I have ...',
    meaning: 'Saya mempunyai ...',
    usage: 'Dipakai untuk menyebutkan jumlah saudara yang kita miliki.',
    exampleEn: 'I have one brother and one sister.',
    exampleId: 'Saya mempunyai satu saudara laki-laki dan satu saudara perempuan.',
  },
];

export interface StoryLine {
  id: number;
  english: string;
  indonesian: string;
}

export const FAMILY_STORY_LINES: StoryLine[] = [
  {
    id: 1,
    english: 'Hello friends! My name is Budi.',
    indonesian: 'Halo teman-teman! Nama saya Budi.',
  },
  {
    id: 2,
    english: 'I live with my father, my mother, and my little sister.',
    indonesian: 'Saya tinggal bersama ayah saya, ibu saya, dan adik perempuan saya.',
  },
  {
    id: 3,
    english: 'He is my father. He is very kind.',
    indonesian: 'Dia adalah ayah saya. Dia sangat baik hati.',
  },
  {
    id: 4,
    english: 'She is my mother. She likes cooking.',
    indonesian: 'Dia adalah ibu saya. Dia suka memasak.',
  },
  {
    id: 5,
    english: 'On Sunday, we visit my grandfather and grandmother.',
    indonesian: 'Pada hari Minggu, kami mengunjungi kakek dan nenek saya.',
  },
];

