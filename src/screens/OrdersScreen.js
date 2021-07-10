import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useOrders } from '../context/orders';
import { MenuItem } from '../components/MenuItem';

export const OrdersScreen = () => {
  const {
    state: { orders },
  } = useOrders();

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.header}>订单</Text>
      <ScrollView>
        <View testID="orders-list">
          {orders.map(order => (
            <View key={order.id} style={styles.order} testID="order-item">
              <View>
                <Text style={styles.dateText}>订单日期: {order.date}</Text>
              </View>
              <MenuItem item={order.item}>
                <View style={StyleSheet.flatten([styles.row, styles.space])}>
                  <Text style={styles.orderInfo}>分量: {order.size}</Text>
                  <Text style={styles.orderInfo}>总价: {order.total}</Text>
                  <Text style={styles.orderInfo}>订单状体: {order.status}</Text>
                </View>
              </MenuItem>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
  },
  space: {
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    padding: 16,
    textAlign: 'center',
  },
  order: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
  },
  orderInfo: {
    marginRight: 8,
    fontWeight: '500',
  },
  dateText: {
    textAlign: 'center',
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
