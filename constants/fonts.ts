import {
    Sora_400Regular,
    Sora_700Bold,
} from "@expo-google-fonts/sora";

import {
    HankenGrotesk_400Regular,
    HankenGrotesk_700Bold,
} from "@expo-google-fonts/hanken-grotesk";

import {
    JetBrainsMono_400Regular,
    JetBrainsMono_700Bold,
} from "@expo-google-fonts/jetbrains-mono";


const fonts = {
    sora: {
        regular: "Sora_400Regular",
        bold: "Sora_700Bold",
    },

    hanken: {
        regular: "HankenGrotesk_400Regular",
        bold: "HankenGrotesk_700Bold",
    },

    jetbrains: {
        regular: "JetBrainsMono_400Regular",
        bold: "JetBrainsMono_700Bold",
    },
} as const;


const fontAssets = {
    Sora_400Regular,
    Sora_700Bold,

    HankenGrotesk_400Regular,
    HankenGrotesk_700Bold,

    JetBrainsMono_400Regular,
    JetBrainsMono_700Bold,
};


export { fonts, fontAssets };