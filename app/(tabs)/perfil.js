import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Header from '../components/Header'; 
import ProfileInfo from '../components/ProfileInfo';
import ProfilePreferences from '../components/ProfilePreferences';
import ProfileHistory from '../components/ProfileHistory';

const MOCK_USER = {
  name: 'Marco Antonio',
  bio: 'Amante de los buenos planes y la gastronomía',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlStKQrT_F4m58Fj1xOwMDXga4CpgYXfYxW_DmehkWbWzA2-7xK7xmP-DxFnpdQXLb99KjK65uWhwyVDYtYEaqteVAUxIJPxVJ9S--1JASbQBEHtWldUTDPovT8TbKw6Fd6F23K2nls46-8NombBuv8uFhF7adx8fX0WemoGWw9D6_ZXtj2ljbuNYCQ-lt8waheK80ukTZlsB92AD_hz0Ruleq_b9gMamCYqrdx5RmpHmzP157z2oq-o9Zh5kK12HxeMf4Xdv3oRs',
  preferences: ['Gastronomía', 'Terrazas', 'Música en vivo', 'Vegano'],
  history: [ ]
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header 
        titulo='Perfil'
        avatarUrl={MOCK_USER.avatarUrl} 
        onNotificationPress={() => console.log('Abrir notificaciones')}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProfileInfo 
          name={MOCK_USER.name} 
          bio={MOCK_USER.bio} 
          avatarUrl={MOCK_USER.avatarUrl}
          onEditAvatar={() => console.log('Editar avatar')}
        />

        <ProfilePreferences 
          preferences={MOCK_USER.preferences} 
          onEdit={() => console.log('Editar preferencias')}
        />

        <ProfileHistory historyItems={MOCK_USER.history} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
});