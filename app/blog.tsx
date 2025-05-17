import Header from "@/components/Header";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";

const BlogPage: FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#0b132b] dark:bg-[#0b132b]">
      <Header />
      {/* Blog Section */}
      <View
        id="blog"
        className="w-full items-center px-4 py-16 bg-[#0b132b] dark:bg-[#0b132b]"
      >
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Blog
        </Text>
        {/* Placeholder for blog posts */}
        <Text className="text-gray-400 text-lg text-center max-w-2xl">
          Share your thoughts, insights, and experiences here.
        </Text>
      </View>
    </ScrollView>
  );
};

export default BlogPage;
