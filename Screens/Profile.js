import {View , Text , Image , ScrollView , TouchableOpacity , SafeAreaView} from 'react-native';
import { styles } from '../StyleSheet/profile_style';
import { Ionicons } from '@expo/vector-icons';

const tab = ()=> {
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.title}>MY PROFILE</Text>

      <View style={styles.profilePictureContainer}>
       <Image
       source={{ uri: "https://i.postimg.cc/3x15sk66/image1.jpg"}}
       style={styles.profileImage}
       resizeMode="cover"
       />
      </View>
      
      <Text style={styles.name}>Kanyanat Tongmaleewan</Text>
      
      <View style={styles.subLine}>
       <Text style={styles.gold}>Premium User</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PHONE</Text>
          <Text style={styles.detailValue}> +66 81 234 5678 </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>EMAIL</Text>
          <Text style={styles.detailValue2}> Phone.bkk@success.com </Text>
        </View>
        <View style={[styles.detailRow, styles.loyaltyRow]}>
          <Text style={styles.detailLabel}>LOYALTY POINTS</Text>
          <Text style={[styles.detailValue, { color:'#1a33b5', fontSize: 18 }]}> 455  PTS </Text>
        </View>
        <View style={styles.addressBox}>
                    <Text style={styles.addressLabel}>PRIMARY ADDRESS</Text>
                    <Text style={styles.addressValue}>99/9 The Exclusive Residence, Bangkok, Thailand 10100</Text>
        </View>
            
        <TouchableOpacity style={styles.emergencyButton}>
          <Ionicons name="chatbox-ellipses-outline" size={20} color='#F5F5F5' />
          <Text style={styles.emergencyButtonText}>LIVE CHAT SUPPORT</Text>
        </TouchableOpacity>

       </View> 
    </View>
    </ScrollView>
  </SafeAreaView>
  );
}
export default tab;