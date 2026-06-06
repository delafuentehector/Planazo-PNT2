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

export default function VotacionScreen() {
    const router = useRouter();

    return (
    <SafeAreaView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <View style={styles.miniAvatarContainer}>
                    <Image
                        alt="User Profile"
                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYL-XFwwkRCsAvpOOIcMc0U2TOovssQIcRbH9pSpOnwISBZRpNsu6XZiEu-Fg9fLS-PqHxZukAyjBlzjXo8pitjNGxx-U80vjVweqV-fXCcAscCxc7Cp08wDt3yi64ckiF5TplA_tdlm0J0iB_JtL7D81CwHrrep2TsIWWspwNeeSnDorFs32Rpk5S3-vjncXZ_aSU6so85CfLi-CNKhAMzmvlLIkNc7N6myxytKUcRRg86jL7LxkxOKT0A7dAHuEd-c6Il1cSHaMC' }}
                        style={styles.miniAvatar}
                    />
                </View>
                <Text style={styles.headerTitle}>Planazo</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
                <MaterialIcons name="notifications" size={24} color="#6b38d4" />
            </TouchableOpacity>
        </View>

    <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
    >

            {/* Swipe Card container */}
            <View style={styles.cardContainer}>
                <View style={styles.swipeCard}>
                    <Image
                        alt="Restaurante Atractivo"
                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjqU6V1MeWIxio4Bl9L3dD4k3pHbHU5Kq_1U_yitn3YoH3fFmbSL2XUpdb0G4Mp3QP587S4t9K78FYCseKbqoel99mA2b5wyiqMxWEdo1XMkylSmIB8lKOMWDw1uufIC5KzLndRKaoZgoxVjwwvpQpou-o4-BAfarqsDdfsW0SG3OGkIZeRXRSraXfv3dc1s6H1iocyHU80i62zqzBKDlmBfQBH6h3WaP9E7inwaejhBiUX_KABzT5PmJplamo6c1kq8FSikrxfmSb' }}
                        style={styles.cardImage}
            />
                {/* Card Content Overlay usando Gradiente Visual simulado */}
                <View style={styles.cardGradientOverlay}>
                    <View style={styles.tagGroup}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Gastronomía</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>Gastrobar</Text>
                        </View>
                    </View>

                    {/* ¡Corregido acá! Ahora son componentes nativos <Text> */}
                    <Text style={styles.cardTitle}>Terraza El Mirador</Text>
                    <Text style={styles.cardDescription} numberOfLines={2}>
                        Cena gourmet con las mejores vistas de la ciudad. Perfecto para una cita especial o reencuentro.
                    </Text>

                    <View style={styles.cardFooter}>
                        <View style={styles.priceContainer}>
                            <MaterialIcons name="payments" size={20} color="#e9ddff" />
                            <Text style={styles.priceText}>35€ - 50€</Text>
                            <Text style={styles.priceLabel}>/persona</Text>
                        </View>
                        <View style={styles.ratingBadge}>
                            <MaterialIcons name="star" size={18} color="#facc15" />
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                    </View>
                </View>
            </View>
                    {/* Action Buttons Layer (Botones flotantes superpuestos) */}
                    <View style={styles.actionButtonsLayer}>
                        {/* Dislike Button */}
                        <TouchableOpacity style={[styles.roundButton, styles.dislikeButton]}>
                            <MaterialIcons name="close" size={28} color="#94a3b8" />
                        </TouchableOpacity>

                        {/* Info Button (Center Small) */}
                        <TouchableOpacity style={[styles.roundButton, styles.infoButton]}>
                            <MaterialIcons name="info" size={24} color="#6b38d4" />
                        </TouchableOpacity>

                        {/* Like Button */}
                        <TouchableOpacity style={[styles.roundButton, styles.likeButton]} onPress={() => router.navigate('./resultados')}>
                            <MaterialIcons name="favorite" size={32} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
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
                    <MaterialIcons name="person" size={24} color="#373737" />
                    <Text style={styles.navLabel}>Profile</Text>
                </TouchableOpacity>
            </View>
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
        paddingTop: 16,
        paddingBottom: 140, // Espacio extra para que los botones de acción no se tapen con la navbar
        alignItems: 'center',
        gap: 16,
    },
    aiIndicator: {
        backgroundColor: '#e9ddff',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        shadowColor: '#6b38d4',
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    aiIndicatorText: {
        color: '#5516be',
        fontSize: 12,
        fontWeight: '600',
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: 360,
        aspectRatio: 3 / 4,
        marginBottom: 40, // Margen para dar lugar a los botones inferiores sobresalientes
    },
    matchBadge: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
    },
    matchBadgeText: {
        color: '#6b38d4',
        fontSize: 14,
        fontWeight: '600',
    },
    swipeCard: {
        flex: 1,
        borderRadius: 32,
        overflow: 'hidden',
        backgroundColor: '#e2e2e2',
        shadowColor: '#8b5cf6',
        shadowOpacity: 0.15,
        shadowRadius: 25,
        elevation: 8,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    cardGradientOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 24,
        // Gradiente simulado directo con color opaco/difuminado inferior hacia arriba
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
    },
    tagGroup: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 8,
    },
    tag: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
    },
    tagText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '500',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 16,
        lineHeight: 22,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    priceText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
    },
    priceLabel: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 12,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    ratingText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    actionButtonsLayer: {
        position: 'absolute',
        bottom: -32, // Desplazamiento hacia abajo para morder el borde exterior de la tarjeta
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