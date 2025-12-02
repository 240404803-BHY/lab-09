import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sehirleri Kesfet</Text>
            <Text style={styles.subtitle}>Detaylarini gormek için bir sehir sec:</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Ankara"
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Ankara',
                        rating: 2,
                        description: 'Ankara, Türkiye’nin başkenti olarak siyasi, idari ve kültürel hayatın merkezidir. Düzenli şehir yapısı ve güçlü Cumhuriyet tarihine sahip anıtlarıyla sakin ama karakterli bir atmosfere sahiptir.'
                    })}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Antalya "
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Antalya',
                        rating: 1,
                        description: 'Antalya, turkuaz denizi, Akdeniz iklimi ve doğal güzellikleriyle Türkiye’nin en önemli turizm merkezlerinden biridir. Tarihi Kaleiçi sokakları ve Toros Dağları’nın eteklerindeki manzaralarıyla her mevsim ziyaretçilerini cezbeden bir şehirdir.'
                    })}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Istanbul"
                    color={colors.accent}
                    onPress={() => navigation.navigate('Details', {
                        place: 'Istanbul',
                        rating: 5,
                        description: 'İstanbul, tarihi yarımadası, Boğaz manzarası ve kültürlerin buluştuğu yapısıyla dünyanın en özel metropollerinden biridir. Modern yaşam ile binlerce yıllık mirasın iç içe geçtiği dinamik bir şehirdir.'
                    })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 40,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8
    },
    subtitle: {
        fontSize: 16,
        color: colors.subtitle,
        marginBottom: 20
    },
    buttonContainer: {
        marginVertical: 8
    }
});
