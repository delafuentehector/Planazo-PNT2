import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Header from '../components/Header';

export default function ResultsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header titulo='Resultados'/>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Notification Banner */}
        <View style={styles.successBanner}>
          <View style={styles.bannerIconWrapper}>
            <MaterialIcons name="celebration" size={24} color="#ffffff" />
          </View>
          <View style={styles.bannerTextContent}>
            <Text style={styles.bannerTitle}>¡Tenemos un Match!</Text>
            <Text style={styles.bannerSubtitle}>Tus amigos y tú habéis coincidido.</Text>
          </View>
        </View>

        {/* Voting Statistics Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsCardTitle}>Resultados de la Votación</Text>
          
          <View style={styles.progressBarGroup}>
            {/* Ganador */}
            <View style={styles.barItem}>
              <View style={styles.barHeader}>
                <Text style={styles.barLabelWinner}>Terraza El Mirador</Text>
                <Text style={styles.barPercentageWinner}>65%</Text>
              </View>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: '65%', backgroundColor: '#6b38d4' }]} />
              </View>
            </View>

            {/* Opción 2 */}
            <View style={styles.barItem}>
              <View style={styles.barHeader}>
                <Text style={styles.barLabel}>Cena Italiana Fusion</Text>
                <Text style={styles.barPercentage}>25%</Text>
              </View>
              <View style={styles.barTrackSecondary}>
                <View style={[styles.barFill, { width: '25%', backgroundColor: 'rgba(107, 56, 212, 0.4)' }]} />
              </View>
            </View>

            {/* Opción 3 */}
            <View style={styles.barItem}>
              <View style={styles.barHeader}>
                <Text style={styles.barLabel}>Escape Room Sci-Fi</Text>
                <Text style={styles.barPercentage}>10%</Text>
              </View>
              <View style={styles.barTrackSecondary}>
                <View style={[styles.barFill, { width: '100%', backgroundColor: 'rgba(107, 56, 212, 0.2)' }]} />
              </View>
            </View>
          </View>
        </View>

        {/* info del elegido */}
        <View style={styles.winnerCard}>
          <View style={styles.imageWrapper}>
            <Image
              alt="Winning Plan"
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYTIXEl_gb1V5LLDO9MI1gUuWrtM7e4ojAVhrH4DjQWhdrqEq3uEr5FA7UriENUXQ7qQzW6se-2iV3IDrqQ2jltATwOq8epmS10N210rLUtDhL5T2Wwl1fGRd2oEcExXBxhgfpSlMcnat44it1y1itffBOzoYbBKQkzdV3rsRbW461XVfIrgMkpkjjGe02pAuK6bHPyxVqyQADZtU2472zbvRVnHZD5YUsrnm8opgARzkgI8OdpGzrXpiXpe36jW2Ekuum9lofI_WL' }}
              style={styles.winnerImage}
            />
            {/* Gradiente Oscuro  */}
            <View style={styles.imageOverlay}>
              <View style={styles.winnerBadge}>
                <Text style={styles.winnerBadgeText}>Opción Ganadora</Text>
              </View>
              
              <View style={styles.winnerHeaderContainer}>
                <Text style={styles.winnerCardTitle}>Terraza El Mirador</Text>
                <View style={styles.locationRow}>
                  <MaterialIcons name="location-on" size={16} color="rgba(255, 255, 255, 0.8)" />
                  <Text style={styles.locationText}>Madrid, Centro</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.winnerCardContent}>
            <Text style={styles.winnerDescription}>
              Un espacio exclusivo para disfrutar de los mejores cócteles con vistas panorámicas. El favorito absoluto del grupo hoy.
            </Text>

            {/* Action Links Grid (2x2) */}
            <View style={styles.gridContainer}>
        
              <TouchableOpacity style={[styles.gridButton, styles.buttonNeutral]}>
                <MaterialIcons name="map" size={24} color="#494454" />
                <Text style={styles.gridButtonTextNeutral}>Google Maps</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gridButton, styles.buttonNeutral]}>
                <MaterialIcons name="event-upcoming" size={24} color="#494454" />
                <Text style={styles.gridButtonTextNeutral}>Calendario</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.navigate('/')}>
          <MaterialIcons name="home"size={20} color="#6b38d4" />
          <Text style={styles.secondaryButtonText}>Volver al inicio</Text>
        </TouchableOpacity>
      </ScrollView>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    zIndex: 50,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  miniAvatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#6b38d4',
  },
  miniAvatar: {
    width: '100%',
    height: '100%',
  },
  secondaryButton: {
    backgroundColor: '#e9ddff',
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#6b38d4',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#7c3aed',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 120,
    gap: 24,
  },
  successBanner: {
    backgroundColor: '#8455ef',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#ffffff',
  },
  bannerIconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 9999,
  },
  bannerTextContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  bannerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  statsCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statsCardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6b38d4',
    marginBottom: 16,
  },
  progressBarGroup: {
    gap: 16,
  },
  barItem: {
    width: '100%',
  },
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: 6,
  },
  barLabelWinner: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1c1c',
  },
  barPercentageWinner: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6b38d4',
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#494454',
  },
  barPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1c1c',
  },
  barTrack: {
    height: 16,
    width: '100%',
    backgroundColor: '#e3e1ed',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  barTrackSecondary: {
    height: 12,
    width: '100%',
    backgroundColor: '#f3f3f4',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 9999,
  },
  winnerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(107, 56, 212, 0.1)',
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  imageWrapper: {
    height: 192,
    position: 'relative',
  },
  winnerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    padding: 16,
  },
  winnerBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#6b38d4',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  winnerBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  winnerHeaderContainer: {
    gap: 4,
  },
  winnerCardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    fontWeight: '500',
  },
  winnerCardContent: {
    padding: 24,
  },
  winnerDescription: {
    fontSize: 16,
    color: '#494454',
    lineHeight: 24,
    marginBottom: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gridButton: {
    width: '47.5%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  buttonFixedPurple: {
    backgroundColor: '#e9ddff',
  },
  gridButtonTextPurple: {
    color: '#6b38d4',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonPrimaryPurple: {
    backgroundColor: '#6b38d4',
    shadowColor: '#6b38d4',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  gridButtonTextWhite: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonNeutral: {
    backgroundColor: '#f3f3f4',
  },
  gridButtonTextNeutral: {
    color: '#494454',
    fontSize: 14,
    fontWeight: '600',
  },
  footerInfoBox: {
    marginTop: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#cbc3d7',
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarOverlapRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlapAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  overlapMargin: {
    marginLeft: -8, 
  },
  overlapBadge: {
    backgroundColor: '#e9ddff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlapBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6b38d4',
  },
  footerStatusText: {
    fontSize: 14,
    color: '#494454',
    fontWeight: '600',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 16,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navLabel: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '600',
    marginTop: 4,
  },
  activeNavItem: {
    backgroundColor: 'rgba(107, 56, 212, 0.08)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavLabel: {
    fontSize: 11,
    color: '#6b38d4',
    fontWeight: '600',
    marginTop: 2,
  },
});