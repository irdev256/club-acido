import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { PagesInfo } from '../../../helpers/constants';
import { useNavigate } from 'react-router-dom';

type TitlePosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

type TitleColor = 'primary' | 'secondary' | 'accent' | 'highlight';

type LinkCardProps = {
  title: string;
  image: string;
  titlePosition: TitlePosition;
  titleColor: TitleColor;
  onClick?: () => void;
  ariaLabel: string;
  comingSoon?: boolean;
};

function LinkCard({ title, image, titlePosition, titleColor, onClick, ariaLabel, comingSoon }: LinkCardProps) {
  const style = positionStyles[titlePosition];

  return (
  <Box
    className="link-card"
    onClick={comingSoon ? undefined : onClick}
    role="img"
    aria-label={ariaLabel}
    sx={{
      width: '100%',
      cursor: comingSoon ? 'default' : 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pointerEvents: 'auto',
      opacity: comingSoon ? 0.9 : 1,
    }}
  >
      {/* TÍTULO MOBILE */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'relative',
          zIndex: 2,

          px: 2.5,
          py: 0.75,
          willChange: 'transform',

          transform: 'translateY(22px)',

          backgroundColor: (theme) => theme.palette[titleColor].main,
          color: (theme) => theme.palette[titleColor].contrastText,
          borderRadius: 1,
          boxShadow: {
            xs: 1,
            md: 3,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: 'uppercase',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* WRAPPER CÍRCULO */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: 220, sm: 260, md: 300 },
          aspectRatio: '1 / 1',
        }}
      >
      {comingSoon && (
        <Box
          sx={(theme) => ({
            position: 'absolute',
            zIndex: 3,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-12deg)',

            px: 4,
            py: 1,
         
            color: theme.palette.highlight.main,
            backgroundColor: theme.palette.highlight.contrastText,

            fontWeight: 900,
            fontSize: { xs: 18, md: 22 },
            letterSpacing: 2,
            textTransform: 'uppercase',

            boxShadow: '0 6px 16px rgba(0,0,0,0.35)',
            borderRadius: 0.75,

            pointerEvents: 'none',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',

            '@media (hover: hover)': {
              '.link-card:hover &': {
                transform: 'translate(-50%, -50%) rotate(-8deg) scale(1.06)',
                boxShadow: '0 10px 26px rgba(0,0,0,0.45)',
              },
            },
          })}
        >
          PRÓXIMAMENTE
        </Box>
      )}


        {/* TÍTULO DESKTOP */}
        <Box
          sx={(theme) => ({
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            zIndex: 2,
            px: 4,
            py: 1,
            backgroundColor: theme.palette[titleColor].main,
            color: theme.palette[titleColor].contrastText,
            borderRadius: 1,
            boxShadow: { xs: 1, md: 3 },

            ...(style?.top !== undefined && { top: style.top }),
            ...(style?.bottom !== undefined && { bottom: style.bottom }),
            ...(style?.left !== undefined && { left: style.left }),
            ...(style?.right !== undefined && { right: style.right }),

            transform: `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ${style?.left === '50%' ? 'translateX(-50%)' : ''}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rotate(${style?.rotate ?? 0}deg)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          `,

            transition: 'transform 0.25s ease',

            '@media (hover: hover)': {
              '.link-card:hover &': {
                transform: `
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ${style?.left === '50%' ? 'translateX(-50%)' : ''}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                rotate(${(style?.rotate ?? 0) * 0.3}deg)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                scale(1.06)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              `,
              },
            },
          })}
        >
          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: 'uppercase',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* CÍRCULO */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform',
            transition: 'transform 0.3s ease',
            '@media (hover: hover)': {
              '&:hover': {
                transform: 'scale(1.04)',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default function Links() {
  const navigate = useNavigate();
  return (
    <Box
      id={PagesInfo.HOME.sections.LINKS}
      sx={{
        mt: 6,
      }}
    >
    <Grid
  container
  spacing={{ xs: 6, md: 8 }}
  sx={{
    position: 'relative',
  }}
>
  <Grid size={{ xs: 12, md: 3 }}>
    <LinkCard
      onClick={() => navigate(PagesInfo.SKINCARE.path)}
      title="Skincare"
      image="/skincare.jpeg"
      titlePosition="top"
      titleColor="secondary"
      ariaLabel="Skincare"
    />
  </Grid>

  <Grid size={{ xs: 12, md: 3 }}>
    <LinkCard
      onClick={() => navigate(PagesInfo.TATTOO.path)}
      title="Tattoo"
      image="/tattoo-nuevo-1.jpg"
      titlePosition="top"
      titleColor="accent"
      ariaLabel="Tattoo"
    />
  </Grid>

  <Grid size={{ xs: 12, md: 3 }}>
    <LinkCard
      onClick={() => navigate('/masajes')} // cambiá por PagesInfo.MASAJES.path si lo agregás
      title="Masajes"
      image="/masajes.jpg" 
      titlePosition="top-right"
      titleColor="primary"
      ariaLabel="Masajes"
    />
  </Grid>

  <Grid size={{ xs: 12, md: 3 }}>
    <LinkCard
      title="Talleres"
      image="/talleres.jpg"
      titlePosition="top-right"
      titleColor="highlight"
      ariaLabel="Talleres"
      comingSoon
    />
  </Grid>
</Grid>
    </Box>
  );
}

const positionStyles: Record<
  TitlePosition,
  {
    top?: number;
    bottom?: number;
    left?: number | string;
    right?: number | string;
    rotate?: number;
  }
> = {
  top: {
    top: -28,
    left: '50%',
    rotate: -3,
  },
  bottom: {
    bottom: -28,
    left: '50%',
    rotate: 2,
  },
  'top-left': {
    top: -20,
    left: -12,
    rotate: -5,
  },
  'top-right': {
    top: -20,
    right: -12,
    rotate: 4,
  },
  'bottom-left': {
    bottom: -20,
    left: -12,
    rotate: -2,
  },
  'bottom-right': {
    bottom: -20,
    right: -12,
    rotate: 3,
  },
};
