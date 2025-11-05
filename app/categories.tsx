import { AllCategories } from '@/components/custom/all-categories';
import { GradientText } from '@/components/custom/gradient-text';
import { wallpapers } from '@/utils/wallpapers';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Categories() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 px-5">
      {/* header */}
      <View className="mb-12 mt-3 gap-2">
        <GradientText className="text-2xl font-medium">Browse Categories</GradientText>
        <Text className="text-base leading-[100%] text-[#575757]">
          Explore our curated collections of stunning wallpapers
        </Text>
      </View>
      <AllCategories wallpapers={wallpapers} />
    </SafeAreaView>
  );
}
