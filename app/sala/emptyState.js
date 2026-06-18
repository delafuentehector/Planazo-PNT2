import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WaitingScreen() {
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
                                <View style={styles.textSection}>
                    <Text style={styles.heroTitle}>
                        ¡Todo listo por ahora!
                    </Text>
                    <Text style={styles.heroSubtitle}>
                        Estamos esperando a que tus amigos terminen de elegir para encontrar el match perfecto. ¡Te avisaremos en cuanto haya un resultado!
                    </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
        zIndex: 50,
    },
    headerLogoPlaceholder: {
        fontSize: 24,
        fontWeight: '900',
        color: '#6b38d4',
        letterSpacing: -0.5,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1, // Permite centrar verticalmente el contenido si hay espacio libre
    },
    logoContainer: {
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPulseCircle: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: '#e9ddff',
        alignItems: 'center',
        justifyContent: 'center',
        // Sutil sombra para dar volumen al ícono de espera
        shadowColor: '#6b38d4',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    textSection: {
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 12,
        marginBottom: 40,
    },
    heroTitle: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '800',
        color: '#6b38d4',
        textAlign: 'center',
        letterSpacing: -0.5,
    },
    heroSubtitle: {
        fontSize: 18,
        lineHeight: 28,
        color: '#494454',
        textAlign: 'center',
        fontWeight: '400',
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
        flex: 1,
    },
    navLabel: {
        fontSize: 11,
        color: '#494454',
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
        mx: 8,
    },
    activeNavLabel: {
        fontSize: 11,
        color: '#6b38d4',
        fontWeight: '600',
        marginTop: 2,
    },
});