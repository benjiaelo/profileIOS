import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import cover from "./assets/avatar.jpg";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={cover} style={styles.coverImage} />
      <View style={styles.avatarContainer}>
        <Text style={[styles.name, styles.textWithShadow]}>Kwabena</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>kwabena@mail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Nickname:</Text>
          <Text style={styles.infoValue}>HNDRXXX</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Emergency Contact</Text>
          <Text style={styles.infoValue}>0244444444</Text>
        </View>

        <View
          style={{ backgroundColor: "black", color: "white", marginTop: 20 }}>
          <Button title="update profile" style={{ color: "white" }}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: 500,
    height: 500,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  content: {
    marginTop: 450,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
});

export default ProfileScreen;
