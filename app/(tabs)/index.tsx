import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.primario, dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/h2000.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ textAlign: 'center', flex: 1 }}>
          Hospitales <ThemedText type="title" style={{ color: Colors.light.acentos }}>2000</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={[styles.stepContainer, { marginTop: 16 }]}>
        <ThemedText type="subtitle" style={{ textAlign: 'center', flex: 1, color: Colors.light.primario }}>
          Gestión Hospitalaria Eficiente
        </ThemedText>
        <ThemedText style={{ textAlign: 'center', flex: 1 }}>
          Administre médicos, pacientes y fichas médicas de manera sencilla y eficaz.
        </ThemedText>
        <ThemedView style={[styles.stepContainer, { marginTop: 16 }]}>
          <Button title="Reservar Cita" onPress={() => {}} color={Colors.light.primario} />
          <Button title="Ver Citas agendadas" onPress={() => {}} color={Colors.light.primario} />
        </ThemedView>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    top: 0,
    left: 0,
    position: 'absolute',
  },
});
