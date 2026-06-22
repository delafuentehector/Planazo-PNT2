import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Location from 'expo-location';
import Header from '../components/Header';
import salas from '../services/salas';
import { useState, useEffect } from 'react';

let MapView = null;
let Marker = null;

if (Platform.OS !== 'web') {
  const ReactNativeMaps = require('react-native-maps');
  MapView = ReactNativeMaps.default;
  Marker = ReactNativeMaps.Marker;
}

export default function ResultsScreen() {
  const router = useRouter();

  const[planGanador, setPlanGanador]= useState(null);
  const[cargando, setCargando]= useState(true);
  const[ubicacion, setUbicacion]= useState(null);
  const[cargandoMapa, setCargandoMapa]= useState(false);
  const [sala, setSala]= useState(null);
  const [cargandoSala, setCargandoSala]= useState(true);

  const { id } = useLocalSearchParams();


  useEffect(() => {
    salas.obtenerPlanGanador(id)
      .then(setPlanGanador)
      .catch(console.error)
      .finally(() => setCargando(false));
  }, []);

  useEffect(() => {
    salas.obtenerSala(id)
      .then(setSala)
      .catch(console.error)
      .finally(() => setCargandoSala(false));
  }, []);

  useEffect(() => {
    if (!planGanador) {
      return;
    }
    

    let cancelado = false;

    const geocodificarPlan = async () => {
      setCargandoMapa(true);
      setUbicacion(null);

      if (Platform.OS === 'web') {
        setCargandoMapa(false);
        return;
      }

      const direccion = planGanador?.direccion?.trim();
      const barrio = planGanador?.barrio?.trim();

      try {
        const permisos = await Location.requestForegroundPermissionsAsync();

        if (permisos.status !== 'granted') {
          if (!cancelado) {
            setUbicacion(null);
          }
          return;
        }

        const busquedas = [];

        if (direccion) {
          busquedas.push({
            query: [direccion, barrio, 'Argentina'].filter(Boolean).join(', '),
            aproximada: false,
          });
        }

        if (barrio) {
          busquedas.push({
            query: `${barrio}, Argentina`,
            aproximada: true,
          });
        }

        for (const busqueda of busquedas) {
          const resultados = await Location.geocodeAsync(busqueda.query);
          const resultado = resultados?.[0];

          if (resultado && !cancelado) {
            setUbicacion({
              coords: {
                latitude: resultado.latitude,
                longitude: resultado.longitude,
              },
              aproximada: busqueda.aproximada,
            });
            return;
          }
        }

        if (!cancelado) {
          setUbicacion(null);
        }
      } catch (error) {
        console.error('Error obteniendo ubicacion del plan:', error);
        if (!cancelado) {
          setUbicacion(null);
        }
      } finally {
        if (!cancelado) {
          setCargandoMapa(false);
        }
      }
    };

    geocodificarPlan();

    return () => {
      cancelado = true;
    };
  }, [planGanador]);

  if (cargando) {
    return (
      <SafeAreaView style={styles.container}>
        <Header titulo='Resultados'/>
        <View style={styles.centerState}>
          <ActivityIndicator size="large" color="#6b38d4" />
        </View>
      </SafeAreaView>
    );
  }
  
  if (!planGanador) {
    return (
      <SafeAreaView style={styles.container}>
        <Header titulo='Resultados'/>
        <View style={styles.centerState}>
          <MaterialIcons name="sentiment-dissatisfied" size={56} color="#94a3b8" />
          <Text style={styles.emptyText}>Todavía no hay un plan ganador</Text>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.navigate('/')}>
            <MaterialIcons name="home" size={20} color="#6b38d4" />
            <Text style={styles.secondaryButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const formatFecha = (fecha) => fecha.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const generarLinkCalendar = (plan, inicio) => {
    const fin = new Date(inicio);
    fin.setDate(fin.getDate() + 1);
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: planGanador.titulo,
        dates: `${formatFecha(inicio)}/${formatFecha(fin)}`,
        details: plan.descripcion ?? '',
        location: plan.direccion ?? '',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

  const agendarPlan = (plan) => {
    const inicio = new Date(sala?.fecha);
    Linking.openURL(generarLinkCalendar(plan, inicio));
};

  const abrirMaps = async () => {
    const url = 'https://www.youtube.com/watch?v=QDia3e12czc';
    try {
      await Linking.openURL(url);
    } catch (error) {
      alert('Proximamente');
    }
  }
  
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
            <Text style={styles.bannerSubtitle}>Tus amigos y vos coincidieron en un plan!</Text>
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
                <Text style={styles.winnerCardTitle}>{planGanador?.titulo}</Text>
                <View style={styles.locationRow}>
                  <MaterialIcons name="location-on" size={16} color="rgba(255, 255, 255, 0.8)" />
                  <Text style={styles.locationText}>{planGanador?.barrio}, {planGanador?.direccion}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.winnerCardContent}>
            <Text style={styles.winnerDescription}>
             {planGanador?.descripcion}
            </Text>

            <View style={styles.gridContainer}>
        
              <TouchableOpacity style={[styles.gridButton, styles.buttonNeutral]} onPress={() => abrirMaps()}>
                <MaterialIcons name="map" size={24} color="#494454" />
                <Text style={styles.gridButtonTextNeutral}>Google Maps</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gridButton, styles.buttonNeutral]} onPress={() => agendarPlan(planGanador)}>
                <MaterialIcons name="calendar-month" size={24} color="#494454" />
                <Text style={styles.gridButtonTextNeutral}>Agendar en Calendario</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={styles.mapSection}>
          <View style={styles.mapHeader}>
            <MaterialIcons name="location-on" size={22} color="#6b38d4" />
            <Text style={styles.mapTitle}>Ubicación del plan</Text>
          </View>

          {Platform.OS === 'web' ? (
            <View style={styles.mapStateBox}>
              <MaterialIcons name="map" size={36} color="#94a3b8" />
              <Text style={styles.mapStateText}>
                El mapa interactivo está disponible en Android o iOS.
              </Text>
              <Text style={styles.mapAddressText}>
                {[planGanador?.direccion, planGanador?.barrio].filter(Boolean).join(', ')}
              </Text>
            </View>
          ) : cargandoMapa ? (
            <View style={styles.mapStateBox}>
              <ActivityIndicator size="large" color="#6b38d4" />
              <Text style={styles.mapStateText}>Buscando ubicación...</Text>
            </View>
          ) : ubicacion ? (
            <>
              {ubicacion.aproximada ? (
                <Text style={styles.mapNota}>Ubicación aproximada del barrio.</Text>
              ) : null}
              <MapView
                style={styles.mapa}
                initialRegion={{
                  latitude: ubicacion.coords.latitude,
                  longitude: ubicacion.coords.longitude,
                  latitudeDelta: ubicacion.aproximada ? 0.05 : 0.01,
                  longitudeDelta: ubicacion.aproximada ? 0.05 : 0.01,
                }}
                pointerEvents="auto"
              >
                <Marker
                  coordinate={ubicacion.coords}
                  title={planGanador?.titulo}
                  description={
                    ubicacion.aproximada
                      ? `Aprox. en ${planGanador?.barrio}`
                      : planGanador?.direccion
                  }
                />
              </MapView>
            </>
          ) : (
            <View style={styles.mapStateBox}>
              <MaterialIcons name="location-off" size={36} color="#94a3b8" />
              <Text style={styles.mapStateText}>No se pudo obtener la ubicación del plan.</Text>
            </View>
          )}
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
  centerState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 40,
  },
  emptyText: {
    color: '#94a3b8',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
  mapSection: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(107, 56, 212, 0.1)',
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
    gap: 12,
  },
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mapTitle: {
    color: '#1a1c1c',
    fontSize: 18,
    fontWeight: '700',
  },
  mapa: {
    width: '100%',
    height: 220,
    borderRadius: 18,
    overflow: 'hidden',
  },
  mapStateBox: {
    minHeight: 160,
    borderRadius: 18,
    backgroundColor: '#f3f3f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  mapStateText: {
    color: '#494454',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  mapAddressText: {
    color: '#6b38d4',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  mapNota: {
    color: '#6b38d4',
    fontSize: 13,
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