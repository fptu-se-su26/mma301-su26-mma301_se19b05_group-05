import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';

const ORDERS = [
  { id: 'ORD-1001', item: 'Modern Chair', status: 'Delivered', total: '$120' },
  { id: 'ORD-1002', item: 'Wood Table', status: 'Shipping', total: '$250' },
  { id: 'ORD-1003', item: 'Velvet Sofa', status: 'Processing', total: '$890' },
];

export default function OrderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>My Orders</Text>
        <Text style={styles.subtitle}>Track your furniture purchases</Text>

        {ORDERS.map((order) => (
          <View key={order.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.orderId}>{order.id}</Text>
              <Text style={styles.status}>{order.status}</Text>
            </View>
            <Text style={styles.itemName}>{order.item}</Text>
            <Text style={styles.total}>{order.total}</Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => router.push('/product')}
        >
          <Text style={styles.shopButtonText}>Browse products</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginTop: 10,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderId: {
    fontWeight: '600',
    color: '#d2691e',
  },
  status: {
    fontSize: 14,
    color: '#f97316',
    fontWeight: '600',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  total: {
    marginTop: 6,
    fontSize: 16,
    color: '#444',
  },
  shopButton: {
    backgroundColor: '#f97316',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
