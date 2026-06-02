import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

import {
  ThemeProvider as AppThemeProvider,
  useThemeContext,
} from '@/context/ThemeContext';

function Navigation() {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="profile"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="product"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="cart"
          options={{ title: 'Cart' }}
        />

        <Stack.Screen
          name="wishlist"
          options={{ title: 'Wishlist' }}
        />

        <Stack.Screen
          name="settings"
          options={{ title: 'Settings' }}
        />

        <Stack.Screen
          name="order"
          options={{ title: 'My Orders' }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <Navigation />
    </AppThemeProvider>
  );
}