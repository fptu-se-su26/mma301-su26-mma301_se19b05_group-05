import React from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/hooks/use-theme';
import { Spacing } from '@/constants/theme';

export default function SettingScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}>
      
      <ThemedText type="title">Settings</ThemedText>

      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.row}>
          <ThemedText>Dark Mode</ThemedText>
          <Switch value={true} />
        </View>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.row}>
          <ThemedText>Notifications</ThemedText>
          <Switch value={false} />
        </View>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.column}>
          <ThemedText type="subtitle">Account</ThemedText>
          <ThemedText themeColor="textSecondary">
            Manage your account information
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView type="backgroundElement" style={styles.card}>
        <View style={styles.column}>
          <ThemedText type="subtitle">About App</ThemedText>
          <ThemedText themeColor="textSecondary">
            Version 1.0.0
          </ThemedText>
        </View>
      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    padding: Spacing.four,
    gap: Spacing.four,
  },

  card: {
    borderRadius: 16,
    padding: Spacing.four,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  column: {
    gap: 4,
  },
});