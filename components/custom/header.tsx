import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';

export default function Header() {
  const navigation = useNavigation();

  const openDrawer = () => {
    if ('openDrawer' in navigation) {
      (navigation as any).openDrawer();
    }
  };

  return (
    <View className="w-screen flex-row items-center justify-between bg-white px-5 pb-9 pt-11">
      {/* logo */}
      <View className="flex flex-row items-center justify-center gap-2">
        <Image source={require('../../assets/images/logo.png')} className="h-4 w-4" />
        <Text className="text-sm font-semibold">Wallpaper Studio</Text>
      </View>
      {/* menu */}
      <TouchableOpacity activeOpacity={0.8} onPress={openDrawer}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
