import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

interface CategoriesProps {
  wallpapers: {
    category: string;
    description: string;
    images: {
      id: string;
      url: any;
    }[];
  }[];
}

export function AllCategories({ wallpapers }: CategoriesProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="w-full"
      contentContainerStyle={{ paddingBottom: 20, gap: 20 }}>
      {wallpapers.map((wallpaper) => {
        // if (wallpaper.category !== 'Nature') return null;
        return (
          <TouchableOpacity key={wallpaper.category} activeOpacity={0.8}>
            <View className="relative h-[290px] w-full rounded-3xl">
              <Image
                source={wallpaper.images[0].url}
                className="mb-4 h-full w-full rounded-3xl object-cover"
              />
              <View className="absolute bottom-4 left-6 gap-1">
                <Text className="text-2xl font-semibold text-white">{wallpaper.category}</Text>
                <Text className="text-white">{wallpaper.description}</Text>
                <View
                  style={{ alignSelf: 'flex-start' }}
                  className="rounded-3xl bg-white/20 px-[10px] py-2 backdrop-blur-md">
                  <Text className="text-white">{wallpaper.images.length} wallpapers</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
