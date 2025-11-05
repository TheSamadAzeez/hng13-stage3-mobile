import { AllCategories } from '@/components/custom/all-categories';
import { GradientText } from '@/components/custom/gradient-text';
import { wallpapers } from '@/utils/wallpapers';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const filteredWallpapers = wallpapers.slice(0, 4); // Example of restructuring: get first four categories

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gray-50 px-5">
      {/* header */}
      <View className="mb-12 mt-3 gap-2">
        <GradientText className="text-2xl font-medium">Discover Beautiful Wallpapers</GradientText>
        <Text className="text-base leading-[100%] text-[#575757]">
          Discover curated collections of stunning wallpapers. Browse by category, preview in
          full-screen, and set your favorites.
        </Text>
      </View>

      {/* categories */}
      <View className="flex-1">
        <View className="mb-4 flex w-full flex-row items-center justify-between">
          <Text className="text-xl font-medium text-[#000000]">Categories</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push('/categories')}>
            <Text className="text-[#808080]">See All</Text>
          </TouchableOpacity>
        </View>

        <AllCategories wallpapers={filteredWallpapers} />
      </View>
    </SafeAreaView>
  );
}
