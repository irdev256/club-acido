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
  const positionStyles = {
    top: { top: -28, left: '50%', transform: 'translateX(-50%)' },
    'top-left': { top: -20, left: -12 },
    'top-right': { top: -20, right: -12 },
    bottom: { bottom: -28, left: '50%', transform: 'translateX(-50%)' },
    'bottom-left': { bottom: -20, left: -12 },
    'bottom-right': { bottom: -20, right: -12 },
  };

  return (
    <Box
      onClick={onClick}
      role="img"
      aria-label={ariaLabel}
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {/* TÍTULO */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          zIndex: 2,
          px: { xs: 2.5, md: 4 },
          py: { xs: 0.75, md: 1 },
          backgroundColor: theme.palette[titleColor].main,
          color: theme.palette[titleColor].contrastText,
          borderRadius: 1,
          boxShadow: theme.shadows[3],
          ...positionStyles[titlePosition],
        })}
      >
        <Typography
          sx={{
            fontSize: { xs: 22, md: 32 },
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
          width: { xs: 220, md: 300 },
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.3s ease',

          '&:hover': {
            transform: 'scale(1.04)',
          },
        }}
      />
    </Box>
  );
}

export default function Links() {
  return (
    <Box id={PagesInfo.HOME.sections.LINKS} sx={{ mt: 6 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard title="Skincare" image="/skincare.jpeg" titlePosition="top" titleColor="secondary" ariaLabel="Skincare" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard title="Tattoo" image="/tattoo.jpg" titlePosition="bottom" titleColor="accent" ariaLabel="Tattoo" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard title="Talleres" image="/talleres.jpg" titlePosition="top" titleColor="highlight" ariaLabel="Talleres" />
        </Grid>
      </Grid>
    </Box>
  );
}
