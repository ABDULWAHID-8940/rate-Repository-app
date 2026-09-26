import { Platform } from "react-native";

export const themes = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#ffffff',
        primary: '#0366d6',
        backgroundPrimary: '#0266D6',
        backgroundSecondary: '#24292e',

    },
    fontSizes: {
        body: 14,
        subheading: 16,
        heading: 20,
    },
    fonts: {
        main: 'System',
        bold: 'System-Bold',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    fontFamily: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
    }),
    
};