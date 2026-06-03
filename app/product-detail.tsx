import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Platform, useWindowDimensions } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { products } from './product';

export default function ProductDetailPage() {
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  
  // Find the product by ID or fallback to the first one
  const product = products.find(p => p.id === id) || products[0];

  const isDesktop = width >= 1024;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ 
        title: 'FAP', 
        headerShown: true,
        headerStyle: { backgroundColor: 'rgba(255,255,255,0.8)' },
        headerTitleStyle: { fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', fontWeight: 'bold', letterSpacing: 3, fontSize: 18, color: '#c48c71' },
        headerTintColor: '#2d2a26',
        headerShadowVisible: false,
        headerTransparent: true,
        headerBackTitle: 'Trở lại'
      }} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={[styles.mainLayout, isDesktop && styles.mainLayoutDesktop]}>
          
          {/* Left Side: Large Image */}
          <View style={[styles.imageContainer, isDesktop && styles.imageContainerDesktop]}>
            <Image 
              source={{ uri: product.image }} 
              style={styles.productImage} 
            />
            <View style={styles.imageOverlay}>
              <Text style={styles.overlayText}>{product.series}</Text>
            </View>
          </View>

          {/* Right Side: Product Details */}
          <View style={[styles.detailsContainer, isDesktop && styles.detailsContainerDesktop]}>
            <Text style={styles.collectionLabel}>{product.collection}</Text>
            
            <Text style={styles.productTitle}>
              {product.title} <Text style={styles.productTitleItalic}>{product.titleItalic}</Text>
            </Text>
            
            <View style={styles.divider} />
            
            <Text style={styles.productPrice}>{product.price}</Text>
            
            <Text style={styles.productDescription}>
              {product.description}
            </Text>

            <View style={styles.metaGrid}>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>CHẤT LIỆU</Text>
                <Text style={styles.metaValue}>{product.material}</Text>
              </View>
              <View style={styles.metaItem}>
                <Text style={styles.metaLabel}>XUẤT XỨ</Text>
                <Text style={styles.metaValue}>{product.origin}</Text>
              </View>
            </View>

            <View style={styles.sizeSection}>
              <Text style={styles.metaLabel}>CHỌN KÍCH CỠ (EU)</Text>
              <View style={styles.sizeGrid}>
                {['38', '39', '40', '41', '42', '43'].map((size) => (
                  <TouchableOpacity key={size} style={styles.sizeBox}>
                    <Text style={styles.sizeText}>{size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.buyButton} activeOpacity={0.8} onPress={() => { alert('Đã thêm vào giỏ hàng!'); router.back(); }}>
              <Text style={styles.buyButtonText}>THÊM VÀO GIỎ HÀNG</Text>
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
    backgroundColor: '#f2efe9', 
  },
  scrollContent: {
    paddingBottom: 60,
  },
  mainLayout: {
    flexDirection: 'column',
    width: '100%',
  },
  mainLayoutDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 1440,
    alignSelf: 'center',
    minHeight: '100vh',
  },
  imageContainer: {
    position: 'relative',
    height: 500,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  imageContainerDesktop: {
    width: '60%',
    height: '100%',
    minHeight: '100vh',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  overlayText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#c48c71',
  },
  detailsContainer: {
    padding: 30,
    backgroundColor: '#f2efe9',
  },
  detailsContainerDesktop: {
    width: '40%',
    padding: 60,
    justifyContent: 'center',
    marginTop: Platform.OS === 'web' ? 80 : 0,
  },
  collectionLabel: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: '600',
    color: '#7c7267',
    marginBottom: 16,
  },
  productTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    fontSize: 48,
    lineHeight: 56,
    color: '#2d2a26',
    marginBottom: 24,
  },
  productTitleItalic: {
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    backgroundColor: '#dcd6ce',
    width: '100%',
    marginBottom: 24,
  },
  productPrice: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 24,
    fontWeight: '600',
    color: '#c48c71',
    marginBottom: 30,
  },
  productDescription: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 16,
    lineHeight: 26,
    color: '#4a443d',
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
    borderTopColor: '#dcd6ce',
    paddingTop: 16,
  },
  metaLabel: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '700',
    color: '#7c7267',
    marginBottom: 8,
  },
  metaValue: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 14,
    color: '#2d2a26',
    fontWeight: '500',
  },
  sizeSection: {
    marginBottom: 40,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  sizeBox: {
    width: 60,
    height: 45,
    borderWidth: 1,
    borderColor: '#dcd6ce',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  sizeText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 14,
    fontWeight: '600',
    color: '#2d2a26',
  },
  buyButton: {
    backgroundColor: '#2d2a26',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  buyButtonText: {
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
