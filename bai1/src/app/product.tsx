import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Stack, router } from 'expo-router';
import { useApp } from '@/context/AppContext';

export default function ProductPage() {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useApp();

  const product = {
    id: "p1",
    name: "The Noir Classic",
    price: 450,
    category: "FOOTWEAR ARCHIVE",
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=1000&auto=format&fit=crop&grayscale=true',
  };

  const isFav = isInWishlist(product.id);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
        title: 'MAISON', 
        headerShown: true,
        headerStyle: { backgroundColor: '#fff' },
        headerTitleStyle: { fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', fontWeight: 'bold', letterSpacing: 2 },
        headerTintColor: '#000',
        headerShadowVisible: false,
      }} />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        
        {/* Top Header line - Thin divider */}
        <View style={styles.thinDivider} />

        {/* Big Image Section */}
        <View style={styles.imageContainer}>
          {/* Note: In pure RN without Expo Image processing, applying grayscale via filter isn't native, 
              so we use a naturally black & white/monochrome image URL to keep the B&W vibe */}
          <Image 
            source={{ uri: product.image }} 
            style={styles.productImage} 
          />
          <View style={styles.imageLabel}>
            <Text style={styles.uppercaseLabel}>NO. 01 / SIGNATURE SERIES</Text>
          </View>
        </View>

        {/* Thin Divider to split grid visually on mobile */}
        <View style={styles.thinDivider} />

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.uppercaseLabel}>FOOTWEAR ARCHIVE</Text>
          
          <Text style={styles.productTitle}>
            The Noir{'\n'}
            <Text style={styles.productTitleItalic}>Classic</Text>
          </Text>
          
          <View style={styles.thinDivider} />
          
          <Text style={styles.productPrice}>$ 450.00</Text>
          
          <Text style={styles.productDescription}>
            A study in absolute minimalism. Crafted from premium full-grain Italian leather with a deconstructed silhouette. Stripped of excess, leaving only essential form and function.
          </Text>

          <View style={styles.metaGrid}>
            <View style={styles.metaItem}>
              <Text style={styles.uppercaseLabel}>MATERIAL</Text>
              <Text style={styles.metaValue}>Italian Leather</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.uppercaseLabel}>ORIGIN</Text>
              <Text style={styles.metaValue}>Handmade in Milan</Text>
            </View>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.buyButton} 
              activeOpacity={0.9}
              onPress={() => {
                addToCart(product);
                router.push('/cart');
              }}
            >
              <Text style={styles.buyButtonText}>ADD TO COLLECTION</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.favButton,
                isFav && styles.favButtonActive
              ]}
              onPress={() => {
                if (isFav) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                }
              }}
            >
              <Text style={[styles.favButtonText, isFav && styles.favButtonTextActive]}>
                {isFav ? '❤️' : '🖤'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  uppercaseLabel: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '600',
    color: '#333333',
  },
  thinDivider: {
    height: 1,
    backgroundColor: '#000000',
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    height: 450,
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000000',
  },
  detailsContainer: {
    padding: 24,
  },
  productTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 52,
    lineHeight: 56,
    color: '#000000',
    marginTop: 16,
    marginBottom: 24,
  },
  productTitleItalic: {
    fontStyle: 'italic',
  },
  productPrice: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 22,
    fontWeight: '300',
    color: '#000000',
    marginTop: 24,
    marginBottom: 32,
  },
  productDescription: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 40,
  },
  metaGrid: {
    flexDirection: 'row',
    marginBottom: 40,
    gap: 20,
  },
  metaItem: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingTop: 12,
  },
  metaValue: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 14,
    color: '#000000',
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#000000',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  favButton: {
    width: 58,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  favButtonActive: {
    backgroundColor: '#ff4757',
    borderColor: '#ff4757',
  },
  favButtonText: {
    fontSize: 18,
  },
  favButtonTextActive: {
    color: '#FFFFFF',
  },
});

