import { Box, useTheme } from '@mui/material';

export default function OrganicDivider() {
  const theme = useTheme();
  const NEXT_BG = theme.palette.background.default;
  const ORANGE = theme.palette.primary.main;
  const STROKE = '#4A4A4A';

  const scallopPath = `
    M0,30
    Q15,20 30,30
    Q45,40 60,30
    Q75,20 90,30
    Q105,40 120,30
    Q135,20 150,30
    Q165,40 180,30
    Q195,20 210,30
    Q225,40 240,30
    Q255,20 270,30
    Q285,40 300,30
    Q315,20 330,30
    Q345,40 360,30
    Q375,20 390,30
    Q405,40 420,30
    Q435,20 450,30
    Q465,40 480,30
    Q495,20 510,30
    Q525,40 540,30
    Q555,20 570,30
    Q585,40 600,30
    Q615,20 630,30
    Q645,40 660,30
    Q675,20 690,30
    Q705,40 720,30
    Q735,20 750,30
    Q765,40 780,30
    Q795,20 810,30
    Q825,40 840,30
    Q855,20 870,30
    Q885,40 900,30
    Q915,20 930,30
    Q945,40 960,30
    Q975,20 990,30
    Q1005,40 1020,30
    Q1035,20 1050,30
    Q1065,40 1080,30
    Q1095,20 1110,30
    Q1125,40 1140,30
    Q1155,20 1170,30
    Q1185,40 1200,30
    Q1215,20 1230,30
    Q1245,40 1260,30
    Q1275,20 1290,30
    Q1305,40 1320,30
    Q1335,20 1350,30
    Q1365,40 1380,30
    Q1395,20 1410,30
    Q1425,40 1440,30
  `;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 55, md: 70 },
        backgroundColor: ORANGE,
        overflow: 'hidden',
      }}
    >
      {/* TOP scallops */}
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: -1,
          left: 0,
          width: '100%',
          height: 36,
          pointerEvents: 'none',
        }}
      >
        <path d={`${scallopPath} L1440,0 L0,0 Z`} fill={NEXT_BG} />
        <path d={scallopPath} fill="none" stroke={STROKE} strokeWidth={2} />
      </Box>

      {/* BOTTOM scallops */}
      <Box
        component="svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          height: 36,
          pointerEvents: 'none',
          transform: 'scaleY(-1)',
        }}
      >
        <path d={`${scallopPath} L1440,0 L0,0 Z`} fill={NEXT_BG} />
        <path d={scallopPath} fill="none" stroke={STROKE} strokeWidth={2} />
      </Box>
    </Box>
  );
}
