import Header from '@/components/Header';
import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

const ProjectsPage: FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#0b132b] dark:bg-[#0b132b]">
      <Header />
      {/* Projects Section */}
      <View
        id="projects"
        className="w-full items-center px-4 py-16 bg-[#0b132b] dark:bg-[#0b132b]"
      >
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Projects
        </Text>
        {/* Placeholder for project cards/list */}
        <Text className="text-gray-400 text-lg text-center max-w-2xl">
          Showcase your key projects here with descriptions, technologies used,
          and links to live demos or repositories.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProjectsPage; 