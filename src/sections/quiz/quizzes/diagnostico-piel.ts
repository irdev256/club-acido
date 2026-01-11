import type { QuizDefinition } from '../helpers.ts/types';

export const diagnosticoPielQuiz: QuizDefinition = {
  slug: 'diagnostico-piel',
  title: 'Diagnóstico de tu piel',
  description: 'Descubrí las necesidades de tu piel con este sencillo quiz.',
  theme: {
    accentColor: '#9A6B1F',
    background: `
      radial-gradient(
        circle at top,
        rgba(255,255,255,0.95),
        rgba(234,223,204,0.98)
      )
    `,
  },

  results: [
    {
      id: 'sensible',
      title: 'Piel sensible',
      description: 'Tu piel necesita cuidado especial.',
      recommendation: 'Tratamientos calmantes, limpieza suave e hidratación profunda.',
    },
    {
      id: 'mixta',
      title: 'Piel mixta',
      description: 'Tu piel necesita equilibrio.',
      recommendation: 'Limpiezas profundas combinadas con hidratación.',
    },
  ],

  questions: [
    {
      id: 'sensacion',
      title: '¿Cómo sentís tu piel al despertar?',
      options: [
        {
          id: 'tirante',
          label: 'Tirante o seca',
          scores: [{ resultId: 'sensible', points: 2 }],
        },
        {
          id: 'mixta',
          label: 'Mixta',
          scores: [{ resultId: 'mixta', points: 2 }],
        },
      ],
    },

    {
      id: 'reaccion-sol',
      title: '¿Cómo reacciona tu piel al sol?',
      options: [
        {
          id: 'se-enrojece',
          label: 'Se enrojece fácilmente',
          scores: [{ resultId: 'sensible', points: 3 }],
        },
        {
          id: 'normal',
          label: 'Se adapta bien',
          scores: [{ resultId: 'mixta', points: 1 }],
        },
      ],
    },

    {
      id: 'productos',
      title: '¿Cómo reacciona tu piel ante nuevos productos?',
      options: [
        {
          id: 'irritacion',
          label: 'Suele arder o irritarse',
          scores: [{ resultId: 'sensible', points: 3 }],
        },
        {
          id: 'sin-problemas',
          label: 'Generalmente no tengo problemas',
          scores: [{ resultId: 'mixta', points: 1 }],
        },
      ],
    },

    {
      id: 'brillo',
      title: '¿Notás brillo en tu piel a lo largo del día?',
      options: [
        {
          id: 'no',
          label: 'No, más bien se siente seca',
          scores: [{ resultId: 'sensible', points: 1 }],
        },
        {
          id: 'zona-t',
          label: 'Sí, especialmente en la zona T',
          scores: [{ resultId: 'mixta', points: 2 }],
        },
      ],
    },

    {
      id: 'clima',
      title: '¿Cómo afecta el clima a tu piel?',
      options: [
        {
          id: 'mucho',
          label: 'Se altera con facilidad (frío, calor, viento)',
          scores: [{ resultId: 'sensible', points: 2 }],
        },
        {
          id: 'poco',
          label: 'No noto grandes cambios',
          scores: [{ resultId: 'mixta', points: 1 }],
        },
      ],
    },
  ],
};
