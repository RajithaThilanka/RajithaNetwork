import { Link } from "expo-router";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header: FC = () => (
  <View className="w-full flex-row items-center justify-between px-6 py-4 bg-[#0b132b] dark:bg-[#0b132b] rounded-lg">
    <Link href="/" asChild>
      <TouchableOpacity>
        <Text className="text-white text-lg font-bold">Rajitha Thilanka</Text>
      </TouchableOpacity>
    </Link>
    <View className="hidden md:flex flex-row gap-8">
      <Link href="/skills" asChild>
        <TouchableOpacity>
          <Text className="text-gray-400 hover:text-white text-base">
            Skills
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/projects" asChild>
        <TouchableOpacity>
          <Text className="text-gray-400 hover:text-white text-base">
            Projects
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/certifications" asChild>
        <TouchableOpacity>
          <Text className="text-gray-400 hover:text-white text-base">
            Certifications
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/blog" asChild>
        <TouchableOpacity>
          <Text className="text-gray-400 hover:text-white text-base">Blog</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/contact" asChild>
        <TouchableOpacity>
          <Text className="text-gray-400 hover:text-white text-base">
            Contact
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

export default Header;
