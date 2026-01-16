import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// URL สำหรับ API
const STRAPI_HOST = 'https://strapi.widelyapps.net';
const TABLE_NAME = 'g10-services';
const API_URL = `${STRAPI_HOST}/api/${TABLE_NAME}`;
const TOKEN = `7be31f9c83210ccc649875fd436eaf05f50f7f15094db45a0ff58199fa99801e50714e9938b02cc37355a5e9147d0fd1c007973c3a9226e667b4ac1fa6a6512e1e0aa97f093d22f1e86479f55f4009aa57946d8b6c9b57289d5d1c57ee4eb5af2d462c740c43ef683e80b1819f8711182d7ffeb54f95833b20e62a5c7cfd39ec`;

const serviceImages = {
  // รูปภาพบริการ
  '55': 'https://i.postimg.cc/g0qQNLmF/S-10125317.jpg', 
  '57': 'https://i.postimg.cc/L4CXxn80/F423D4B0-48A3-49B6-B685-FE3AAA65B359.jpg', 
  '59': 'https://i.postimg.cc/y8B8d9QC/BE8E4825-8B5A-4E4D-9391-00972A76A5ED.jpg', 
  '54': 'https://i.postimg.cc/g0qQNLmF/S-10125317.jpg',
  '58': 'https://i.postimg.cc/L4CXxn80/F423D4B0-48A3-49B6-B685-FE3AAA65B359.jpg', 
  '60': 'https://i.postimg.cc/y8B8d9QC/BE8E4825-8B5A-4E4D-9391-00972A76A5ED.jpg',
  '53': 'https://i.postimg.cc/g0qQNLmF/S-10125317.jpg',
  '56': 'https://i.postimg.cc/L4CXxn80/F423D4B0-48A3-49B6-B685-FE3AAA65B359.jpg',
};

export default function ShopDetailScreen({ route, navigation }) {
  const shop = route?.params?.shop ?? {};  // รับข้อมูลร้านจากหน้า ShopList
  const [selectedService, setSelectedService] = useState(null); 
  const [serviceDetail, setServiceDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleService = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId); // เปลี่ยนให้เลือกใหม่ได้
  };

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`${API_URL}?populate=*`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
        });
        const data = await response.json();
        setServiceDetail(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* ปุ่ม Back */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity> 

        {/* รูปภาพร้านค้า */}
        <Image source={{ uri: shop.imageUrl }} style={styles.shopImage} />

        {/* รายละเอียดร้านค้า */}
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopName}>{shop.shopName}</Text>
          <Text style={styles.shopDetailText}>{shop.address}</Text>
          <Text style={styles.shopDetailText}>{shop.phone}</Text>
        </View>

        {/* เลือกบริการ */}
        <View style={styles.serviceSection}>
          <Text style={styles.serviceTitle}>เลือกบริการของเรา</Text>
          <View style={styles.serviceGrid}>
            {shop.services.map((service) => {
              const isSelected = selectedService === service.id;
              const imageUrl = serviceImages[service.id] || serviceImages['default'];

              return (
                <TouchableOpacity
                  key={service.id}
                  style={[
                    styles.serviceButton,
                    isSelected && styles.serviceButtonSelected,
                  ]}
                  onPress={() => toggleService(service.id)}
                >
                  <ImageBackground source={{ uri: imageUrl }} style={styles.serviceImageBackground} resizeMode="cover">
                    <View style={styles.textOverlay} />
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* ปุ่ม NEXT */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.nextButton,
            !selectedService && styles.nextButtonDisabled,  // ทำให้ปุ่ม Next ไม่สามารถกดได้เมื่อไม่ได้เลือกบริการ
          ]}
          onPress={() => selectedService && navigation.navigate('Transaction', { selectedService })} // ส่งข้อมูลไปหน้า Transaction
          disabled={!selectedService} // ทำให้ปุ่ม Next ไม่สามารถกดได้เมื่อไม่ได้เลือกบริการ
        >
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
  backButton: {
    position: 'absolute', top: 15, left: 15, backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 8, borderRadius: 50, zIndex: 10,
  },
  shopImage: { width: '100%', height: 250 },
  shopInfoContainer: { padding: 20 },
  shopName: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  shopDetailText: { fontSize: 16, color: '#666', marginBottom: 4 },
  serviceSection: { padding: 20, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  serviceTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 20 },
  serviceGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceButton: {
    width: '48%', height: 120, borderRadius: 15, marginBottom: 15, borderWidth: 3, borderColor: 'transparent', overflow: 'hidden',
  },
  serviceButtonSelected: {
    borderColor: '#00008B',
  },
  serviceImageBackground: {
    flex: 1, justifyContent: 'flex-end',
  },
  footer: { padding: 20, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  nextButton: { backgroundColor: '#00008B', padding: 15, borderRadius: 10, alignItems: 'center' },
  nextButtonDisabled: {
    backgroundColor: '#A9A9A9',  // สีเทาเมื่อปุ่มไม่สามารถกดได้
  },
  nextButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
});