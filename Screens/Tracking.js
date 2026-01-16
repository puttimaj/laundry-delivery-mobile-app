import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const STEPS = [
  { key: "received", label: "รับ\nออเดอร์" },
  { key: "processing", label: "กำลัง\nดำเนินการ" },
  { key: "shipping", label: "กำลัง\nจัดส่ง" },
  { key: "done", label: "เสร็จสิ้น" },
];

const CIRCLE = 64;

function Stepper({ steps, activeIndex }) {
  return (
    <View>
      <View style={styles.stepRow}>
        {steps.map((s, i) => {
          const isActive = i === activeIndex;
          return (
            <React.Fragment key={s.key}>
              <View style={[styles.circle, isActive && styles.circleActive]}>
                {isActive && <MaterialIcons name="check" size={26} color="#fff" />}
              </View>
              {i < steps.length - 1 && <View style={styles.connector} />}
            </React.Fragment>
          );
        })}
      </View>

      <View style={styles.labelsRow}>
        {steps.map((s, i) => (
          <View key={s.key} style={styles.labelBox}>
            <Text style={[styles.stepLabel, i === activeIndex && styles.stepLabelActive]}>
              {s.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Tracking({ activeStep = 0 }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ===== หัวข้อด้านบน ===== */}
      <Text style={styles.headerText}>TRACKING</Text>

      {/* ===== สเต็ปสถานะ ===== */}
      <View style={styles.card}>
        <Stepper steps={STEPS} activeIndex={activeStep} />
      </View>

      {/* ===== เส้นลูกศรตกแต่ง ===== */}
      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <View style={styles.arrowHead} />
      </View>

      {/* ===== การ์ดรายละเอียด ===== */}
      <View style={styles.detailCard}>
        <Text style={styles.detailTitle}>คำสั่งซื้อ</Text>
        <Text style={styles.detail}>#SUCCESS-0395</Text>
        <Text style={styles.detail1}>สถานะปัจจุบัน :                     รับออเดอร์</Text>
        <View style={[styles.skel, { height: 16, marginTop: 12, width: "78%" }]} />
        <View style={[styles.skel, { height: 16, marginTop: 10, width: "72%" }]} />
        <View style={[styles.skel, { height: 16, marginTop: 14, width: "58%" }]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Prompt_600SemiBold',
    textAlign: 'center',
    color: '#1a33b5',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#E6F0FF', // สีฟ้าอ่อนมาก
    borderRadius: 16,
    paddingVertical: 22,
    paddingHorizontal: 16,
    shadowColor: '#1a33b5', 
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 7 },
    elevation: 4,
    borderWidth: 1, 
    borderColor: '#D4E2F7', 
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    borderWidth: 2,
    borderColor: "#cfd3d8",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circleActive: {
    backgroundColor: "#36B37E",
    borderColor: "#36B37E",
  },
  connector: { 
    flex: 1, 
    height: 2, 
    backgroundColor: "#cfd3d8", 
    marginHorizontal: 6 
  },
  labelsRow: { 
    marginTop: 10, 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },
  labelBox: { width: CIRCLE, alignItems: "center" },
  stepLabel: { 
    fontSize: 13, 
    lineHeight: 16, 
    color: "#6b7280", 
    textAlign: "center" 
  },
  stepLabelActive: { 
    color: "#1a33b5", 
    fontWeight: 'bold', 
  },

  dividerRow: { flexDirection: "row", alignItems: "center", marginTop: 18, paddingHorizontal: 6 },
  divider: { flex: 1, height: 2, backgroundColor:"#1a33b5", borderRadius: 2 },
  arrowHead: {
    width: 0, height: 0,
    borderTopWidth: 6, borderBottomWidth: 6, borderLeftWidth: 10,
    borderTopColor: "transparent", borderBottomColor: "transparent", borderLeftColor: "#1a33b5",
    marginLeft: 6,
  },

  detailCard: { marginTop: 18, backgroundColor: "#f6f7f9", borderRadius: 16, padding: 18 },
  detailTitle: { fontSize: 26, fontWeight: "700", color: "#111827" },
  detail: { fontSize: 20, fontWeight: "700", color: "#1a33b5" },
  detail1: {fontSize: 15, fontWeight: "400"},
  skel: { backgroundColor: "#d9dbe1", borderRadius: 8 },
});