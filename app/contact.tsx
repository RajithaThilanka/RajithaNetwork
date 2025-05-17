import Header from '@/components/Header';
import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

const ContactPage: FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#0b132b] dark:bg-[#0b132b]">
      <Header />
      {/* Contact Section */}
      <View
        id="contact"
        className="w-full items-center px-4 py-16 bg-[#0b132b] dark:bg-[#0b132b]"
      >
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Contact Me
        </Text>
        {/* Placeholder for contact information or form */}
        <Text className="text-gray-400 text-lg text-center max-w-2xl">
          You can reach me via email at [Your Email Address] or connect with me on [Link to LinkedIn/GitHub/etc.].
          Consider adding a contact form here in the future.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ContactPage; 