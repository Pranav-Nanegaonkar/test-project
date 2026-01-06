import { Fonts } from '../constants/fonts';

export const Typography = {
  default: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: '#000',
  },
  medium: {
    fontFamily: Fonts.Medium,
  },
  semiBold: {
    fontFamily: Fonts.SemiBold,
  },
  bold: {
    fontFamily: Fonts.Bold,
  },
  extraBold: {
    fontFamily: Fonts.ExtraBold,
  },
} as const;
