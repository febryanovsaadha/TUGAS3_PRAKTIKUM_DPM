import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.profileImage}
        source={{ uri: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" }}
      />
      <Text style={styles.text}>Nurfauzan Ovsa</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>12K</Text>  {/* Replace with follower count */}
          <Text style={styles.labelText}>Followers</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>53</Text>  {/* Replace with following count */}
          <Text style={styles.labelText}>Following</Text>
        </View>
        <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
          <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -16,
  },
  counterContainer: {
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
    justifyContent: "space-between", 
    width: "90%", 
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
    width: 70,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  labelText: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
});
