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
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Header from '../components/Header';


export default function InviteScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* header*/}
      <Header titulo='Invitar a Sala'/>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* titulo/msnj */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            ¡Invita a tus amigos para empezar el Planazo!
          </Text>
          <Text style={styles.heroSubtitle}>
            Comparte el código o el enlace para que todos se unan a la sala.
          </Text>
        </View>

        {/* qr  */}
        <View style={styles.qrCardWrapper}>
          <View style={styles.qrShadowBlur} />
          
          <View style={styles.qrCard}>
            <View style={styles.qrFlatContainer}>
              <View style={styles.qrWhiteFrame}>
                <Image
                  alt="QR Code"
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh4j2TpBANuLzT4SBl66OTX22XNUX_DzQRvgstlurBcWAFe5daLmHC2C1LldClxB_jG69TDj8EfB1gnvdsnn2mwRAZU4tEl6BhnSTL4I6SNGjhFdf6KCDDLe3lSXCTGLdsSElyNVY1l2BJh5zmkqWuTBtHIJknLX7VNrnEK5hvLqXsrcPkaOfj-a5wGkl8SyaPn2syk0z9FtACNvcs5bwf5ch1gsqizR1DZk00nBkqJcX1H3YjcWgowmnXz5vPjdFPjGSAu9CIFm_A' }}
                  style={styles.qrImage}
                />
              </View>
            </View>

            {/* info d sala */}
            <View style={styles.roomBadge}>
              <MaterialIcons name="groups" size={18} color="#23005c" />
              <Text style={styles.roomBadgeText}>SALA #2409</Text>
            </View>
          </View>
        </View>

        {/* enlace apps  */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.primaryButton}>
            <MaterialIcons name="link" size={20} color="#ffffff" />
            <Text style={styles.primaryButtonText}>Copiar Enlace</Text>
          </TouchableOpacity>

        </View>

        {/*  amigos sugeridos */}
        <View style={styles.suggestedSection}>
          <View style={styles.suggestedHeader}>
            <Text style={styles.suggestedTitle}>Participantes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllLink}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactsGrid}>
            {/* mockup amigos */}
            <View style={styles.contactItem}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWethn7w3B6COMQS0wssQ_t9DMbGrCxlxVOvumFm8YLR_mDB2fgwBkRtuaxsU3sn_1TGuwVLoAh7jgIhYq9kV5X00TlsRvdxjQwyp5OrWxc0wT-utCb-NNlSKe1nNkoRDF2usZcbhcbo3AqenGtFT98lEqmV8LIFHMEwNWmA2d5mm57AkZWHYoFtx--GxKHw0n_0z40CMYh9iZSG8GoyvKTy5kwP161A2GLXng2jDDymHivFiivH1HzPTRoBFY1iMxBrt38jacNNTo' }}
                  style={styles.contactAvatar}
                />
                <View style={styles.addButton}>
                 <Feather name="user-check" size={12} color="#ffffff" />
                </View>
              </View>
              <Text style={styles.contactName} numberOfLines={1}>Marco</Text>
            </View>

            {/* otro amigo */}
            <View style={styles.contactItem}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVw0A1i31T3Ow_I2HLGCN1UxQ8tSh5UEWUYs_F5DGGS2jdWB891I2RWhtMJONBc8iZzkci3RF06sBibBx3YzMgceHcLu4UytNHIITSLkHfBZqtl5AUv5WghqcW_YmSPujOClZMnFtoEOYwCQplWtyrSco93jgakibsvpfDaOcF4bO0t8otcRHg0abDyXP91vOaxUR7RfujSaOpuHnszncEYkXKUmjLgdQwa4cL5cs8zZ6AuZhTZGs2Ig47svze-mw9zlTmKAvF2Pvu' }}
                  style={styles.contactAvatar}
                />
                <View style={styles.addButton}>
                  <Feather name="user-check" size={12} color="#ffffff" />
                </View>
              </View>
              <Text style={styles.contactName} numberOfLines={1}>Sofía</Text>
            </View>

            {/* Contacto 3: Leo */}
            <View style={styles.contactItem}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrFxz6HESw-Lxc7JxeFJjWJQ0Z_FrTp_msPxDg1AA4gRedhe__fhdp2_GzAnG5Jm8znk9aMXKoO9gVZxM_nwUnbBWBhI3HLlt3el-nPvFxwtRG3cioLY8zYq_pcH3anNgSD0w5ElMsNEJw2HDf5MMDIZxF9q_raCPDvrTzJgnlHh3ZnLkB8IeLcWe8tBZ1wwhbKBnTyMLcH7pD1TxWRihjPZ9_pDV3zRSHjGg5adk3w0jLigi6MHvzavpXFdZ9L-BgQgdh9LL-C5kj' }}
                  style={styles.contactAvatar}
                />
               <View style={styles.addButton}>
                 <Feather name="user-check" size={12} color="#ffffff" />
                </View>
              </View>
              <Text style={styles.contactName} numberOfLines={1}>Leo</Text>
            </View>

            {/* boton buscar */}
            <View style={styles.contactItem}>
              <TouchableOpacity style={styles.searchButtonPlaceholder}>
                <MaterialIcons name="search" size={24} color="#5d5d67" />
              </TouchableOpacity>
              <Text style={styles.contactName} numberOfLines={1}>Buscar</Text>
            </View>
          </View>
           {/* boton votacion */}
        </View>
        <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.navigate('./votacion')}>
           <FontAwesome5 name="poll-h"size={20} color="#6b38d4" />
            <Text style={styles.secondaryButtonText}>Comenzar votacion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => router.navigate('/')}>
             <MaterialIcons name="home"size={20} color="#6b38d4" />
              <Text style={styles.secondaryButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
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
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 110,
    gap: 24,
  },
  heroSection: {
    alignItems: 'center',
    gap: 8,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1c1c',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#494454',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  qrCardWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  qrShadowBlur: {
    position: 'absolute',
    width: '85%',
    height: '95%',
    backgroundColor: 'rgba(139, 92, 246, 0.12)',
    borderRadius: 28,
  },
  qrCard: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 28,
    alignItems: 'center',
    gap: 16,
    width: '100%',
    maxWidth: 320,
    elevation: 4,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.08,
    shadowRadius: 15,
  },
  
  qrFlatContainer: {
    backgroundColor: '#6b38d4', 
    padding: 8,
    borderRadius: 24,
  },
  qrWhiteFrame: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
  },
  qrImage: {
    width: 192,
    height: 192,
  },
  roomBadge: {
    backgroundColor: '#e9ddff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  roomBadgeText: {
    color: '#23005c',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonGroup: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#6b38d4',
    height: 56,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
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
  suggestedSection: {
    gap: 16,
  },
  suggestedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  suggestedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1c1c',
  },
  seeAllLink: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6b38d4',
  },
  contactsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  contactItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  avatarWrapper: {
    position: 'relative',
    width: 56,
    height: 56,
  },
  contactAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#eeeeee',
  },
  addButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#069e4b',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  searchButtonPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e3e1ed',
    borderWidth: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactName: {
    fontSize: 12,
    color: '#494454',
    fontWeight: '500',
    textAlign: 'center',
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