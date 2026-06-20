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
  Modal,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import Header from '../components/Header';
import salas from '../services/salas';

const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

function createDefaultFechaHora() {
  const date = new Date();
  date.setHours(19, 30, 0, 0);
  return date;
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function formatFecha(date) {
  const dia = date.getDate();
  const mes = MESES[date.getMonth()];
  if (isToday(date)) {
    return `Hoy, ${dia} ${mes}`;
  }
  const diaAbrev = DIAS[date.getDay()];
  return `${diaAbrev}, ${dia} ${mes}`;
}

function formatHora(date) {
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');
  return `${h}:${m}`;
}

function toBackendFecha(date) {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function toBackendHora(date) {
  return formatHora(date);
}

export default function CreateRoomScreen() {
  const [nombreSala, setNombreSala] = useState('');
  const [tipoAct, setTipoAct] = useState('Gastronomía');
  const [presupuesto, setPresupuesto] = useState(2);
  const [restricciones, setRestricciones] = useState([]);
  const [intereses, setIntereses] = useState([]);
  const [nuevoInteres, setNuevoInteres] = useState('');
  const [ubicación, setUbicación] = useState('');
  const [fechaHora, setFechaHora] = useState(createDefaultFechaHora);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const router = useRouter();


const handleAgregarInteres = () => {
      setIntereses([...intereses, nuevoInteres]);
      setNuevoInteres('');
};

const handleEliminarInteres = (tagAEliminar) => {
  setIntereses(intereses.filter(tag => tag !== tagAEliminar));
};

const handleRestriccion = (restriccion) => {
  if(restricciones.includes(restriccion)){
    setRestricciones(restricciones.filter(r => r !== restriccion));
  } else {  
  setRestricciones([...restricciones, restriccion]);
  }
}

  const handlePickerChange = (mode, event, selectedDate, onClose) => {
    if (Platform.OS === 'android') {
      onClose();
      if (event.type === 'dismissed') {
        return;
      }
    }

    if (!selectedDate) {
      return;
    }

    const updated = new Date(fechaHora);

    if (mode === 'date') {
      updated.setFullYear(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
      );
    } else {
      updated.setHours(selectedDate.getHours(), selectedDate.getMinutes(), 0, 0);
    }

    setFechaHora(updated);
  };

  const handleCrearSala = async () => {
    const fecha = toBackendFecha(fechaHora);
    const hora = toBackendHora(fechaHora);

    try{
      if(!nombreSala || !tipoAct || !ubicación || !fecha || !hora || !presupuesto) {
        alert('Por favor, completá todos los campos obligatorios.');
        return;
      }

      console.log('Creando sala con:', { nombreSala, tipoAct, restricciones, intereses, ubicación, fecha, hora, presupuesto });
      const salaData = await salas.crearSala(nombreSala, tipoAct, restricciones, intereses, ubicación, fecha, hora, presupuesto);

      if(salaData) {
        alert('Sala creada con éxito');
        //router.push('./invitarSala');
        router.push({ 
          pathname: '/sala/invitarSala',
          params: { id: salaData?.salaId },
        });
      }  
    }catch(error){
      alert('Error al crear la sala. Intentá de nuevo.');
    }
  }

  const activities = [
    { id: 1, name: 'Gastronomía', icon: '🍽️' },
    { id: 2, name: 'Ocio', icon: '🎬' },
    { id: 3, name: 'Deporte', icon: '🏋️' },
    { id: 4, name: 'Fiesta', icon: '🎉' },
  ];

  const restrictions = [
    { id: 1, name: 'Vegano', icon: '🥗' },
    { id: 2, name: 'Gluten', icon: '🍞'},
    { id: 3, name: 'Lactosa', icon: '🥛' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Header titulo="Nueva Sala" />

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
            value={nombreSala}
            onChangeText={setNombreSala}
          />
        </View>

        {/* ACTIVITIES */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Tipo de actividad
          </Text>

          <View style={styles.activitiesGrid}>
            {activities.map((activity) => {
              const selected = tipoAct === activity.name;

              return (
                <TouchableOpacity
                  key={activity.id}
                  style={[
                    styles.activityButton,
                    selected &&
                      styles.activityButtonSelected,
                  ]}
                  onPress={() =>
                    setTipoAct(activity.name)
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
          </View>

      <View style={styles.tagsContainer}>
          {intereses.map((tag) => (
            <TouchableOpacity 
              key={tag} 
              style={styles.tag}
              onPress={() => handleEliminarInteres(tag)}
          >
            <Text style={styles.tagText}>
              #{tag} ✕
            </Text>
          </TouchableOpacity>
          ))}

        <TextInput
        placeholder="+ Añadir"
        style={styles.addTag}
        placeholderTextColor="#999"
        value={nuevoInteres}
        onChangeText={setNuevoInteres}
        onSubmitEditing={handleAgregarInteres}
      />
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
            {restrictions.map((item) => {
              const selected = restricciones.includes(item.name);
              return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.restrictionCard,
                  selected &&
                  styles.restrictionCardSelected,
                ]}
                onPress={() => handleRestriccion(item.name)}
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
              </TouchableOpacity>
              )}
            )}
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

                <TextInput
                  placeholder="Escribi el nombre del barrio"
                  style={styles.glassSubTitle}
                  placeholderTextColor="#999"
                  value={ubicación}
                  onChangeText={setUbicación}
                />
              </View>
            </View>
          </View>

          <View style={styles.dateRow}>
            <TouchableOpacity
              style={styles.smallGlass}
              onPress={() => setShowDatePicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.smallIcon}>
                📅
              </Text>

              <View>
                <Text style={styles.smallLabel}>
                  Fecha
                </Text>

                <Text style={styles.smallValue}>
                  {formatFecha(fechaHora)}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.smallGlass}
              onPress={() => setShowTimePicker(true)}
              activeOpacity={0.7}
            >
              <Text style={styles.smallIcon}>
                ⏰
              </Text>

              <View>
                <Text style={styles.smallLabel}>
                  Hora
                </Text>

                <Text style={styles.smallValue}>
                  {formatHora(fechaHora)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* BUDGET */}
        <View style={styles.section}>
          <Text style={styles.label}>
            Presupuesto aproximado
          </Text>

          <View style={styles.budgetContainer}>
            {[1, 2, 3].map((budget) => {
              const selected = presupuesto === budget;

              return (
                <TouchableOpacity
                  key={budget}
                  style={[
                    styles.budgetButton,
                    selected &&
                    styles.budgetButtonSelected,
                  ]}
                  onPress={() =>
                    setPresupuesto(budget)
                  }
                >
                  <Text
                    style={[
                      styles.budgetText,
                      selected &&
                      styles.budgetTextSelected,
                    ]}
                  >
                    {'$'.repeat(budget)}
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
        <TouchableOpacity style={styles.createButton} onPress={handleCrearSala}>
          <Text style={styles.createButtonText}>
            Crear Sala
          </Text>
        </TouchableOpacity>
      </View>

      {/* DATE PICKER - iOS */}
      {Platform.OS === 'ios' && showDatePicker && (
        <Modal transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.pickerCard}>
              <Text style={styles.pickerTitle}>Seleccionar fecha</Text>
              <DateTimePicker
                value={fechaHora}
                mode="date"
                display="spinner"
                minimumDate={new Date()}
                onChange={(event, selectedDate) =>
                  handlePickerChange('date', event, selectedDate, () => setShowDatePicker(false))
                }
              />
              <TouchableOpacity
                style={styles.pickerConfirmButton}
                onPress={() => setShowDatePicker(false)}
              >
                <Text style={styles.pickerConfirmText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* TIME PICKER - iOS */}
      {Platform.OS === 'ios' && showTimePicker && (
        <Modal transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.pickerCard}>
              <Text style={styles.pickerTitle}>Seleccionar hora</Text>
              <DateTimePicker
                value={fechaHora}
                mode="time"
                display="spinner"
                onChange={(event, selectedDate) =>
                  handlePickerChange('time', event, selectedDate, () => setShowTimePicker(false))
                }
              />
              <TouchableOpacity
                style={styles.pickerConfirmButton}
                onPress={() => setShowTimePicker(false)}
              >
                <Text style={styles.pickerConfirmText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* DATE PICKER - Android */}
      {Platform.OS === 'android' && showDatePicker && (
        <DateTimePicker
          value={fechaHora}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) =>
            handlePickerChange('date', event, selectedDate, () => setShowDatePicker(false))
          }
        />
      )}

      {/* TIME PICKER - Android */}
      {Platform.OS === 'android' && showTimePicker && (
        <DateTimePicker
          value={fechaHora}
          mode="time"
          display="default"
          onChange={(event, selectedDate) =>
            handlePickerChange('time', event, selectedDate, () => setShowTimePicker(false))
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

    backButton: {
    fontSize: 28,
    color: '#7C3AED',
    marginRight: 12,
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
    fontSize: 20,
    marginBottom: 12,
  },

  glassSubtitle: {
    color: '#777',
    fontSize: 16,
    marginTop: 8,
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  pickerCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    width: '100%',
    maxWidth: 340,
  },

  pickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B38D4',
    textAlign: 'center',
    marginBottom: 8,
  },

  pickerConfirmButton: {
    backgroundColor: '#6B38D4',
    height: 48,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  pickerConfirmText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});