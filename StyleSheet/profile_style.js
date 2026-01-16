import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 25,
  },
  scrollView: {
        flex: 1, 
        backgroundColor: '#fffff',
        width: '100%', 
    },
    scrollContent: {
        alignItems: 'center',
        width: '100%',
    },


  title: {
    fontSize: 30,
    fontFamily: 'Prompt_600SemiBold',
    textAlign: 'center',
    color: '#1a33b5',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  profilePictureContainer: {
        marginBottom: 10,
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden', 
        borderWidth: 4,
        borderColor: '#1a33b5', // ขอบรูปสีน้ำเงิน
        shadowColor: '#1a33b5',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 13,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 5,
  },
  nameBox: {
    width: '75%',
    height: 30,
    backgroundColor: '#D7E7FC',
    borderRadius: 5,
    marginBottom: 10,
  },
  gold: {
    fontSize: 16,
    marginBottom: 1,
    color : '#0073FF',
    fontWeight: '600', 
    textAlign: 'center'
  },
  subLine: {
    height: 25,
    backgroundColor: '#EBF5FF',
    width: '60%',
    borderRadius: 5,
    marginBottom: 20,
  },


  detailsContainer: {
        width: '90%',
        paddingHorizontal: 5,
    },
  detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#F5F5F5', // พื้นหลังขาว
        borderRadius: 15,
        marginBottom: 8, 
        borderWidth: 1,
        borderColor: '#EAEAEA',
    },
    loyaltyRow: { 
        backgroundColor: '#E6F0FF', // พื้นหลังสีฟ้าอ่อน
        borderColor:'#0D47A1',
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#777',
        flex: 1, 
        textTransform: 'uppercase',
    },
    detailValue: {
        fontSize: 15,
        flex: 2, 
        textAlign: 'right', 
        fontWeight: '700',
    },
    detailValue2: {
        fontSize: 13,
        flex: 2, 
        textAlign: 'right', 
        fontWeight: '700',
    },
    
    // --- Address Box (กล่องที่อยู่) ---
    addressBox: {
        backgroundColor: '#FFFFFF', 
        padding: 20,
        borderRadius: 15,
        marginTop: 15,
        borderLeftWidth: 5, // แถบเน้นด้านซ้าย
        borderLeftColor: '#0D47A1', 
        borderWidth: 1,
        borderColor: '#EAEAEA',
    },
    addressLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1a33b5', // หัวข้อสีน้ำเงิน
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    addressValue: {
        fontSize: 14,
        lineHeight: 20,
    },
    
    // --- Emergency Button ---
    emergencyButton: {
        backgroundColor: '#1a33b5',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 13,
    },
    emergencyButtonText: {
        color: '#F5F5F5',
        fontSize: 16,
        fontWeight: 'bold',
    }
});