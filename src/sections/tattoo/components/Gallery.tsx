import { Box, Button, Container, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CLIENT_TATTOO_LETI_INSTAGRAM_LINK, Z_INDEX } from '../../../helpers/constants';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import { useEffect } from 'react';

type GalleryImage = {
  thumb: string;
  full: string;
};

const images: GalleryImage[] = [
  { thumb: '/tattoo-gallery/1-thumb.PNG', full: '/tattoo-gallery/1-full.PNG' },
  { thumb: '/tattoo-gallery/2-thumb.PNG', full: '/tattoo-gallery/2-full.PNG' },
  { thumb: '/tattoo-gallery/3-thumb.PNG', full: '/tattoo-gallery/3-full.PNG' },
  { thumb: '/tattoo-gallery/4-thumb.PNG', full: '/tattoo-gallery/4-full.PNG' },
  { thumb: '/tattoo-gallery/5-thumb.PNG', full: '/tattoo-gallery/5-full.PNG' },
  { thumb: '/tattoo-gallery/6-thumb.PNG', full: '/tattoo-gallery/6-full.PNG' },
  { thumb: '/tattoo-gallery/7-thumb.PNG', full: '/tattoo-gallery/7-full.PNG' },
  { thumb: '/tattoo-gallery/8-thumb.PNG', full: '/tattoo-gallery/8-full.PNG' },
  { thumb: '/tattoo-gallery/9-thumb.PNG', full: '/tattoo-gallery/9-full.PNG' },
  { thumb: '/tattoo-gallery/10-thumb.PNG', full: '/tattoo-gallery/10-full.PNG' },
  { thumb: '/tattoo-gallery/11-thumb.PNG', full: '/tattoo-gallery/11-full.PNG' },
  { thumb: '/tattoo-gallery/12-thumb.PNG', full: '/tattoo-gallery/12-full.PNG' },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setOpenIndex(index);

    // preload next & prev
    const next = images[(index + 1) % images.length].full;
    const prev = images[(index - 1 + images.length) % images.length].full;

    preloadImage(next);
    preloadImage(prev);
  };

  const closeImage = () => setOpenIndex(null);

  const showPrev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));

  const showNext = () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        showPrev();
      }

      if (e.key === 'ArrowRight') {
        showNext();
      }

      if (e.key === 'Escape') {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openIndex]);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Stack spacing={2} alignItems="flex-end">
          <Box
            component="button"
            type="button"
            aria-label="Abrir Instagram de Leti"
            onClick={() => window.open(CLIENT_TATTOO_LETI_INSTAGRAM_LINK, '_blank')}
            sx={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 1,
              cursor: 'pointer',
              border: 0,
              background: 'transparent',
              p: 0,
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              '&:hover': { opacity: 0.75 },
              '&:focus-visible': {
                outline: '2px solid currentColor',
                outlineOffset: 4,
              },
            }}
          >
            <InstagramIcon
              sx={{
                fontSize: 36,
                color: 'secondary.main',
                transform: 'translateY(8px)',
              }}
            />

            <Typography
              component="span"
              sx={{
                fontSize: { xs: 26, md: 34 },
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              @leti.riot
            </Typography>
          </Box>

          <Typography sx={{ color: 'text.secondary', maxWidth: 480 }}>Trabajos reales. Blackwork. Procesos hechos con tiempo.</Typography>
        </Stack>

        {/* ================= GRID ================= */}
        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 1.5,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="button"
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => openImage(index)}
              sx={{
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: 1,
                cursor: 'pointer',
                border: 0,
                p: 0,
                background: 'transparent',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',

                '&:hover img': { transform: 'scale(1.05)' },
                '&:hover .overlay': { opacity: 1 },
                '&:focus-visible .overlay': { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src={img.thumb}
                loading="lazy"
                alt=""
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 400ms ease',
                }}
              />

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 300ms ease',
                }}
              >
                <VisibilityIcon sx={{ color: '#fff', fontSize: 36 }} />
              </Box>
            </Box>
          ))}
        </Box>
        {openIndex !== null && (
          <Box
            onClick={closeImage}
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: Z_INDEX.TATTOO_GALLERY_MODAL,
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Imagen */}
            <Box
              onClick={(e) => e.stopPropagation()}
              component="img"
              src={images[openIndex].full}
              sx={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />

            {/* Cerrar */}
            <IconButton
              aria-label="Cerrar galería"
              onClick={closeImage}
              sx={{
                position: 'fixed',
                top: { xs: 'calc(10px + env(safe-area-inset-top))', md: 20 },
                right: { xs: 'calc(10px + env(safe-area-inset-right))', md: 20 },
                color: '#fff',
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Prev */}
            <IconButton
              aria-label="Imagen anterior"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              sx={{
                position: 'fixed',
                left: { xs: 'calc(8px + env(safe-area-inset-left))', md: 20 },
                bottom: { xs: 'calc(12px + env(safe-area-inset-bottom))', md: 'auto' },
                top: { xs: 'auto', md: '50%' },
                transform: { md: 'translateY(-50%)' },
                color: '#fff',
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>

            {/* Next */}
            <IconButton
              aria-label="Imagen siguiente"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              sx={{
                position: 'fixed',
                right: { xs: 'calc(8px + env(safe-area-inset-right))', md: 20 },
                bottom: { xs: 'calc(12px + env(safe-area-inset-bottom))', md: 'auto' },
                top: { xs: 'auto', md: '50%' },
                transform: { md: 'translateY(-50%)' },
                color: '#fff',
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Box>
        )}

        {/* ================= CTA ================= */}
        <Box sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            startIcon={<InstagramIcon />}
            onClick={() => window.open(CLIENT_TATTOO_LETI_INSTAGRAM_LINK, '_blank', 'noopener,noreferrer')}
            sx={{
              borderRadius: 999,
              px: 3.5,
              py: 1.2,
              fontWeight: 600,
            }}
          >
            Ver más en Instagram
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// ---- Helpers ----

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};
