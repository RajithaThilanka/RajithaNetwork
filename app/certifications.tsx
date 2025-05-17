import Header from '@/components/Header';
import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

const CertificationsPage: FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#0b132b] dark:bg-[#0b132b]">
      <Header />
      {/* Certifications Section */}
      <View
        id="certifications"
        className="w-full items-center px-4 py-16 bg-[#0b132b] dark:bg-[#0b132b]"
      >
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Certifications
        </Text>
        {/* Placeholder for certifications list */}
        <Text className="text-gray-400 text-lg text-center max-w-2xl">
          List your relevant certifications, especially Azure certifications,
          here.
        </Text>
      </View>
    </ScrollView>
  );
};

export default CertificationsPage; 