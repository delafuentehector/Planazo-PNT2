import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

export default function CreateRoomScreen() {
  const [selectedActivity, setSelectedActivity] = useState('Gastronomía');
  const [selectedBudget, setSelectedBudget] = useState(2);

  const activities = [
    { id: 1, name: 'Gastronomía', icon: '🍽️' },
    { id: 2, name: 'Ocio', icon: '🎬' },
    { id: 3, name: 'Deporte', icon: '🏋️' },
    { id: 4, name: 'Fiesta', icon: '🎉' },
  ];

  const restrictions = [
    { id: 1, name: 'Vegano', icon: '🥗' },
    { id: 2, name: 'Gluten', icon: '🍞', selected: true },
    { id: 3, name: 'Lactosa', icon: '🥛' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Nueva Sala
          </Text>
        </View>

        <Text style={styles.notification}>🔔</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* ROOM NAME */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Nombre de la sala
          </Text>

          <TextInput
            placeholder="Ej: Cena de Cumpleaños 🎉"
            style={styles.input}
            placeholderTextColor="#999"
          />
        </View>

        {/* ACTIVITIES */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Tipo de actividad
          </Text>

          <View style={styles.activitiesGrid}>
            {activities.map((activity) => {
              const selected =
                selectedActivity === activity.name;

              return (
                <TouchableOpacity
                  key={activity.id}
                  style={[
                    styles.activityButton,
                    selected &&
                      styles.activityButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedActivity(activity.name)
                  }
                >
                  <Text style={styles.activityIcon}>
                    {activity.icon}
                  </Text>

                  <Text
                    style={[
                      styles.activityText,
                      selected &&
                        styles.activityTextSelected,
                    ]}
                  >
                    {activity.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* TAGS */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Intereses específicos
          </Text>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>
                #Terraza ✕
              </Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>
                #MusicaDirecto ✕
              </Text>
            </View>

            <TouchableOpacity style={styles.addTag}>
              <Text style={styles.addTagText}>
                + Añadir
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* RESTRICTIONS */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Restricciones y Alergias
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {restrictions.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.restrictionCard,
                  item.selected &&
                    styles.restrictionCardSelected,
                ]}
              >
                <Text style={styles.restrictionIcon}>
                  {item.icon}
                </Text>

                <Text
                  style={[
                    styles.restrictionText,
                    item.selected &&
                      styles.restrictionTextSelected,
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* LOCATION */}
        <View style={styles.section}>
          <View style={styles.glassCard}>
            <View style={styles.glassLeft}>
              <View style={styles.iconBox}>
                <Text>📍</Text>
              </View>

              <View>
                <Text style={styles.glassTitle}>
                  Ubicación
                </Text>

                <Text style={styles.glassSubtitle}>
                  Madrid, Centro
                </Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text style={styles.changeText}>
                Cambiar
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dateRow}>
            <View style={styles.smallGlass}>
              <Text style={styles.smallIcon}>
                📅
              </Text>

              <View>
                <Text style={styles.smallLabel}>
                  Fecha
                </Text>

                <Text style={styles.smallValue}>
                  Hoy, 24 Oct
                </Text>
              </View>
            </View>

            <View style={styles.smallGlass}>
              <Text style={styles.smallIcon}>
                ⏰
              </Text>

              <View>
                <Text style={styles.smallLabel}>
                  Hora
                </Text>

                <Text style={styles.smallValue}>
                  21:30
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* BUDGET */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Presupuesto aproximado
          </Text>

          <View style={styles.budgetContainer}>
            {[1, 2, 3].map((budget) => {
              const selected =
                selectedBudget === budget;

              return (
                <TouchableOpacity
                  key={budget}
                  style={[
                    styles.budgetButton,
                    selected &&
                      styles.budgetButtonSelected,
                  ]}
                  onPress={() =>
                    setSelectedBudget(budget)
                  }
                >
                  <Text
                    style={[
                      styles.budgetText,
                      selected &&
                        styles.budgetTextSelected,
                    ]}
                  >
                    {'€'.repeat(budget)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* MAP */}
        <View style={styles.section}>
          <View style={styles.mapContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
              }}
              style={styles.mapImage}
            />

            <View style={styles.mapOverlay} />

            <View style={styles.mapTextContainer}>
              <Text style={styles.mapTitle}>
                Rango de búsqueda
              </Text>

              <Text style={styles.mapSubtitle}>
                5 km a la redonda
              </Text>
            </View>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>
            Crear Sala
          </Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  back: {
    fontSize: 28,
    color: '#6B38D4',
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B38D4',
  },

  notification: {
    fontSize: 22,
  },

  scroll: {
    padding: 20,
  },

  section: {
    marginBottom: 28,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },

  input: {
    backgroundColor: '#F5F3FF',
    borderRadius: 18,
    padding: 18,
    fontSize: 16,
  },

  activitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  activityButton: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginBottom: 14,
  },

  activityButtonSelected: {
    backgroundColor: '#6B38D4',
  },

  activityIcon: {
    fontSize: 34,
    marginBottom: 8,
  },

  activityText: {
    fontWeight: '600',
    color: '#444',
  },

  activityTextSelected: {
    color: 'white',
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tag: {
    backgroundColor: '#E9DDFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },

  tagText: {
    color: '#5516BE',
    fontWeight: '600',
  },

  addTag: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D8C9FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
  },

  addTagText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },

  restrictionCard: {
    width: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
    marginRight: 14,
  },

  restrictionCardSelected: {
    backgroundColor: '#F3E8FF',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },

  restrictionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },

  restrictionText: {
    color: '#555',
    fontWeight: '600',
  },

  restrictionTextSelected: {
    color: '#6B38D4',
  },

  glassCard: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 24,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  glassLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#E9DDFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  glassTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  glassSubtitle: {
    color: '#777',
    marginTop: 4,
  },

  changeText: {
    color: '#6B38D4',
    fontWeight: 'bold',
  },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  smallGlass: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallIcon: {
    fontSize: 24,
    marginRight: 12,
  },

  smallLabel: {
    color: '#777',
    fontSize: 12,
  },

  smallValue: {
    fontWeight: 'bold',
    marginTop: 4,
  },

  budgetContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F3FF',
    borderRadius: 24,
    padding: 8,
  },

  budgetButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 18,
  },

  budgetButtonSelected: {
    backgroundColor: '#6B38D4',
  },

  budgetText: {
    fontSize: 24,
    color: '#555',
    fontWeight: 'bold',
  },

  budgetTextSelected: {
    color: 'white',
  },

  mapContainer: {
    height: 180,
    borderRadius: 30,
    overflow: 'hidden',
  },

  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  mapTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  mapTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  mapSubtitle: {
    color: 'white',
    marginTop: 4,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 20,
  },

  createButton: {
    backgroundColor: '#6B38D4',
    height: 58,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  createButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});