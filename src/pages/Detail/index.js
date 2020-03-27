import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import styles from "./styles";
import logoImage from "../../assets/logo.png";

function Detail() {
  const navigation = useNavigation();
  const message =
    'Hello Company, I am contacting you because I would like to help with the incident"Incident here" with a donation of U$ 120';
  const phoneNumber = "fakenumber";
  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Hero of the incident: indedent x",
      recipients: ["mail@mock.com", "mail@mock.com"],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>APAE</Text>

        <Text style={styles.incidentProperty}>Incident:</Text>
        <Text style={styles.incidentValue}>
          Buy a chair wheelchair to a pacient.
        </Text>

        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>U$ 120.00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this incident.</Text>
        <Text style={styles.description}>Contact:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;
