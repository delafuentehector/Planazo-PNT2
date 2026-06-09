import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import Header from "../components/Header";
import ActionCard from "../components/ActionCard";
import SuggestionCard from "../components/SuggestionCard";

const SUGGESTIONS_DATA = [
  { id: 1, title: "Conciertos", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a" },
  { id: 2, title: "Cenas", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
  { id: 3, title: "Aire libre", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f" }} style={styles.heroImage} />
          <View style={styles.overlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>¿Cuál es el plan de hoy?</Text>
            <Text style={styles.heroSubtitle}>Organiza o únete a la diversión en segundos.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Crear Sala</Text>
          <ActionCard 
            title="Crear Sala"
            subtitle="Empieza un plan solo o con amigos"
            icon="➕"
            variant="primary"
            onPress={() => router.navigate('/sala/crearSala')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Unirse a Sala</Text>
          <ActionCard 
            title="Unirse a una Sala"
            subtitle="Introduce un código o escanea"
            icon="👥"
            variant="secondary"
            onPress={() => router.navigate('/sala/unirseSala')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sugerencias para ti</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {SUGGESTIONS_DATA.map((item) => (
              <SuggestionCard key={item.id} title={item.title} image={item.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  hero: { height: 220, margin: 20, borderRadius: 30, overflow: "hidden" },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.35)" },
  heroContent: { flex: 1, justifyContent: "flex-end", padding: 20 },
  heroTitle: { color: "white", fontSize: 28, fontWeight: "bold" },
  heroSubtitle: { color: "white", marginTop: 8, fontSize: 15 },
  section: { marginHorizontal: 20, marginBottom: 30 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 16, color: "#222" },
});