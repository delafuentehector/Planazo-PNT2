import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Planazo</Text>
        </View>
{/*         <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="settings" size={24} color="#6b38d4" />
        </TouchableOpacity> */}
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarGradientBorder}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlStKQrT_F4m58Fj1xOwMDXga4CpgYXfYxW_DmehkWbWzA2-7xK7xmP-DxFnpdQXLb99KjK65uWhwyVDYtYEaqteVAUxIJPxVJ9S--1JASbQBEHtWldUTDPovT8TbKw6Fd6F23K2nls46-8NombBuv8uFhF7adx8fX0WemoGWw9D6_ZXtj2ljbuNYCQ-lt8waheK80ukTZlsB92AD_hz0Ruleq_b9gMamCYqrdx5RmpHmzP157z2oq-o9Zh5kK12HxeMf4Xdv3oRs' }}
                  style={styles.avatar}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <MaterialIcons name="edit" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Marco Antonio</Text>
            <Text style={styles.userBio}>
              Amante de los buenos planes y la gastronomía
            </Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mis Preferencias</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Editar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagContainer}>
            <View style={styles.tag}><Text style={styles.tagText}>Gastronomía</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Terrazas</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Música en vivo</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Vegano</Text></View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Historial de Planazos</Text>
          
          <View style={styles.historyList}>
            <Pressable style={styles.historyCard}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-OIUhIGnR8jGJChDm_VXHbUmGXcUae7K6k62DCVNohGV_gRr3_fbminJaggsfb2Ow13Z1YSOnyaDq2mdeI1iEbP1uGXn_jrACMLCkcP0G2sa4dCDkpyrGZi-bbkJjUhHe67RHwJycwkSPkvR_yLanRd4iE5ulsQjcskFHwEP_pP90ts_dB5RvDy4TDW5FgEjicBdAnMsnl4AVlb4yB8iX6SKoXO2CcrPCUvfwAIZfNHT5BQfnKwgSjQN7nsq66l-vcd6Ae9C6heo' }}
                style={styles.historyImage}
              />
              <View style={styles.historyInfo}>
                <Text style={styles.historyName} numberOfLines={1}>Terraza El Mirador</Text>
                <Text style={styles.historyMeta}>24 Oct • Madrid</Text>
              </View>
              <View style={[styles.statusIconWrapper, { backgroundColor: 'rgba(0,133,91,0.1)' }]}>
                <MaterialIcons name="check-circle" size={22} color="#00855b" />
              </View>
            </Pressable>

            <Pressable style={styles.historyCard}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ01fkQqQI-bH2jhY6dXGQ-VhiLmbkWyC7ex7omQxreiFXXobBTAWnAZ62__ie3q74_b7Yg41cn7NzxdKdxysY2iQOLig-2jAUWgDARUQKNzZLkDsB4obHD6TB5KkhmL9X7tbROPqwI0OovUoQhHkao7aoCuqB5tFbGBEeyHrZZS5rp8gSp_rBBVVRCuCA85SlqfcLx7_k-1z0otxj5rbTdzALAPbGeOsbmZVPAWV4ntR011sBiYuYuooclYr6EiM7pAq4iKNKGwg' }}
                style={styles.historyImage}
              />
              <View style={styles.historyInfo}>
                <Text style={styles.historyName} numberOfLines={1}>Cena Italiana</Text>
                <Text style={styles.historyMeta}>15 Oct • Barcelona</Text>
              </View>
              <View style={[styles.statusIconWrapper, { backgroundColor: 'rgba(0,133,91,0.1)' }]}>
                <MaterialIcons name="check-circle" size={22} color="#00855b" />
              </View>
            </Pressable>

            <Pressable style={[styles.historyCard, { opacity: 0.6 }]}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZFrH9P2sW7GIIZdYd_EywW34ruGE73RdsdMd76JlutZ_FPVoRD582wVpLettU9HIgAIEcIioDRa9cFzQKAsZfdTHrHUyYWMNVE_-OKKu-kpw7Mn8QEzqFQD8cO9r9HtG-r6iyd5XuCEmknKor3e5sZXsubYgMdnvTbwjft5nbi3_XdoF5vsnj9RwnGAXIoMNxJCDvvxiv3OuaJpHKZsc_kiICWVIn9UraV7lx-8WAJbsrl1saV6qIQFsEJ1gK35r8F2LPDYqmrxA' }}
                style={[styles.historyImage, styles.grayscalePlaceholder]}
              />
              <View style={styles.historyInfo}>
                <Text style={styles.historyName} numberOfLines={1}>Concierto Acústico</Text>
                <Text style={styles.historyMeta}>08 Oct • Valencia</Text>
              </View>
              <View style={[styles.statusIconWrapper, { backgroundColor: '#e3e1ed' }]}>
                <MaterialIcons name="history" size={22} color="#5d5d67" />
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}  onPress={() => router.navigate('../home')}>
          <MaterialIcons name="home" size={24} color="#373737" />
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

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={24} color="#8455ef"/>
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
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(249, 249, 249, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  miniAvatarContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(107, 56, 212, 0.2)',
  },
  miniAvatar: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#6b38d4',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 16,
    gap: 12,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarGradientBorder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    padding: 3,
    shadowColor: '#6b38d4',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
  },
  avatarContainer: {
    flex: 1,
    borderRadius: 60,
    backgroundColor: '#ffffff',
    padding: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 58,
  },
  editButton: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#6b38d4',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#f9f9f9',
  },
  userInfo: {
    alignItems: 'center',
    gap: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1c1c',
  },
  userBio: {
    fontSize: 16,
    color: '#5d5d67',
    textAlign: 'center',
    maxWidth: 280,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f3f3f4',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#6b38d4',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6b38d4',
  },
  statLabel: {
    fontSize: 12,
    color: '#5d5d67',
    fontWeight: '500',
    marginTop: 2,
  },
  sectionContainer: {
    marginVertical: 16,
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1c1c',
  },
  editLink: {
    color: '#6b38d4',
    fontSize: 14,
    fontWeight: '600',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: 'rgba(132, 85, 239, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(132, 85, 239, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#8455ef',
    fontSize: 14,
    fontWeight: '600',
  },
  historyList: {
    gap: 12,
  },
  historyCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    gap: 16,
    shadowColor: '#6b38d4',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  historyImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  grayscalePlaceholder: {
    opacity: 0.5, 
  },
  historyInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  historyName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1c1c',
    marginBottom: 4,
  },
  historyMeta: {
    fontSize: 12,
    color: '#5d5d67',
  },
  statusIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
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