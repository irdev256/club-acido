import { Box } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useEffect, useState } from 'react';
import { CLIENT_AGENDA_PRO } from '../../helpers/constants';

export default function CalendarButton() {
  const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
              const scrolledVh = (window.scrollY / window.innerHeight) * 100;
                    setVisible(scrolledVh > 80);
                        };

                            window.addEventListener('scroll', onScroll, { passive: true });
                                onScroll();

                                    return () => window.removeEventListener('scroll', onScroll);
                                      }, []);

                                        return (
                                            <Box
                                                  role="button"
                                                        aria-label="Reservar turno"
                                                              onClick={() => window.open(CLIENT_AGENDA_PRO, '_blank', 'noopener,noreferrer')}
                                                                    sx={(theme) => ({
                                                                            position: 'fixed',

                                                                                    // 📐 lo ubicamos arriba del botón de scroll
                                                                                            bottom: {
                                                                                                      xs: 16 + 56 + 12,
                                                                                                                md: 24 + 56 + 12,
                                                                                                                        },
                                                                                                                                right: { xs: 16, md: 24 },

                                                                                                                                        width: 56,
                                                                                                                                                height: 56,
                                                                                                                                                        borderRadius: '50%',
                                                                                                                                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                                                                                                                                        color: theme.palette.text.secondary,

                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                        alignItems: 'center',
                                                                                                                                                                                                justifyContent: 'center',

                                                                                                                                                                                                        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                                                                                                                                                                                                                zIndex: 1300,
                                                                                                                                                                                                                        cursor: 'pointer',

                                                                                                                                                                                                                                opacity: visible ? 1 : 0,
                                                                                                                                                                                                                                        transform: visible
                                                                                                                                                                                                                                                  ? 'translateY(0)'
                                                                                                                                                                                                                                                            : 'translateY(12px)',

                                                                                                                                                                                                                                                                    pointerEvents: visible ? 'auto' : 'none',

                                                                                                                                                                                                                                                                            transition:
                                                                                                                                                                                                                                                                                      'opacity 400ms ease, transform 400ms ease, box-shadow 200ms ease',

                                                                                                                                                                                                                                                                                              '&:hover': {
                                                                                                                                                                                                                                                                                                        transform: 'translateY(-2px) scale(1.05)',
                                                                                                                                                                                                                                                                                                                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                                                                                                                                                                                                                                                                                                                            color: theme.palette.primary.main,
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                          })}
                                                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                                                    <CalendarMonthIcon sx={{ fontSize: 28 }} />
                                                                                                                                                                                                                                                                                                                                                        </Box>
                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                          }