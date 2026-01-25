import { SvgIcon, type SvgIconProps } from '@mui/material';

export default function TikTokIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 48 48"
      sx={{
        transform: 'translateY(2px)',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.8 6.1c2.2 1.6 4.9 2.6 7.7 2.8v7.2c-2.9-.1-5.6-.9-8-2.2v14.5c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.7 0 1.4.1 2.1.2v7.5c-.7-.3-1.4-.4-2.1-.4-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V2h7.9c.2 1.5.8 3 1.9 4.1z"
      />
    </SvgIcon>
  );
}
