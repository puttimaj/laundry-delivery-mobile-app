import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../StyleSheet/home_style';


const STRAPI_HOST = 'https://strapi.widelyapps.net';
const TABLE_NAME = 'g10-shops';
const API_URL = `${STRAPI_HOST}/api/${TABLE_NAME}`;
const TOKEN = `7be31f9c83210ccc649875fd436eaf05f50f7f15094db45a0ff58199fa99801e50714e9938b02cc37355a5e9147d0fd1c007973c3a9226e667b4ac1fa6a6512e1e0aa97f093d22f1e86479f55f4009aa57946d8b6c9b57289d5d1c57ee4eb5af2d462c740c43ef683e80b1819f8711182d7ffeb54f95833b20e62a5c7cfd39ec`;


export default function HomeShop ({ navigation }) {

  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchShops = async () => {
      if (!STRAPI_HOST || !TOKEN) {
        console.log('กรุณาตั้งค่า STRAPI_HOST และ TOKEN');
        setLoading(false);
        return;
      }

      try {
        console.log('before fetch');
        const response = await fetch(
          `${API_URL}?populate=*`, 
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`ไม่สามารถดึงข้อมูลได้: ${response.status}`);
        }

        const data = await response.json();

      
        const items = Array.isArray(data.data)
          ? data.data
          : Array.isArray(data)
          ? data
          : [];

        if (items.length === 0) {
          console.log(
            'ไม่พบข้อมูล (Data ที่ได้มาไม่มี .data หรือเป็น Array ว่าง)'
          );
          setShops([]);
          setLoading(false);
          return;
        }

        const formattedData = items.map((item) => {
          const attributes = item.attributes || item;

          // ดึง URL รูปภาพ
          const picData = attributes.picture?.data
            ? attributes.picture.data
            : attributes.picture;
          const pic = picData?.formats?.medium?.url || picData?.url || null;
          const imageUrl = pic
            ? STRAPI_HOST + pic
            : 'https://via.placeholder.com/600x400.png?text=No+Image';

          return {
            id: item.id,
            shopName: attributes.name || 'ไม่มีชื่อร้าน',
            imageUrl: imageUrl,
            address: attributes.address || 'ไม่มีที่อยู่',
            phone: attributes.phone || 'N/A',
            openHours: attributes.open_hours || 'N/A',
            rating: attributes.rating || 0.0,
            services: attributes.g_10_services
          };
        });
        // ---  สิ้นสุด .map  ---

        setShops(formattedData);
      } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchShops(); 
  }, []);


  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color="#00008B"
          style={{ marginTop: 30 }}
        />
      );
    }

    if (shops.length === 0) {
      return (
        <Text style={{ textAlign: 'center', color: '#555', marginTop: 30 }}>
          ไม่พบร้านค้า
        </Text>
      );
    }

    return shops.map((shop) => (
      <View key={shop.id} style={styles.shopCard}>
        <Image
          source={{ uri: shop.imageUrl }}
          style={styles.shopImage}
          resizeMode="cover"
        />
        {/* Container สำหรับข้อมูลทั้งหมด (กล่องสีฟ้า) */}
        <View style={styles.shopInfoContainer}>
          {/* 1. ชื่อร้าน */}
          <Text style={styles.shopName}>{shop.shopName}</Text>

          {/* 2. ที่อยู่ */}
          <View style={styles.infoRow}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={16}
              color="#444"
            />
            <Text style={styles.infoDetailText}>{shop.address}</Text>
          </View>

          {/* 3. เบอร์โทร */}
          <View style={styles.infoRow}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={16}
              color="#444"
            />
            <Text style={styles.infoDetailText}>{shop.phone}</Text>
          </View>

          {/* 4. เวลาเปิด-ปิด */}
          <View style={styles.infoRow}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={16}
              color="#444"
            />
            <Text style={styles.infoDetailText}>{shop.openHours}</Text>
          </View>

          {/* 5. เรตติ้ง */}
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="star" size={16} color="#F5B041" />
            <Text style={styles.infoDetailText}>
              {typeof shop.rating === 'number' ? shop.rating.toFixed(1) : 0.0} /
              5.0
            </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Service', { shop: shop })}
              style={styles.linkBtn}>
              <Text style={styles.cardLink}>ดูรายละเอียด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* --- Location & Favorite Boxes --- */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color="#4A90E2"
            />
            <Text style={styles.infoText}>เขตพระนคร</Text>
          </View>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons name="heart" size={24} color="#D0021B" />
            <Text style={styles.infoText}>ร้านโปรด</Text>
          </View>
        </View>

        <ScrollView style={styles.shopListContainer}>
          {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
