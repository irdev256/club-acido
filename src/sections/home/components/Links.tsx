import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { PagesInfo } from '../../../helpers/constants';

type TitlePosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';

type TitleColor = 'secondary' | 'accent' | 'highlight';

type LinkCardProps = {
  title: string;
  image: string;
  titlePosition: TitlePosition;
  titleColor: TitleColor;
  onClick?: () => void;
  ariaLabel: string;
};

function LinkCard({ title, image, titlePosition, titleColor, onClick, ariaLabel }: LinkCardProps) {
  const style = positionStyles[titlePosition];

  return (
    <Box
      onClick={onClick}
      role="img"
      aria-label={ariaLabel}
      sx={{
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          width: { xs: 220, md: 300 },
          aspectRatio: '1 / 1',
        }}
      >
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
            boxShadow: {
              xs: 1,
              md: 3,
            },

            ...(style?.top !== undefined && { top: style.top }),
            ...(style?.bottom !== undefined && { bottom: style.bottom }),
            ...(style?.left !== undefined && { left: style.left }),
            ...(style?.right !== undefined && { right: style.right }),
            ...(style?.transform && { transform: style.transform }),
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
  return (
    <Box
      id={PagesInfo.HOME.sections.LINKS}
      sx={{
        mt: 6,
      }}
    >
      <Grid container spacing={{ xs: 6, md: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <LinkCard title="Skincare" image="/skincare.jpeg" titlePosition="top" titleColor="secondary" ariaLabel="Skincare" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <LinkCard title="Tattoo" image="/tattoo.jpg" titlePosition="bottom" titleColor="accent" ariaLabel="Tattoo" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <LinkCard title="Talleres" image="/talleres.jpg" titlePosition="top" titleColor="highlight" ariaLabel="Talleres" />
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
    transform?: string;
  }
> = {
  top: {
    top: -28,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    bottom: -28,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'top-left': {
    top: -20,
    left: -12,
  },
  'top-right': {
    top: -20,
    right: -12,
  },
  'bottom-left': {
    bottom: -20,
    left: -12,
  },
  'bottom-right': {
    bottom: -20,
    right: -12,
  },
};
