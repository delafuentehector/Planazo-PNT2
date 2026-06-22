import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import salas from '../services/salas';

export default function VotacionScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const [planes, setPlanes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [indiceActual, setIndiceActual] = useState(0);

    useEffect(() => {
        salas.obtenerPlanes(id)
            .then(setPlanes)
            .catch(console.error)
            .finally(() => setCargando(false));
    }, []);

    const votar = async (voto) => {
        const plan = planes[indiceActual];
        console.log('Voté', voto, 'al plan:', plan?.titulo);
        try {
            if(voto === 'si'){
                await salas.votarPlan(id, plan._id);
            } 
        }catch {
            alert('Error al votar un plan', error);
        }
        setIndiceActual((prev) => prev + 1);
    };

    if (cargando) {
        return (
            <SafeAreaView style={styles.container}>
                <Header titulo='Votación' />
                <View style={styles.centerState}>
                    <ActivityIndicator size="large" color="#6b38d4" />
                </View>
            </SafeAreaView>
        );
    }

    const terminado = indiceActual >= planes.length;

    if (planes.length === 0 || terminado) {
        return (
            <SafeAreaView style={styles.container}>
                <Header titulo='Votación' />
                <View style={styles.centerState}>
                    <MaterialIcons
                        name={planes.length === 0 ? 'hourglass-empty' : 'check-circle'}
                        size={56}
                        color={planes.length === 0 ? '#94a3b8' : '#6b38d4'}
                    />
                    <Text style={styles.emptyText}>
                        {planes.length === 0
                            ? 'Todavía no hay planes para votar'
                            : '¡Terminaste de votar!'}
                    </Text>
                    {terminado && planes.length > 0 ? (
                        <TouchableOpacity
                            style={styles.resultadosButton}
                            onPress={() => router.navigate('./resultados')}
                        >
                            <Text style={styles.resultadosButtonText}>Ver resultados</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
            </SafeAreaView>
        );
    }

    const plan = planes[indiceActual];

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo='Votación' />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.progreso}>
                    {indiceActual + 1} de {planes.length}
                </Text>

                <View style={styles.cardContainer}>
                    <View style={styles.swipeCard}>
                        <View style={styles.cardBanner}>
                            <MaterialIcons name="place" size={56} color="rgba(255, 255, 255, 0.9)" />
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.tagGroup}>
                                {plan.tipo ? (
                                    <View style={styles.tag}>
                                        <Text style={styles.tagText}>{plan.tipo}</Text>
                                    </View>
                                ) : null}
                                {plan.barrio ? (
                                    <View style={styles.tag}>
                                        <Text style={styles.tagText}>{plan.barrio}</Text>
                                    </View>
                                ) : null}
                            </View>

                            <Text style={styles.cardTitle}>{plan.titulo}</Text>
                            <Text style={styles.cardDescription} numberOfLines={3}>
                                {plan.descripcion}
                            </Text>

                            <View style={styles.infoRow}>
                                <MaterialIcons name="location-on" size={18} color="#6b38d4" />
                                <Text style={styles.infoText}>{plan.direccion}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <MaterialIcons name="schedule" size={18} color="#6b38d4" />
                                <Text style={styles.infoText}>{plan.duracionEstimada}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <MaterialIcons name="payments" size={18} color="#6b38d4" />
                                <Text style={styles.infoText}>{plan.costoEstimado}</Text>
                            </View>
                            <View style={styles.infoRow}>
                                <MaterialIcons name="groups" size={18} color="#6b38d4" />
                                <Text style={styles.infoText}>{plan.aptoPara}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.actionButtonsLayer}>
                        <TouchableOpacity
                            style={[styles.roundButton, styles.dislikeButton]}
                            onPress={() => votar('no')}
                        >
                            <MaterialIcons name="close" size={28} color="#94a3b8" />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.roundButton, styles.infoButton]}>
                            <MaterialIcons name="info" size={24} color="#6b38d4" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.roundButton, styles.likeButton]}
                            onPress={() => votar('si')}
                        >
                            <MaterialIcons name="favorite" size={32} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
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
    resultadosButton: {
        backgroundColor: '#6b38d4',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
        marginTop: 8,
    },
    resultadosButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '700',
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 60,
        alignItems: 'center',
        gap: 16,
    },
    progreso: {
        color: '#6b38d4',
        fontSize: 14,
        fontWeight: '700',
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: 360,
        marginBottom: 48,
    },
    swipeCard: {
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        shadowColor: '#8b5cf6',
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 8,
    },
    cardBanner: {
        height: 120,
        backgroundColor: '#6b38d4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody: {
        padding: 24,
    },
    tagGroup: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    },
    tag: {
        backgroundColor: '#e9ddff',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
    },
    tagText: {
        color: '#5516be',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 15,
        color: '#4b5563',
        marginBottom: 16,
        lineHeight: 22,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
    },
    infoText: {
        flex: 1,
        color: '#374151',
        fontSize: 14,
    },
    actionButtonsLayer: {
        position: 'absolute',
        bottom: -28,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        zIndex: 20,
    },
    roundButton: {
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 5,
    },
    dislikeButton: {
        width: 64,
        height: 64,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    infoButton: {
        width: 48,
        height: 48,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: 1,
        borderColor: '#e9ddff',
    },
    likeButton: {
        width: 64,
        height: 64,
        backgroundColor: '#6b38d4',
        shadowColor: '#6b38d4',
        shadowOpacity: 0.3,
        shadowRadius: 12,
    },
});