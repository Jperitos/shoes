import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>SoleCraft</Text>
    <View style={styles.navLinks}>
      <Text style={styles.navText}>Home</Text>
      <Text style={styles.navText}>Products</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function HomeScreen() {
  const productImages = [
    require("../../assets/images/shoe5.png"),
    require("../../assets/images/shoe2.png"),
    require("../../assets/images/shoe3.png"),
    require("../../assets/images/shoe4.png"),
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* About Section */}
      <View style={styles.aboutSection}>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.aboutTitle}>About SoleCraft</Text>
          <Text style={styles.aboutText}>
            SoleCraft helps you quickly find and buy stylish, high-quality shoes—classic or exclusive, hassle-free.
          </Text>
          <TouchableOpacity style={styles.learnMoreBtn}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../../assets/images/shoe1.png")} style={styles.aboutImage} />
      </View>

      {/* Latest Products */}
      <Text style={styles.latestTitle}>Latest Products</Text>
      <View style={styles.productGrid}>
        {productImages.map((img, idx) => (
          <View key={idx} style={styles.productCard}>
            <Image source={img} style={styles.productImage} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  navText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
  },
  aboutSection: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  aboutTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  aboutTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 16,
    color: "#333",
  },
  learnMoreBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
  },
  learnMoreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  aboutImage: {
    width: 180,
    height: 130,
    resizeMode: "contain",
  },
  latestTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 32,
  },
  productCard: {
    width: "44%",
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});
