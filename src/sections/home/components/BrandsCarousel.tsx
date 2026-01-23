import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const brands = [
  { name: 'Siluma', logo: '/brands/siluma.svg' },
  { name: 'HDM', logo: '/brands/hdm.svg' },
  { name: 'Especificos Buenos Aires', logo: '/brands/especificosba.svg' },
  { name: 'Zine', logo: '/brands/zine.svg' },
  { name: 'SZ lab', logo: '/brands/szlab.svg' },
  { name: 'Dermassy', logo: '/brands/dermassy.svg' },
  { name: 'Farmacia once', logo: '/brands/farmaciaonce.svg' },
  { name: 'Magistral Lacroze', logo: '/brands/magistrallacroze.svg' },
  { name: 'Coony', logo: '/brands/coony.svg' },
  { name: 'BEK', logo: '/brands/bek.svg' },
];

export default function BrandsCarousel() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 6, md: 8 },
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

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: '#9A6B1F',
            letterSpacing: 1.5,
            mb: 3,
          }}
        >
          Marcas con las que trabajamos
        </Typography>

        <Swiper
          modules={[Autoplay]}
          loop
          speed={6000}
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
                  height: 80,
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
                    maxHeight: 50,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
