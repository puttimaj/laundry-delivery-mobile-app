import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Prompt_600SemiBold',
    textAlign: 'center',
    color: '#1a33b5',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  card: {
    width: '90%',
    backgroundColor: '#f5f5f5', // กรอบสีเทาอ่อนสำหรับแต่ละประกาศ
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
  },
  imageBox: {
    width: '100%',
    height: 150, // ปรับขนาดให้เหมาะสมสำหรับรูปภาพ
    backgroundColor: '#ccc', // กรอบสีเทาเข้มสำหรับใส่รูปภาพ
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  discountBox: {
    backgroundColor: '#d0e9f9', // กรอบสีฟ้าอ่อน
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  discountTitle: {
    fontSize: 16,
    fontFamily: 'Prompt_600SemiBold',
    color: '#1a33b5', // สีฟ้าสำหรับหัวข้อส่วนลด
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Prompt_600SemiBold',
    color: '#1a33b5',
    //marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'Prompt_400Regular',
    color: '#333', // ข้อความรายละเอียด
  },
});