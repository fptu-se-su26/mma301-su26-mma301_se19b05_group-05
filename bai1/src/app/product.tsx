import { Stack, router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

export const products = [
  {
    id: "1",
    series: "MẪU 01",
    collection: "LƯU TRỮ GIÀY",
    title: "Đen",
    titleItalic: "Cổ Điển",
    price: "4.500.000 VNĐ",
    description:
      "Một tác phẩm của sự tối giản tuyệt đối. Được chế tác từ da Ý nguyên bản với kiểu dáng phá cấu trúc. Loại bỏ những chi tiết thừa, chỉ giữ lại hình thức và công năng cốt lõi.",
    material: "Da Ý Cao Cấp",
    origin: "Làm thủ công tại Milan",
    image:
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    series: "MẪU 02",
    collection: "KIẾN TRÚC THỜI TRANG",
    title: "Trắng",
    titleItalic: "Thanh Lịch",
    price: "5.200.000 VNĐ",
    description:
      "Tái hiện lại mẫu giày Oxford truyền thống qua lăng kính hiện đại. Các mảng khối hình học kết hợp cùng độ tương phản đơn sắc sắc nét. Thiết kế dành cho sự táo bạo, hướng tới tương lai.",
    material: "Da Bê Mờ",
    origin: "Xưởng phim tại Paris",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    series: "MẪU 03",
    collection: "ĐỒNG PHỤC HÀNG NGÀY",
    title: "Xám",
    titleItalic: "Hiện Đại",
    price: "3.800.000 VNĐ",
    description:
      "Đôi giày tối ưu cho trang phục hàng ngày, được tinh giản đến mức thuần khiết. Sở hữu đế nhẹ đúc nguyên khối và cấu trúc không lót mang lại sự thoải mái tức thì mà không cần thỏa hiệp.",
    material: "Da Lộn & Crepe",
    origin: "Chế tác tại London",
    image:
      "https://images.unsplash.com/photo-1614252209318-49400ff5d3dc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    series: "MẪU 04",
    collection: "GÓT GIÀY NGHỆ THUẬT",
    title: "Gót Nhọn",
    titleItalic: "Quyến Rũ",
    price: "6.500.000 VNĐ",
    description:
      "Sự chính xác của kiến trúc gặp gỡ hình dáng mỏng manh. Gót cao 90mm tạo độ căng vút, mang lại hiệu ứng thị giác nổi bật trong khi vẫn giữ vững cấu trúc chịu lực. Sự lựa chọn hoàn hảo cho buổi tối.",
    material: "Da Bóng Chống Trầy",
    origin: "Thủ công tại Florence",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    series: "MẪU 05",
    collection: "CỔ ĐIỂN HIỆN ĐẠI",
    title: "Đỏ Trầm",
    titleItalic: "Phóng Khoáng",
    price: "4.100.000 VNĐ",
    description:
      "Thiết kế giày lười mang phong cách quý tộc nhưng được thổi hồn nhịp sống hiện đại. Tiện dụng, dễ phối đồ nhưng luôn để lại ấn tượng sâu sắc.",
    material: "Nhung Cao Cấp",
    origin: "Sản xuất tại Ý",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    series: "MẪU 06",
    collection: "ĐƯỜNG PHỐ PHÁ CÁCH",
    title: "Kem",
    titleItalic: "Năng Động",
    price: "3.500.000 VNĐ",
    description:
      "Sự kết hợp hoàn hảo giữa thời trang đường phố và công nghệ đệm giày tiên tiến. Êm ái suốt ngày dài di chuyển mà vẫn giữ nguyên phong độ thời thượng.",
    material: "Lưới Lọc Khí & Da Lộn",
    origin: "Thiết kế tại Tokyo",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    series: "MẪU 07",
    collection: "BỀN BỈ MẠNH MẼ",
    title: "Nâu",
    titleItalic: "Bền Bỉ",
    price: "5.900.000 VNĐ",
    description:
      "Đôi Boot được sinh ra để đương đầu với thử thách. Lớp da thuộc siêu bền cùng đế cao su chống trượt tạo nên vẻ ngoài bụi bặm đầy nam tính.",
    material: "Da Chelsea Chống Nước",
    origin: "Chế tác tại Anh Quốc",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    series: "MẪU 08",
    collection: "THỂ THAO ĐỘT PHÁ",
    title: "Xanh",
    titleItalic: "Thể Thao",
    price: "3.200.000 VNĐ",
    description:
      "Thiết kế khí động học hỗ trợ tối đa cho việc chạy bộ. Lớp vỏ dệt kim thoáng khí ôm sát bàn chân như một đôi tất bảo vệ thứ hai.",
    material: "Vải Dệt Kim Công Nghệ Cao",
    origin: "Sản xuất tại Đức",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    series: "MẪU 09",
    collection: "THỜI TRANG NGHỈ DƯỠNG",
    title: "Ngọc",
    titleItalic: "Sang Trọng",
    price: "2.900.000 VNĐ",
    description:
      "Tận hưởng kỳ nghỉ dưỡng với đôi Mule thiết kế mở. Chất liệu thoáng mát cùng đường nét tao nhã tôn lên đôi chân của bạn mọi lúc mọi nơi.",
    material: "Da Đan Thủ Công",
    origin: "Làm tại Tây Ban Nha",
    image:
      "https://images.unsplash.com/photo-1535043934128-d8d0cfbc491f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProductPage() {
  const { width } = useWindowDimensions();
  const numColumns = width >= 1024 ? 3 : width >= 600 ? 2 : 1;
  const columnWidth = `${100 / numColumns}%`;

  const marqueeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(marqueeAnim, {
        toValue: -1,
        duration: 25000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const marqueeTranslateX = marqueeAnim.interpolate({
    inputRange: [-1, 0],
    outputRange: [-600, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "FAP COLLECTION",
          headerShown: true,
          headerStyle: { backgroundColor: "rgba(255,255,255,0.8)" },
          headerTitleStyle: {
            fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
            fontWeight: "bold",
            letterSpacing: 3,
            fontSize: 18,
            color: "#c48c71",
          },
          headerTintColor: "#2d2a26",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />

      {/* Marquee Ticker */}
      <View style={styles.marqueeContainer}>
        <Animated.View
          style={[
            styles.marqueeTextWrapper,
            { transform: [{ translateX: marqueeTranslateX }] },
          ]}
        >
          <Text style={styles.marqueeText}>
            HÀNG MỚI VỀ • BỘ SƯU TẬP MÙA XUÂN • PHIÊN BẢN GIỚI HẠN • MIỄN PHÍ
            VẬN CHUYỂN TOÀN CẦU • HÀNG MỚI VỀ • BỘ SƯU TẬP MÙA XUÂN • PHIÊN BẢN
            GIỚI HẠN • MIỄN PHÍ VẬN CHUYỂN TOÀN CẦU •
          </Text>
        </Animated.View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Bản Giao Hưởng <Text style={styles.heroTitleItalic}>Mùa Xuân</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Một bộ sưu tập giày dép thời thượng, sống động và đầy cá tính được
            tuyển chọn kỹ lưỡng dành riêng cho bạn.
          </Text>
        </View>

        <View style={styles.gridContainer}>
          {products.map((product) => (
            <View
              key={product.id}
              style={[styles.gridItem, { width: columnWidth as any }]}
            >
              {/* Click to view details */}
              <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9}
                onPress={() =>
                  router.push({
                    pathname: "/product-detail",
                    params: { id: product.id },
                  })
                }
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: product.image }}
                    style={styles.productImage}
                  />
                  <View style={styles.imageOverlay}>
                    <Text style={styles.overlayText}>{product.series}</Text>
                  </View>
                </View>

                <View style={styles.detailsContainer}>
                  <Text style={styles.collectionLabel}>
                    {product.collection}
                  </Text>

                  <View style={styles.titlePriceRow}>
                    <Text style={styles.productTitle}>
                      {product.title}{" "}
                      <Text style={styles.productTitleItalic}>
                        {product.titleItalic}
                      </Text>
                    </Text>
                  </View>

                  <Text style={styles.productPrice}>{product.price}</Text>

                  <View style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>XEM CHI TIẾT</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2efe9",
  },
  marqueeContainer: {
    height: 36,
    backgroundColor: "#2d2a26",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: Platform.OS === "web" ? 60 : 0,
  },
  marqueeTextWrapper: {
    flexDirection: "row",
    width: 2500,
  },
  marqueeText: {
    color: "#ebdccc",
    fontSize: 12,
    letterSpacing: 4,
    fontWeight: "600",
  },
  scrollContent: {
    paddingBottom: 60,
  },
  heroSection: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 42,
    letterSpacing: 2,
    color: "#2d2a26",
    marginBottom: 16,
    textAlign: "center",
  },
  heroTitleItalic: {
    fontStyle: "italic",
    color: "#c48c71",
  },
  heroSubtitle: {
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
    fontSize: 16,
    color: "#7c7267",
    textAlign: "center",
    maxWidth: 500,
    lineHeight: 24,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    maxWidth: 1440,
    alignSelf: "center",
    width: "100%",
  },
  gridItem: {
    padding: 16,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.65)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.03,
    shadowRadius: 20,
    elevation: 2,
    ...(Platform.OS === "web" ? { backdropFilter: "blur(10px)" } : {}),
  },
  imageContainer: {
    position: "relative",
    height: 380,
    width: "100%",
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imageOverlay: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  overlayText: {
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#c48c71",
  },
  detailsContainer: {
    padding: 24,
  },
  collectionLabel: {
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 3,
    fontWeight: "600",
    color: "#7c7267",
    marginBottom: 12,
  },
  titlePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  productTitle: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 26,
    color: "#2d2a26",
  },
  productTitleItalic: {
    fontStyle: "italic",
  },
  productPrice: {
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
    fontSize: 16,
    fontWeight: "600",
    color: "#c48c71",
    marginBottom: 24,
  },
  buyButton: {
    backgroundColor: "transparent",
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2d2a26",
  },
  buyButtonText: {
    color: "#2d2a26",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
