import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailListScreen = ({ route, navigation }) => {
 
  return (
    <SafeAreaView style={styles.container}>
      {/* ส่วนหลักตรงกลาง */}
      <View style={styles.contentArea}>
        {/* Icon เครื่องหมายถูกขนาดใหญ่ */}
        <View style={styles.checkIconWrapper}>
          <Ionicons name="checkmark" size={120} color="#FFFFFF" />
        </View>

        {/* ปุ่มสถานะ "COMPLETE" */}
        <View style={styles.completePill}>
          <Text style={styles.completeText}>COMPLETE</Text>
        </View>
        
        {/* ปุ่ม "ตรวจสอบสถานะ" */}
        <TouchableOpacity 
          style={styles.primaryButton} 
          onPress={() => navigation.navigate('Tracking')} // นำทางไปหน้า Tracking.js
        >
          <Text style={styles.buttonText}>ตรวจสอบสถานะ</Text>
          <Ionicons name="chevron-forward-circle-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

// ----------------------------------------------------
// Stylesheet
// ----------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', // จัดให้เนื้อหาหลักอยู่ตรงกลาง
    paddingVertical: 40,
  },
  contentArea: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  
  // --- Icon Styles ---
  checkIconWrapper: {
    width: 180,  // ขยายให้ใหญ่ขึ้น
    height: 180, // ขยายให้ใหญ่ขึ้น
    borderRadius: 90,  // ทำให้วงกลม
    backgroundColor: '#4CAF50', // สีเขียว
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 5,
    borderColor: '#E8F5E9', // ขอบสีอ่อนรอบนอก
  },
  
  // --- Complete Pill Styles ---
  completePill: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#E6F0F9', // สีฟ้าอ่อน
    borderRadius: 6,
    marginBottom: 40,
  },
  completeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#348FE2', // สีฟ้าเข้ม
  },
  
  // --- Primary Button Styles ---
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00008B', // สีน้ำเงินเข้ม
    paddingVertical: 18,
    paddingHorizontal: 30, // เพิ่มความกว้างของปุ่ม
    marginHorizontal: 20,
    borderRadius: 10,
    minWidth: 250,
     marginBottom: 20
   // เพิ่มขนาดความกว้างของปุ่ม
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default DetailListScreen;