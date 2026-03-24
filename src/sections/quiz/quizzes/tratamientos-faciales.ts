import { CLIENT_AGENDA_PRO } from '../../../helpers/constants';
import type { QuizDefinition } from '../helpers.ts/types';

export const tratamientosFacialesQuiz: QuizDefinition = {
  slug: 'tratamientos-faciales',
  title: 'Encontrá tu tratamiento facial ideal',
  description: 'Respondé estas preguntas y te sugerimos una opción inicial para conversar y ajustar en cabina si hace falta.',
  theme: {
    accentColor: '#BC5EE8',
  },
  results: [
    {
      id: 'higiene-extracciones',
      title: 'Higiene facial básica con extracciones',
      description: 'Tu piel se siente desvitalizada, con puntos negros visibles y, a veces, brillo en la zona T.',
      recommendation:
        'Es una opción muy útil para limpiar en profundidad, preparar la piel para las extracciones, descongestionarla, hidratarla y protegerla sin sobrecargarla. La idea es que la sientas más limpia, fresca y equilibrada.',
      ctaLabel: 'Agendar higiene facial',
      ctaUrl: CLIENT_AGENDA_PRO,
    },
    {
      id: 'dermaplaning',
      title: 'Dermaplaning facial',
      description: 'Tu piel se ve opaca, con poros dilatados y una textura algo áspera al tacto.',
      recommendation:
        'Te lo recomendamos si buscás luminosidad, suavidad y un tono más uniforme en el momento. La exfoliación mecánica elimina células muertas y vello facial fino para dejar la piel más receptiva a los activos que devuelven brillo al rostro.',
      disclaimer: 'Si hay acné activo o la piel está irritada, este tratamiento no suele ser la mejor opción.',
      ctaLabel: 'Agendar dermaplaning',
      ctaUrl: CLIENT_AGENDA_PRO,
    },
    {
      id: 'electroporacion',
      title: 'Higiene facial premium con electroporación',
      description: 'Tu piel se siente sensible, deshidratada o con la barrera alterada, incluso por exposición solar.',
      recommendation:
        'Es un tratamiento noble y versátil para pieles que necesitan cuidado extra. La electroporación trabaja con impulsos suaves y controlados para favorecer el ingreso de activos específicos sin agredir la piel, priorizando hidratación, reparación y confort.',
      ctaLabel: 'Agendar higiene premium',
      ctaUrl: CLIENT_AGENDA_PRO,
    },
    {
      id: 'dermapen',
      title: 'Higiene facial con Dermapen',
      description: 'Tu piel presenta poros dilatados, pérdida de firmeza, cicatrices de acné o manchas que querés tratar de forma más intensa.',
      recommendation:
        'El Dermapen ayuda a estimular la regeneración del tejido mediante microlesiones controladas. Según el objetivo del tratamiento, se puede trabajar con nanoagujas o microagujas y sumar activos estériles para acompañar firmeza, textura, marcas o tono.',
      disclaimer: 'No suele indicarse en pieles reactivas o muy sensibles.',
      ctaLabel: 'Agendar Dermapen',
      ctaUrl: CLIENT_AGENDA_PRO,
    },
    {
      id: 'peeling',
      title: 'Peeling facial',
      description: 'Tu piel pide renovación: buscás mejorar manchas, unificar el tono, hidratar, revitalizar o trabajar la textura.',
      recommendation:
        'El peeling es una exfoliación química que renueva las células de la piel con ácidos elegidos según la necesidad y la época del año. Hay opciones compatibles con verano y otras más propias de otoño e invierno, siempre con cuidados específicos.',
      disclaimer: 'La elección del ácido y la intensidad se ajustan según tu piel y la temporada.',
      ctaLabel: 'Agendar peeling',
      ctaUrl: CLIENT_AGENDA_PRO,
    },
  ],
  questions: [
    {
      id: 'molestia-principal',
      title: '¿Qué es lo que más te molesta de tu piel hoy?',
      subtitle: 'Podés elegir más de una opción.',
      allowMultiple: true,
      options: [
        {
          id: 'poros-puntos-negros',
          label: 'Poros dilatados o puntos negros',
          scores: [
            { resultId: 'higiene-extracciones', points: 4 },
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'manchas-marcas',
          label: 'Manchas o marcas / cicatrices',
          scores: [
            { resultId: 'dermapen', points: 3 },
            { resultId: 'peeling', points: 3 },
          ],
        },
        {
          id: 'textura-opaca',
          label: 'Textura opaca o apagada',
          scores: [
            { resultId: 'dermaplaning', points: 4 },
            { resultId: 'peeling', points: 2 },
          ],
        },
        {
          id: 'deshidratada',
          label: 'La siento deshidratada',
          scores: [
            { resultId: 'electroporacion', points: 4 },
            { resultId: 'peeling', points: 1 },
          ],
        },
      ],
    },
    {
      id: 'piel-dia-a-dia',
      title: '¿Cómo describirías tu piel en el día a día?',
      subtitle: 'Podés elegir más de una opción si tu piel cambia según el momento.',
      allowMultiple: true,
      options: [
        {
          id: 'normal',
          label: 'Normal o bastante estable',
          scores: [
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'grasa',
          label: 'Brilla mucho y se engrasa fácil',
          scores: [
            { resultId: 'higiene-extracciones', points: 3 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'seca',
          label: 'Se siente seca o tirante',
          scores: [
            { resultId: 'electroporacion', points: 3 },
            { resultId: 'dermaplaning', points: 1 },
          ],
        },
        {
          id: 'sensible',
          label: 'Es sensible o se enrojece fácil',
          scores: [
            { resultId: 'electroporacion', points: 4 },
            { resultId: 'higiene-extracciones', points: 1 },
          ],
        },
      ],
    },
    {
      id: 'comedones',
      title: '¿Tenés puntos negros (comedones)?',
      options: [
        {
          id: 'muchos',
          label: 'Sí, muchos',
          scores: [
            { resultId: 'higiene-extracciones', points: 4 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'algunos',
          label: 'Algunos',
          scores: [
            { resultId: 'higiene-extracciones', points: 2 },
            { resultId: 'dermaplaning', points: 1 },
          ],
        },
        {
          id: 'no',
          label: 'No',
          scores: [
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'electroporacion', points: 1 },
            { resultId: 'dermapen', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
      ],
    },
    {
      id: 'irritacion-activa',
      title: '¿Tenés granitos inflamados o la piel muy irritada?',
      options: [
        {
          id: 'si',
          label: 'Sí',
          excludeResultIds: ['dermaplaning', 'dermapen', 'peeling'],
          scores: [
            { resultId: 'electroporacion', points: 3 },
            { resultId: 'higiene-extracciones', points: 2 },
          ],
        },
        {
          id: 'algunos',
          label: 'Algún que otro granito puede ser',
          scores: [
            { resultId: 'higiene-extracciones', points: 2 },
            { resultId: 'electroporacion', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'no',
          label: 'No',
          scores: [
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'dermapen', points: 2 },
            { resultId: 'peeling', points: 2 },
          ],
        },
      ],
    },
    {
      id: 'reaccion-productos',
      title: '¿Tu piel suele reaccionar mal a algunos productos o tratamientos?',
      options: [
        {
          id: 'muy-seguido',
          label: 'Muy seguido',
          excludeResultIds: ['dermapen', 'peeling'],
          scores: [
            { resultId: 'electroporacion', points: 4 },
            { resultId: 'higiene-extracciones', points: 1 },
          ],
        },
        {
          id: 'alguna-vez',
          label: 'Alguna vez me pasó',
          scores: [
            { resultId: 'electroporacion', points: 2 },
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'higiene-extracciones', points: 1 },
          ],
        },
        {
          id: 'nunca',
          label: 'No, nunca',
          scores: [
            { resultId: 'dermapen', points: 2 },
            { resultId: 'peeling', points: 2 },
            { resultId: 'dermaplaning', points: 1 },
          ],
        },
      ],
    },
    {
      id: 'opaca-sin-brillo',
      title: '¿Sentís la piel opaca y sin brillo?',
      options: [
        {
          id: 'si-mucho',
          label: 'Sí, bastante',
          scores: [
            { resultId: 'dermaplaning', points: 4 },
            { resultId: 'peeling', points: 2 },
          ],
        },
        {
          id: 'un-poco',
          label: 'Un poco, según el día',
          scores: [
            { resultId: 'dermaplaning', points: 2 },
            { resultId: 'electroporacion', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'no',
          label: 'No',
          scores: [
            { resultId: 'higiene-extracciones', points: 1 },
            { resultId: 'electroporacion', points: 1 },
          ],
        },
      ],
    },
    {
      id: 'experiencia',
      title: '¿Qué tan acostumbrada estás a hacerte tratamientos faciales?',
      options: [
        {
          id: 'primera-vez',
          label: 'Sería mi primera vez',
          scores: [
            { resultId: 'higiene-extracciones', points: 2 },
            { resultId: 'electroporacion', points: 2 },
          ],
        },
        {
          id: 'algunas-veces',
          label: 'Me hice un par de veces hace tiempo',
          scores: [
            { resultId: 'higiene-extracciones', points: 1 },
            { resultId: 'dermaplaning', points: 1 },
            { resultId: 'peeling', points: 1 },
          ],
        },
        {
          id: 'suelo-hacerme',
          label: 'Suelo probar y hacerme tratamientos estéticos',
          scores: [
            { resultId: 'dermapen', points: 2 },
            { resultId: 'peeling', points: 2 },
            { resultId: 'dermaplaning', points: 1 },
          ],
        },
      ],
    },
  ],
};