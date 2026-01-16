import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../StyleSheet/announcement_style';

const tab = () => {
  const announcements = [
    {
      discountTitle: 'ส่วนลด 10% สำหรับสมาชิกใหม่',
      description: 'สำหรับสมาชิกใหม่ รับส่วนลด 10% กรอกโค้ด "NEWSUCCESS10" สำหรับการสั่งซื้อครั้งแรกของคุณ',
      imageUrl: 'https://i.postimg.cc/cHKrn0VV/S-10076175.jpg', // ใส่ลิงก์ของรูปที่ต้องการ
    },
    {
      discountTitle: 'กรอกโค้ด SUCCESS50 ลด 50 บาท',
      description: 'กรอกโค้ด “SUCCESS50” ในขั้นตอนการชำระเงินเพื่อรับส่วนลด 50 บาท ในการซื้อครั้งถัดไป เมื่อยอดครบ 300 บาท ( 1 สิทธิ์ / ผู้ใช้ ) ',
      imageUrl: 'https://i.postimg.cc/Gmr850yb/S-10076176.jpg', // ใส่ลิงก์ของรูปที่ต้องการ
    },
    {
      discountTitle: 'ส่วนลด 100 บาท เมื่อใช้บริการ\nครบ 5 ครั้ง',
      description: 'เมื่อคุณใช้บริการครบ 5 ครั้ง จะได้รับส่วนลด 100 บาทในการใช้บริการครั้งถัดไป',
      imageUrl: 'https://i.postimg.cc/rmqfVZ3q/S-10076178.jpg', // ใส่ลิงก์ของรูปที่ต้องการ
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ANNOUNCEMENT</Text>
      <ScrollView style={{ width: '100%' }}>
        {announcements.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* กรอบสีเทาเข้มสำหรับรูปภาพ */}
            <View style={styles.imageBox}>
              <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
            </View>

            {/* กรอบสีฟ้าอ่อนสำหรับหัวข้อส่วนลด */}
            <View style={styles.discountBox}>
              <Text style={styles.discountTitle}>{item.discountTitle}</Text>
            </View>

            {/* รายละเอียดของประกาศ */}
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default tab;