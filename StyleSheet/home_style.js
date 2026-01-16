import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
     paddingTop: 25,
  },
  headerTitle: {
    fontSize: 32  ,
    fontWeight: 'bold',
    color: '#00008B',
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: 'serif',
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  shopListContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  shopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shopImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  // Style สำหรับกล่องสีฟ้าที่รวมข้อมูลร้าน
  shopInfoContainer: {
    padding: 15,
    backgroundColor: '#E6F0FF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // Style สำหรับชื่อร้าน (ตัวใหญ่)
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 10, // เว้นบรรทัด
  },
  // Style สำหรับแถวข้อมูล (ไอคอน + text)
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // เว้นระยะห่างระหว่างแถว
  },
  // Style สำหรับข้อความข้อมูล (ที่อยู่, เบอร์โทร ฯลฯ)
  infoDetailText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    flexShrink: 1, // ป้องกัน text ดันทะลุจอ
  },
  cardLink: { 
        color: "#1e88e5", // นี่คือสีเดิม (ฟ้า)
        fontWeight: "600", // นี่คือน้ำหนักเดิม
        fontSize: 14,
    },
});