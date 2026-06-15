import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import Header from '../components/Header';

export default function JoinRoomScreen() {
  const router = useRouter();
  const options = [
    {
      id: 1,
      title: 'Escanear QR',
      subtitle: 'Escanea el código del anfitrión',
      icon: '📷',
    },
    {
      id: 2,
      title: 'Pegar Enlace',
      subtitle: 'Introduce el enlace de invitación',
      icon: '🔗',
    },
    {
      id: 3,
      title: 'Contactos',
      subtitle: 'Busca salas activas de tus amigos',
      icon: '👥',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Header titulo='Unirse a Sala' />

      {/* CONTENT */}
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* TITLE */}
        <View style={styles.intro}>
          <Text style={styles.title}>
            ¿Cómo quieres unirte?
          </Text>

          <Text style={styles.subtitle}>
            Elige una de las siguientes opciones
            para encontrar a tu grupo y empezar
            el plan.
          </Text>
        </View>

        {/* OPTIONS */}
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionCard}
            activeOpacity={0.8}
          >
            <View style={styles.optionLeft}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                  {option.icon}
                </Text>
              </View>

              <View>
                <Text style={styles.optionTitle}>
                  {option.title}
                </Text>

                <Text style={styles.optionSubtitle}>
                  {option.subtitle}
                </Text>
              </View>
            </View>

            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}

        {/* DECORATIVE CARD */}
        <View style={styles.infoCard}>
          <View style={styles.celebrationCircle}>
            <Text style={styles.celebrationIcon}>
              🎉
            </Text>
          </View>

          <Text style={styles.infoTitle}>
            ¡Los mejores planes se comparten!
          </Text>

          <Text style={styles.infoText}>
            Únete a una sala para votar las
            actividades que más te gusten con
            tu grupo.
          </Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  header: {
    height: 70,
    backgroundColor: 'rgba(255,255,255,0.95)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    fontSize: 28,
    color: '#7C3AED',
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7C3AED',
  },

  profileImage: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },

  scroll: {
    padding: 20,
    paddingBottom: 140,
  },

  intro: {
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },

  optionCard: {
    backgroundColor: 'white',
    borderRadius: 28,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 4,
  },

  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  icon: {
    fontSize: 28,
  },

  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },

  optionSubtitle: {
    marginTop: 4,
    color: '#777',
    fontSize: 14,
  },

  arrow: {
    fontSize: 30,
    color: '#AAA',
  },

  infoCard: {
    marginTop: 30,
    backgroundColor: '#F3E8FF',
    borderRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  celebrationCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  celebrationIcon: {
    fontSize: 40,
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C1D95',
    textAlign: 'center',
    marginBottom: 10,
  },

  infoText: {
    fontSize: 14,
    color: '#6D28D9',
    textAlign: 'center',
    lineHeight: 22,
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 30,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  navItem: {
    alignItems: 'center',
  },

  navItemActive: {
    alignItems: 'center',
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 18,
  },

  navIcon: {
    fontSize: 22,
    marginBottom: 4,
  },

  navIconActive: {
    fontSize: 22,
    marginBottom: 4,
  },

  navText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
  },

  navTextActive: {
    fontSize: 12,
    color: '#7C3AED',
    fontWeight: 'bold',
  },
});