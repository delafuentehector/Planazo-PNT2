import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
    const router = useRouter();
    const suggestions = [
    {
        id: 1,
        title: "Conciertos",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },
    {
        id: 2,
        title: "Cenas",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
        id: 3,
      title: "Aire libre",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.logo}>Planazo</Text>

        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
            }}
            style={styles.heroImage}
          />

          <View style={styles.overlay} />

          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>¿Cuál es el plan de hoy?</Text>

            <Text style={styles.heroSubtitle}>
              Organiza o únete a la diversión en segundos.
            </Text>
          </View>
        </View>

        {/* CREAR SALA */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Crear Sala</Text>

            <Pressable style={styles.createRoomButton} onPress={() => router.navigate('/sala/crearSala')}>
            <View style={styles.createIconContainer}>
                <Text style={styles.createIcon}>➕</Text>
            </View>

            <Text style={styles.createTitle}>Crear Sala</Text>

            <Text style={styles.createSubtitle}>
                Empieza un plan solo o con amigos
            </Text>
            </Pressable>
        </View>

        {/* UNIRSE */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Unirse a Sala</Text>

            <Pressable style={styles.joinButton} onPress={() => router.navigate('/sala/unirseSala')}>
            <View style={styles.joinIconContainer}>
                <Text style={styles.joinIcon}>👥</Text>
            </View>

            <Text style={styles.joinTitle}>Unirse a una Sala</Text>

            <Text style={styles.joinSubtitle}>
                Introduce un código o escanea
            </Text>
            </Pressable>
        </View>

        {/* SUGERENCIAS */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sugerencias para ti</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {suggestions.map((item) => (
                <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />

                <View style={styles.cardOverlay} />

                <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
            ))}
            </ScrollView>
        </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="home" size={24} color="#8455ef" />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="favorite-border" size={24} color="#373737" />
            <Text style={styles.navLabel}>Matches</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.navItem}>
            <MaterialIcons name="event-note" size={24} color="#373737" />
            <Text style={styles.navLabel}>Plans</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/usuario/perfil')}>
            <MaterialIcons name="person" size={24} color="#373737"/>
            <Text style={styles.navLabel}>Profile</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },

  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6B38D4",
  },

  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationIcon: {
    fontSize: 22,
  },

  hero: {
    height: 220,
    margin: 20,
    borderRadius: 30,
    overflow: "hidden",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  heroContent: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },

  heroTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  heroSubtitle: {
    color: "white",
    marginTop: 8,
    fontSize: 15,
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#222",
  },

  createRoomButton: {
    backgroundColor: "#6B38D4",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
  },

  createIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  createIcon: {
    fontSize: 34,
    color: "white",
  },

  createTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  createSubtitle: {
    color: "rgba(255,255,255,0.8)",
    marginTop: 8,
  },

  joinButton: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 24,
    alignItems: "center",
  },

  joinIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E9DDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  joinIcon: {
    fontSize: 28,
  },

  joinTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },

  joinSubtitle: {
    color: "#666",
    marginTop: 6,
  },

  card: {
    width: 170,
    height: 220,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 16,
    justifyContent: "flex-end",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: 'rgb(259, 259, 259)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 12, 
    shadowColor: '#6b38d4',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navLabel: {
    fontSize: 12,
    color: '#5d5d67',
    fontWeight: '500',
    marginTop: 4,
  },
  activeNavItem: {
    backgroundColor: 'rgba(132, 85, 239, 0.1)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  activeNavLabel: {
    fontSize: 12,
    color: '#8455ef',
    fontWeight: '600',
  },
});
