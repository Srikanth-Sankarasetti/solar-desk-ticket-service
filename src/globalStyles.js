import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  // Main backgrounds
  headerBg: "#ffffff",
  dashboardBg: "#f8fafc", // Subtle gray-blue for reduced eye strain

  // Text colors
  textBody: "#1f2937", // Keep your original body text - main content
  textHeader: "#047857", // Keep your original header text - headings
  textSecondary: "#6b7280", // Gray-500 - secondary information, descriptions
  textMuted: "#9ca3af", // Gray-400 - subtle text, timestamps, metadata
  textLight: "#d1d5db", // Gray-300 - very light text, captions
  textPlaceholder: "#9ca3af", // Gray-400 - input placeholders
  textLink: "#047857", // Emerald-800 - clickable links (matches header)
  textLinkHover: "#065f46", // Emerald-900 - hovered links

  // Buttons
  buttonPrimarybg: "#0891b2", // Cyan-600 - more professional than bright green
  buttonPrimaryText: "#ffffff",
  buttonSecondaryBg: "#f1f5f9", // Slate-100
  buttonSecondaryText: "#475569", // Slate-600
  buttonPrimaryHoverBg: "#067c9b",

  // Icons and accents
  iconColor: "#0891b2", // Matches primary button
  borderColor: "#e2e8f0", // Slate-200 - softer borders

  // Cards and forms
  cardBg: "#ffffff",
  formBg: "#ffffff",
  formInputBg: "#f8fafc", // Slate-50
  formText: "#334155", // Slate-700
  formLabel: "#64748b", // Slate-500

  // Navigation - Enhanced with better hierarchy
  navBg: "#ffffff",
  navText: "#64748b", // Slate-500 - softer default state
  navIconColor: "#94a3b8", // Slate-400

  navActiveBg: "#0891b2", // Primary color background
  navActiveText: "#ffffff", // White text on colored background
  navIconActive: "#ffffff",

  navHoverBg: "#f1f5f9", // Slate-100
  navHoverText: "#334155", // Slate-700
  navIconHover: "#0891b2",

  navBorderColor: "#e2e8f0", // Slate-200

  // Status colors
  successColor: "#059669", // Emerald-600
  warningColor: "#d97706", // Amber-600
  errorColor: "#dc2626", // Red-600
  infoColor: "#2563eb", // Blue-600

  statusTabText: "#64748b", // Slate-500 - default tab text
  statusTabTextActive: "#1f2937", // Gray-800 - active tab text
  statusTabHoverBg: "#f1f5f9", // Slate-100 - hover background
  statusTabHoverText: "#334155", // Slate-700 - hover text

  // Active border bottom colors for different statuses
  statusOpenBorder: "#f59e0b", // Amber-500 - Open status border
  statusProgressBorder: "#3b82f6", // Blue-500 - In Progress status border
  statusResolvedBorder: "#10b981", // Emerald-500 - Resolved status border

  scrollbarTrack: "#f1f1f1",
  scrollbarThumb: "#c1c1c1",
  scrollbarThumbHover: "#a8a8a8",
  scrollbarThumbActive: "#8e8e8e",
  borderColor: "#e0e0e0",
  rowBorderColor: "#f0f0f0",
  rowHoverColor: "#f8f9fa",

  inputBg: "#ffffff", // White input background
  inputBgDisabled: "#f9fafb", // Gray-50 - Disabled input background
  inputBgFocus: "#ffffff", // White when focused
  inputBorder: "#d1d5db", // Gray-300 - Default border
  inputBorderFocus: "#0891b2", // Cyan-600 - Focus border (matches primary)
  inputBorderError: "#dc2626", // Red-600 - Error border
  inputBorderSuccess: "#059669", // Emerald-600 - Success border
  inputText: "#1f2937", // Gray-800 - Input text
  inputTextDisabled: "#9ca3af", // Gray-400 - Disabled input text
  inputPlaceholder: "#9ca3af", // Gray-400 - Placeholder text
  inputShadowFocus: "rgba(8, 145, 178, 0.1)", // Cyan focus shadow

  statusWarningBg: "#fef3c7", // Amber-100 - matches your yellow card
  statusWarningText: "#d97706", // Amber-600
  statusWarningBorder: "#f59e0b", // Amber-500
  statusWarningIcon: "#f59e0b", // Amber-500

  statusOptimalBg: "#d1fae5", // Emerald-100 - matches your green cards
  statusOptimalText: "#059669", // Emerald-600
  statusOptimalBorder: "#10b981", // Emerald-500
  statusOptimalIcon: "#10b981", // Emerald-500

  statusCriticalBg: "#fee2e2", // Red-100 - matches your red card
  statusCriticalText: "#dc2626", // Red-600
  statusCriticalBorder: "#ef4444", // Red-500
  statusCriticalIcon: "#ef4444", // Red-500
};

// 🌙 Enhanced Dark Theme - Sophisticated and easy on the eyes
export const darkTheme = {
  // Main backgrounds
  headerBg: "#0f172a", // Slate-900
  dashboardBg: "#020617", // Slate-950

  // Text colors
  textBody: "#e5e7eb", // Keep your original body text - main content
  textHeader: "#86efac", // Keep your original header text - headings
  textSecondary: "#9ca3af", // Gray-400 - secondary information, descriptions
  textMuted: "#6b7280", // Gray-500 - subtle text, timestamps, metadata
  textLight: "#4b5563", // Gray-600 - very light text, captions
  textPlaceholder: "#6b7280", // Gray-500 - input placeholders
  textLink: "#86efac", // Light green - clickable links (matches header)
  textLinkHover: "#bbf7d0", // Emerald-200 - hovered links

  // Buttons
  buttonPrimarybg: "#0891b2", // Cyan-600 - consistent with light theme
  buttonPrimaryText: "#ffffff",
  buttonSecondaryBg: "#334155", // Slate-700
  buttonSecondaryText: "#cbd5e1", // Slate-300
  buttonPrimaryHoverBg: "#067c9b",

  // Icons and accents
  iconColor: "#22d3ee", // Cyan-400
  borderColor: "#334155", // Slate-700

  // Cards and forms
  cardBg: "#1e293b", // Slate-800
  formBg: "#1e293b", // Slate-800
  formInputBg: "#334155", // Slate-700
  formText: "#e2e8f0", // Slate-200
  formLabel: "#94a3b8", // Slate-400

  // Navigation - Refined dark navigation
  navBg: "#0f172a", // Slate-900
  navText: "#94a3b8", // Slate-400
  navIconColor: "#64748b", // Slate-500

  navActiveBg: "#0891b2", // Primary color
  navActiveText: "#ffffff",
  navIconActive: "#ffffff",

  navHoverBg: "#1e293b", // Slate-800
  navHoverText: "#cbd5e1", // Slate-300
  navIconHover: "#22d3ee", // Cyan-400

  navBorderColor: "#334155", // Slate-700

  // Status colors - Adjusted for dark theme
  successColor: "#10b981", // Emerald-500
  warningColor: "#f59e0b", // Amber-500
  errorColor: "#ef4444", // Red-500
  infoColor: "#3b82f6", // Blue-500

  // Status tabs (Open, Resolved, In Progress) - Complete set
  statusTabText: "#94a3b8", // Slate-400 - default tab text
  statusTabTextActive: "#e2e8f0", // Slate-200 - active tab text
  statusTabHoverBg: "#1e293b", // Slate-800 - hover background
  statusTabHoverText: "#cbd5e1", // Slate-300 - hover text

  // Active border bottom colors for different statuses
  statusOpenBorder: "#f59e0b", // Amber-500 - Open status border
  statusProgressBorder: "#3b82f6", // Blue-500 - In Progress status border
  statusResolvedBorder: "#10b981", // Emerald-500 - Resolved status border

  scrollbarTrack: "#2d2d2d",
  scrollbarThumb: "#5a5a5a",
  scrollbarThumbHover: "#6e6e6e",
  scrollbarThumbActive: "#828282",

  /* Other theme colors */
  borderColor: "#404040",
  rowBorderColor: "#333333",
  rowHoverColor: "#3a3a3a",

  inputBg: "#1e293b", // Slate-800 - Input background
  inputBgDisabled: "#0f172a", // Slate-900 - Disabled input background
  inputBgFocus: "#1e293b", // Slate-800 when focused
  inputBorder: "#475569", // Slate-600 - Default border
  inputBorderFocus: "#22d3ee", // Cyan-400 - Focus border
  inputBorderError: "#f87171", // Red-400 - Error border
  inputBorderSuccess: "#34d399", // Emerald-400 - Success border
  inputText: "#f1f5f9", // Slate-100 - Input text
  inputTextDisabled: "#64748b", // Slate-500 - Disabled input text
  inputPlaceholder: "#64748b", // Slate-500 - Placeholder text
  inputShadowFocus: "rgba(34, 211, 238, 0.2)", // Cyan focus shadow

  // Status card colors (darker variants)
  statusWarningBg: "#451a03", // Amber-950 with opacity
  statusWarningText: "#fbbf24", // Amber-400
  statusWarningBorder: "#d97706", // Amber-600
  statusWarningIcon: "#fbbf24", // Amber-400

  statusOptimalBg: "#022c22", // Emerald-950 with opacity
  statusOptimalText: "#34d399", // Emerald-400
  statusOptimalBorder: "#059669", // Emerald-600
  statusOptimalIcon: "#34d399", // Emerald-400

  statusCriticalBg: "#450a0a", // Red-950 with opacity
  statusCriticalText: "#f87171", // Red-400
  statusCriticalBorder: "#dc2626", // Red-600
  statusCriticalIcon: "#f87171", // Red-400
};

const GlobalStyles = createGlobalStyle`
:root {
  --headerBg: ${({ theme }) => theme.headerBg};
  --dashboardBg: ${({ theme }) => theme.dashboardBg};

  /* Button colors */
  --buttonPrimarybg: ${({ theme }) => theme.buttonPrimarybg};
  --buttonPrimaryText: ${({ theme }) => theme.buttonPrimaryText};
  --buttonSecondaryBg: ${({ theme }) => theme.buttonSecondaryBg};
  --buttonSecondaryText: ${({ theme }) => theme.buttonSecondaryText};
  --buttonPrimaryHoverBg: ${({ theme }) => theme.buttonPrimaryHoverBg};

  /* Icon and accent colors */
  --iconColor: ${({ theme }) => theme.iconColor};
  --borderColor: ${({ theme }) => theme.borderColor};
  --cardBg: ${({ theme }) => theme.cardBg};

  /* Added missing variables from lightTheme */
  --formBg: ${({ theme }) => theme.formBg};
  --formInputBg: ${({ theme }) => theme.formInputBg};
  --formText: ${({ theme }) => theme.formText};
  --formLabel: ${({ theme }) => theme.formLabel};

  --inputBg: ${({ theme }) => theme.inputBg};
  --inputBgDisabled: ${({ theme }) => theme.inputBgDisabled};
  --inputBgFocus: ${({ theme }) => theme.inputBgFocus};
  --inputBorder: ${({ theme }) => theme.inputBorder};
  --inputBorderFocus: ${({ theme }) => theme.inputBorderFocus};
  --inputBorderError: ${({ theme }) => theme.inputBorderError};
  --inputBorderSuccess: ${({ theme }) => theme.inputBorderSuccess};
  --inputText: ${({ theme }) => theme.inputText};
  --inputTextDisabled: ${({ theme }) => theme.inputTextDisabled};
  --inputPlaceholder: ${({ theme }) => theme.inputPlaceholder};
  --inputShadowFocus: ${({ theme }) => theme.inputShadowFocus};

  /* Navigation */
  --navBg: ${({ theme }) => theme.navBg};
  --navText: ${({ theme }) => theme.navText};
  --navIconColor: ${({ theme }) => theme.navIconColor};
  --navActiveBg: ${({ theme }) => theme.navActiveBg};
  --navActiveText: ${({ theme }) => theme.navActiveText};
  --navIconActive: ${({ theme }) => theme.navIconActive};
  --navHoverBg: ${({ theme }) => theme.navHoverBg};
  --navHoverText: ${({ theme }) => theme.navHoverText};
  --navIconHover: ${({ theme }) => theme.navIconHover};
  --navBorderColor: ${({ theme }) => theme.navBorderColor};

  /* Text colors */
  --textBody: ${({ theme }) => theme.textBody};
  --textHeader: ${({ theme }) => theme.textHeader};
  --textSecondary: ${({ theme }) => theme.textSecondary};
  --textMuted: ${({ theme }) => theme.textMuted};
  --textLight: ${({ theme }) => theme.textLight};
  --textPlaceholder: ${({ theme }) => theme.textPlaceholder};
  --textLink: ${({ theme }) => theme.textLink};
  --textLinkHover: ${({ theme }) => theme.textLinkHover};

  /* Status colors */
  --successColor: ${({ theme }) => theme.successColor};
  --warningColor: ${({ theme }) => theme.warningColor};
  --errorColor: ${({ theme }) => theme.errorColor};
  --infoColor: ${({ theme }) => theme.infoColor};

  /* Status tab colors */
  --statusTabText: ${({ theme }) => theme.statusTabText};
  --statusTabTextActive: ${({ theme }) => theme.statusTabTextActive};
  --statusTabHoverBg: ${({ theme }) => theme.statusTabHoverBg};
  --statusTabHoverText: ${({ theme }) => theme.statusTabHoverText};

  /* Status border colors */
  --statusOpenBorder: ${({ theme }) => theme.statusOpenBorder};
  --statusProgressBorder: ${({ theme }) => theme.statusProgressBorder};
  --statusResolvedBorder: ${({ theme }) => theme.statusResolvedBorder};

  /* Scrollbar colors */
  --scrollbarTrack: ${({ theme }) => theme.scrollbarTrack};
  --scrollbarThumb: ${({ theme }) => theme.scrollbarThumb};
  --scrollbarThumbHover: ${({ theme }) => theme.scrollbarThumbHover};
  --scrollbarThumbActive: ${({ theme }) => theme.scrollbarThumbActive};

  /* Table/row colors */
  --rowBorderColor: ${({ theme }) => theme.rowBorderColor};
  --rowHoverColor: ${({ theme }) => theme.rowHoverColor};

  /* Status card colors */
  --statusWarningBg: ${({ theme }) => theme.statusWarningBg};
  --statusWarningText: ${({ theme }) => theme.statusWarningText};
  --statusWarningBorder: ${({ theme }) => theme.statusWarningBorder};
  --statusWarningIcon: ${({ theme }) => theme.statusWarningIcon};

  --statusOptimalBg: ${({ theme }) => theme.statusOptimalBg};
  --statusOptimalText: ${({ theme }) => theme.statusOptimalText};
  --statusOptimalBorder: ${({ theme }) => theme.statusOptimalBorder};
  --statusOptimalIcon: ${({ theme }) => theme.statusOptimalIcon};

  --statusCriticalBg: ${({ theme }) => theme.statusCriticalBg};
  --statusCriticalText: ${({ theme }) => theme.statusCriticalText};
  --statusCriticalBorder: ${({ theme }) => theme.statusCriticalBorder};
  --statusCriticalIcon: ${({ theme }) => theme.statusCriticalIcon};
}

html {
  font-size: 62.5%;
}

body {
  background-color: var(--dashboardBg);
  font-family: "Poppins", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p,
h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

ul {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

*::-webkit-scrollbar {
   width: 8px;
   height: 8px;
 }
*::-webkit-scrollbar-track {
   background: var(--scrollbarTrack);
   border-radius: 4px;
 }
*::-webkit-scrollbar-thumb {
   background: var(--scrollbarThumb);
   border-radius: 4px;
   border: 1px solid var(--scrollbarTrack);
 }
*::-webkit-scrollbar-thumb:hover {
   background: var(--scrollbarThumbHover);
 }
*::-webkit-scrollbar-thumb:active {
   background: var(--scrollbarThumbActive);
 }
*::-webkit-scrollbar-corner {
   background: var(--scrollbarTrack);
  }

img {
  filter: grayscale(10%);
}
`;

export default GlobalStyles;
