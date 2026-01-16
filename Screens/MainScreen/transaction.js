import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  ScrollView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

// ----------------------------------------------------
// DUMMY DATA: รายการผ้าที่นับเป็นชิ้น
// ----------------------------------------------------
const CLOTHING_ITEMS = [
    { id: 1, name: 'เสื้อยืด', unit: 'ชิ้น' },
    { id: 2, name: 'เสื้อเชิ้ต', unit: 'ชิ้น' },
    { id: 3, name: 'กางเกง', unit: 'ชิ้น' },
    { id: 4, name: 'กระโปรง', unit: 'ชิ้น' },
    { id: 5, name: 'เดรส', unit: 'ชิ้น' },
];

// ----------------------------------------------------
// COMPONENT A: Counter Row
// ----------------------------------------------------
const ItemCounter = ({ item, count, setCount }) => {
    return (
        <View style={styles.counterRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            
            <View style={styles.counterControl}>
                {/* ปุ่มลบ (-) */}
                <TouchableOpacity 
                    style={styles.counterButton}
                    onPress={() => setCount(item.id, Math.max(0, count - 1))}
                >
                    <Text style={styles.buttonTextSmall}>-</Text>
                </TouchableOpacity>

                {/* ช่องแสดงจำนวน */}
                <View style={styles.counterValueBox}>
                    <Text style={styles.counterValueText}>{count}</Text>
                </View>

                {/* ปุ่มเพิ่ม (+) */}
                <TouchableOpacity 
                    style={styles.counterButton}
                    onPress={() => setCount(item.id, count + 1)}
                >
                    <Text style={styles.buttonTextSmall}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// ----------------------------------------------------
// 2. MAIN COMPONENT: TransactionScreen
// ----------------------------------------------------
const TransactionScreen = ({ navigation }) => {
    // State สำหรับเก็บจำนวนผ้าที่ลูกค้าเลือก {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    const [itemCounts, setItemCounts] = useState(
        CLOTHING_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
    );
    const [pickupTime, setPickupTime] = useState('วัน / เวลา ที่เข้ารับ');

    // Function สำหรับอัพเดทจำนวนผ้า
    const handleSetCount = (id, newCount) => {
        setItemCounts(prev => ({ ...prev, [id]: newCount }));
    };
    
    // คำนวณจำนวนผ้าทั้งหมดที่เลือก
    const totalItems = Object.values(itemCounts).reduce((sum, count) => sum + count, 0);

    // Function สำหรับยืนยันออเดอร์
    const handleConfirmOrder = () => {
        // เมื่อกด "CONFIRM ORDER" จะส่งข้อมูลไปยังหน้า DetailList.js
        navigation.navigate('DetailList', { selectedService: 'บริการที่เลือก', pickupTime, itemCounts });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Header Bar (ปุ่มย้อนกลับ) */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={25} color="#FFFFFF" />
        </TouchableOpacity> 

                {/* กล่องแสดงบริการที่เลือก */}
                <View style={styles.selectedServiceBox}>
                    <MaterialCommunityIcons 
                        name="washing-machine" 
                        size={50} 
                        color="#0D47A1" 
                    />
                    <Text style={styles.selectedServiceName}>โปรดระบุจำนวน</Text>
                </View>

                {/* รายการผ้า (Item Counter List) */}
                <View style={styles.itemsListContainer}>
                    {CLOTHING_ITEMS.map(item => (
                        <ItemCounter
                            key={item.id}
                            item={item}
                            count={itemCounts[item.id]}
                            setCount={handleSetCount}
                        />
                    ))}
                </View>
                
                {/* ช่องเลือกวัน/เวลา */}
                <View style={styles.pickupTimeContainer}>
                    <Text style={styles.pickupTimeLabel}>วัน / เวลา ที่เข้ารับ</Text>
                    <TouchableOpacity style={styles.dateInputWrapper}>
                        <TextInput 
                            style={styles.dateInput}
                            placeholder={pickupTime}
                            editable={false} // ทำให้กดไม่ได้ (จำลองการเปิด Date Picker)
                        />
                        <Ionicons name="calendar-outline" size={24} color="#777" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
            
            {/* ปุ่มยืนยัน (Fixed Bottom Button) */}
            <TouchableOpacity 
                style={[styles.confirmButton, totalItems === 0 && styles.confirmButtonDisabled]}
                disabled={totalItems === 0}
                onPress={handleConfirmOrder} // เมื่อกดจะไปหน้า DetailList
            >
                <Text style={styles.confirmButtonText}>CONFIRM ORDER</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

// ----------------------------------------------------
// 3. Stylesheet
// ----------------------------------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        
    },
    scrollContent: {
        paddingBottom: 100, // เว้นที่ว่างสำหรับปุ่มด้านล่าง
        paddingHorizontal: 20,
    },
    header: {
        paddingTop: 10,
        height: 60,
        justifyContent: 'center',
        marginBottom: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // --- Selected Service Box ---
    selectedServiceBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6F0F9', // สีฟ้าอ่อน
        padding: 20,
        borderRadius: 15,
        marginBottom: 30,
    },
    selectedServiceName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 15,
    },

    // --- Item Counter List ---
    itemsListContainer: {
        marginBottom: 30,
    },
    counterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    itemName: {
        fontSize: 16,
        color: '#333',
    },
    counterControl: {
        flexDirection: 'row',
        alignItems: 'center',
        // ใช้ width คงที่เพื่อให้จัดชิดขวาได้
        width: 120, 
        justifyContent: 'space-between', 
    },
    counterButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#E6F0F9', // สีฟ้าอ่อนตามรูป
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    counterValueBox: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6F0F9',
        borderRadius: 5,
    },
    counterValueText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0D47A1',
    },
    buttonTextSmall: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0D47A1',
        lineHeight: 20,
    },

    // --- Date Picker / Time Slot ---
    pickupTimeContainer: {
        marginBottom: 30,
    },
    pickupTimeLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    dateInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F9F9F9',
        height: 50,
    },
    dateInput: {
        flex: 1,
        fontSize: 16,
        color: '#777',
    },

    // --- Fixed Button ---
    confirmButton: {
        backgroundColor: '#00008B', 
        paddingVertical: 18,
        marginHorizontal: 20,
        borderRadius: 10,
        
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20, // จัดให้อยู่เหนือขอบล่าง
        left: 20,
        right: 20,
    },
    confirmButtonDisabled: {
        backgroundColor: '#A9A9A9', // สีเทาเมื่อปุ่มถูกปิดใช้งาน
    },
    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

// ----------------------------------------------------
// 4. App Component หลัก (ส่งออก)
// ----------------------------------------------------
export default TransactionScreen;