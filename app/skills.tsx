import Header from '@/components/Header';
import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

const SkillsPage: FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#0b132b] dark:bg-[#0b132b]">
      <Header />
      {/* Skills Section */}
      <View
        id="skills"
        className="w-full items-center px-4 py-16 bg-[#0b132b] dark:bg-[#0b132b]"
      >
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Skills
        </Text>
        <View className="flex-row flex-wrap justify-center gap-4 max-w-4xl">
          {/* Example Skill Badges */}
          <Text className="bg-gray-700 text-white px-4 py-2 rounded-full">
            .NET Core
          </Text>
          <Text className="bg-gray-700 text-white px-4 py-2 rounded-full">
            React
          </Text>
          <Text className="bg-gray-700 text-white px-4 py-2 rounded-full">
            React Native
          </Text>
          <Text className="bg-gray-700 text-white px-4 py-2 rounded-full">
            Azure
          </Text>
          <Text className="bg-gray-700 text-white px-4 py-2 rounded-full">
            Azure DevOps
          </Text>
          {/* Add more skills here */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SkillsPage; 