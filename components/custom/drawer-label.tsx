import { View, Text } from 'react-native';

export function DrawerLabel({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <>
      <View className="flex-row items-center gap-2  px-4 py-[10px]">
        {icon}
        <Text>{label}</Text>
      </View>
      <View className="h-[1px] bg-gray-300" />
    </>
  );
}
