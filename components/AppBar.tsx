import { FC } from 'react';
import { Text, View } from 'react-native';

type AppBarProps = {
  title: string;
};

const AppBar: FC<AppBarProps> = ({ title }) => (
  <View className="w-full h-16 flex-row items-center px-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    <Text className="text-xl font-bold text-gray-900 dark:text-white">{title}</Text>
  </View>
);

export default AppBar; 