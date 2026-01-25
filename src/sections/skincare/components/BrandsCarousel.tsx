import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const brands = [
  { name: 'Siluma', logo: '/brands/Siluma.png' },
  { name: 'HDM', logo: '/brands/hdm.png' },
  { name: 'Especificos Buenos Aires', logo: '/brands/especificosba.jpg' },
  { name: 'Zine', logo: '/brands/zine.png' },
  { name: 'SZ lab', logo: '/brands/szlab.png' },
  { name: 'Dermassy', logo: '/brands/dermassy.png' },
  { name: 'Farmacia once', logo: '/brands/farmaciaonce.png' },
  { name: 'Magistral Lacroze', logo: '/brands/magistrallacroze.png' },
  { name: 'Coony', logo: '/brands/coony.png' },
  { name: 'BEK', logo: '/brands/bek.avif' },
];

export default function BrandsCarousel() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 6,
        overflow: 'hidden',
      }}
    >
      {/* Fondo suave */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              180deg,
              rgba(254,252,250,0.95),
              rgba(255,255,255,0.98)
            )
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            mb: 8,
          }}
        >
          {/* Línea izquierda */}
          <Box
            sx={{
              flex: 1,
              height: '2px',
              backgroundColor: '#9A6B1F',
              opacity: 0.4,
              mr: 3,
            }}
          />

          {/* Texto */}
          <Typography
            variant="overline"
            sx={{
              px: 3,
              color: '#9A6B1F',
              letterSpacing: 1.5,
              fontSize: { xs: 14, md: 26 },
              whiteSpace: 'nowrap',
            }}
          >
            Marcas con las que trabajamos
          </Typography>

          {/* Línea derecha */}
          <Box
            sx={{
              flex: 1,
              height: '2px',
              backgroundColor: '#9A6B1F',
              opacity: 0.4,
              ml: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            maskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        black 10%,
        black 90%,
        transparent 100%
      )
    `,
            WebkitMaskImage: `
      linear-gradient(
        to right,
        transparent 0%,
        black 10%,
        black 90%,
        transparent 100%
      )
    `,
          }}
        >
          <Swiper
            modules={[Autoplay]}
            loop
            speed={1300}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={2.5}
            spaceBetween={40}
            breakpoints={{
              600: { slidesPerView: 3.5 },
              900: { slidesPerView: 5 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <Box
                  sx={{
                    height: 100,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'grayscale(100%)',
                    opacity: 0.75,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={brand.logo}
                    alt={brand.name}
                    sx={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
