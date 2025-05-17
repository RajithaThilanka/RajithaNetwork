/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import { Image } from "expo-image";
import {
  ArrowRight,
  Award,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { FC, useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const IndexPage: FC = () => {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  // Handle screen size changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  }, []);

  const isMobile = dimensions.window.width < 768;

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* Hero Section - Enhanced Professional Look */}
      <View style={styles.section} id="hero">
        <View style={styles.sectionContainer}>
          <View
            style={[styles.heroContent, isMobile ? styles.column : styles.row]}
          >
            <View
              style={[
                styles.heroTextContainer,
                isMobile ? { marginBottom: 24 } : null,
              ]}
            >
              <View style={styles.heroTitle}>
                <Text style={styles.grayText}>Hello, I'm</Text>
                <Text style={styles.mainTitle}>Rajitha Thilanka</Text>
                <Text style={styles.subtitle}>
                  Full Stack Software Engineer
                </Text>
              </View>
              <Text style={styles.description}>
                Expert in .NET Core, React, and React Native, delivering
                enterprise-grade solutions with Azure cloud infrastructure and
                DevOps practices.
              </Text>
              <View style={[styles.flexRow, { gap: 12, marginBottom: 16 }]}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.buttonTextWhite}>My Projects</Text>
                  <ChevronRight
                    color="white"
                    size={16}
                    style={{ marginLeft: 4 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.outlineButton}>
                  <Text style={styles.buttonTextBlue}>Contact</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.flexRow, { gap: 16 }]}>
                <TouchableOpacity style={styles.socialButton}>
                  <Github color="#4f80ff" size={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Linkedin color="#4f80ff" size={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Mail color="#4f80ff" size={18} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.profileImageContainer}>
              <Image
                source={require("../assets/images/profile image.jpg")}
                style={styles.profileImage}
              />
              {/* Decorative element for professional touch */}
              <View style={styles.profileImageRing} />
            </View>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection} id="about">
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.titleLine} />
            <Text style={styles.sectionTitle}>About Me</Text>
          </View>

          <View style={[isMobile ? styles.column : styles.row, { gap: 16 }]}>
            <View
              style={[
                isMobile ? styles.fullWidth : { width: "50%" },
                isMobile ? { marginBottom: 16 } : { paddingRight: 16 },
              ]}
            >
              <Text style={styles.description}>
                I'm a passionate full-stack developer with extensive experience
                building robust web and mobile applications. My technical
                expertise spans across the Microsoft ecosystem, modern
                JavaScript frameworks, and cloud solutions. With a focus on
                clean architecture and scalable solutions, I help businesses
                transform their ideas into powerful digital experiences.
              </Text>
            </View>

            <View
              style={[
                isMobile ? styles.fullWidth : { width: "50%" },
                styles.infoCard,
              ]}
            >
              <View style={styles.infoRow}>
                <View style={styles.infoDot} />
                <Text style={styles.infoLabel}>Experience:</Text>
                <Text style={styles.infoValue}>2+ Years</Text>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.infoDot} />
                <Text style={styles.infoLabel}>Location:</Text>
                <Text style={styles.infoValue}>Remote</Text>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.infoDot} />
                <Text style={styles.infoLabel}>Availability:</Text>
                <Text style={styles.infoValue}>Full-time</Text>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.infoDot} />
                <Text style={styles.infoLabel}>Preferred:</Text>
                <Text style={styles.infoValue}>Remote/Hybrid</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.skillsSection} id="skills">
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.titleLine} />
            <Text style={styles.sectionTitle}>Technical Expertise</Text>
          </View>

          <View style={[isMobile ? styles.column : styles.row, { gap: 16 }]}>
            <View
              style={[
                isMobile ? styles.fullWidth : { width: "33%" },
                isMobile ? { marginBottom: 16 } : null,
              ]}
            >
              <Text style={styles.categoryTitle}>Backend</Text>
              <View style={styles.skillsContainer}>
                <Text style={styles.skillTag}>.NET Core</Text>
                <Text style={styles.skillTag}>C#</Text>
                <Text style={styles.skillTag}>ASP.NET</Text>
                <Text style={styles.skillTag}>REST APIs</Text>
              </View>
            </View>

            <View
              style={[
                isMobile ? styles.fullWidth : { width: "33%" },
                isMobile ? { marginBottom: 16 } : null,
              ]}
            >
              <Text style={styles.categoryTitle}>Frontend</Text>
              <View style={styles.skillsContainer}>
                <Text style={styles.skillTag}>React</Text>
                <Text style={styles.skillTag}>React Native</Text>
                <Text style={styles.skillTag}>TypeScript</Text>
                <Text style={styles.skillTag}>JavaScript</Text>
              </View>
            </View>

            <View style={[isMobile ? styles.fullWidth : { width: "33%" }]}>
              <Text style={styles.categoryTitle}>Cloud & DevOps</Text>
              <View style={styles.skillsContainer}>
                <Text style={styles.skillTag}>Azure</Text>
                <Text style={styles.skillTag}>Azure DevOps</Text>
                <Text style={styles.skillTag}>CI/CD</Text>
                <Text style={styles.skillTag}>Docker</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.projectsSection} id="projects">
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderWithLink}>
            <View style={styles.sectionTitleContainer}>
              <View style={styles.titleLine} />
              <Text style={styles.sectionTitle}>Featured Projects</Text>
            </View>

            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linkButtonText}>View All</Text>
              <ArrowRight color="#4f80ff" size={12} />
            </TouchableOpacity>
          </View>

          <View style={[isMobile ? styles.column : styles.row, { gap: 16 }]}>
            <View
              style={[
                styles.projectCard,
                isMobile ? styles.fullWidth : { width: "50%" },
                isMobile ? { marginBottom: 16 } : null,
              ]}
            >
              <View style={styles.projectImagePlaceholder}>
                <Code color="#4f80ff" size={32} />
              </View>
              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>Enterprise Web Portal</Text>
                <Text style={styles.projectDescription}>
                  A scalable web portal built with .NET Core and React,
                  featuring real-time data analytics and secure user
                  authentication.
                </Text>
                <View style={styles.techTagsContainer}>
                  <Text style={styles.techTag}>.NET Core</Text>
                  <Text style={styles.techTag}>React</Text>
                  <Text style={styles.techTag}>Azure</Text>
                </View>
                <TouchableOpacity style={styles.linkButton}>
                  <Text style={styles.linkButtonText}>View Details</Text>
                  <ExternalLink color="#4f80ff" size={12} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                styles.projectCard,
                isMobile ? styles.fullWidth : { width: "50%" },
              ]}
            >
              <View style={styles.projectImagePlaceholder}>
                <Code color="#4f80ff" size={32} />
              </View>
              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>Mobile Commerce App</Text>
                <Text style={styles.projectDescription}>
                  Cross-platform mobile app developed with React Native for
                  seamless shopping experiences with integrated payment
                  gateways.
                </Text>
                <View style={styles.techTagsContainer}>
                  <Text style={styles.techTag}>React Native</Text>
                  <Text style={styles.techTag}>TypeScript</Text>
                  <Text style={styles.techTag}>Azure DevOps</Text>
                </View>
                <TouchableOpacity style={styles.linkButton}>
                  <Text style={styles.linkButtonText}>View Details</Text>
                  <ExternalLink color="#4f80ff" size={12} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Certifications & Blog Combined Section */}
      <View style={styles.combinedSection}>
        <View style={styles.sectionContainer}>
          {/* Certifications */}
          <View style={{ marginBottom: 24 }}>
            <View style={styles.sectionTitleContainer}>
              <View style={styles.titleLine} />
              <Text style={styles.sectionTitle}>Certifications</Text>
            </View>

            <View style={[isMobile ? styles.column : styles.row, { gap: 12 }]}>
              <View
                style={[
                  styles.certCard,
                  isMobile ? styles.fullWidth : { width: "50%" },
                  isMobile ? { marginBottom: 12 } : null,
                ]}
              >
                <Award color="#4f80ff" size={24} />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.certTitle}>
                    Azure Developer Associate
                  </Text>
                  <Text style={styles.certSubtitle}>Microsoft Certified</Text>
                </View>
              </View>

              <View
                style={[
                  styles.certCard,
                  isMobile ? styles.fullWidth : { width: "50%" },
                ]}
              >
                <Award color="#4f80ff" size={24} />
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.certTitle}>
                    Azure DevOps Engineer Expert
                  </Text>
                  <Text style={styles.certSubtitle}>Microsoft Certified</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Blog */}
          <View>
            <View style={styles.sectionHeaderWithLink}>
              <View style={styles.sectionTitleContainer}>
                <View style={styles.titleLine} />
                <Text style={styles.sectionTitle}>Latest Articles</Text>
              </View>

              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkButtonText}>All Articles</Text>
                <ArrowRight color="#4f80ff" size={12} />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 12 }}>
              <TouchableOpacity style={styles.blogCard}>
                <View style={styles.flexRow}>
                  <View style={styles.blogContent}>
                    <Text style={styles.blogTitle}>
                      Optimizing .NET Core Applications for Azure
                    </Text>
                    <Text style={styles.blogDescription}>
                      Learn the best practices for deploying and scaling .NET
                      Core applications in Azure.
                    </Text>
                    <View style={styles.flexRow}>
                      <Text style={styles.linkButtonText}>Read Article</Text>
                      <ChevronRight color="#4f80ff" size={14} />
                    </View>
                  </View>
                  <View style={styles.blogSidebar}>
                    <Text style={styles.blogTag}>BLOG</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.blogCard}>
                <View style={styles.flexRow}>
                  <View style={styles.blogContent}>
                    <Text style={styles.blogTitle}>
                      React Native Performance Tips
                    </Text>
                    <Text style={styles.blogDescription}>
                      Essential techniques to boost the performance of your
                      React Native applications.
                    </Text>
                    <View style={styles.flexRow}>
                      <Text style={styles.linkButtonText}>Read Article</Text>
                      <ChevronRight color="#4f80ff" size={14} />
                    </View>
                  </View>
                  <View style={styles.blogSidebar}>
                    <Text style={styles.blogTag}>BLOG</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.contactSection} id="contact">
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.titleLine} />
            <Text style={styles.sectionTitle}>Get In Touch</Text>
          </View>

          <View style={styles.contactCard}>
            <Text style={styles.contactText}>
              Let's collaborate to bring your ideas to life. Feel free to reach
              out through any of the channels below.
            </Text>

            <View style={styles.contactButtonsContainer}>
              <TouchableOpacity style={styles.contactButton}>
                <Mail color="#4f80ff" size={16} />
                <Text style={styles.contactButtonText}>
                  rajithat1998@gmail.com
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contactButton}>
                <Linkedin color="#4f80ff" size={16} />
                <Text style={styles.contactButtonText}>LinkedIn Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.contactButton}>
                <Github color="#4f80ff" size={16} />
                <Text style={styles.contactButtonText}>GitHub Portfolio</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} Rajitha Thilanka. All rights reserved.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Define styles properly using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b132b",
  },
  section: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  aboutSection: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(11, 19, 43, 0.8)",
  },
  skillsSection: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(19, 36, 62, 0.6)",
  },
  projectsSection: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(11, 19, 43, 0.8)",
  },
  combinedSection: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(19, 36, 62, 0.6)",
  },
  contactSection: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "rgba(11, 19, 43, 0.8)",
  },
  sectionContainer: {
    maxWidth: 1024,
    marginHorizontal: "auto",
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeaderWithLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleLine: {
    height: 2,
    width: 24,
    backgroundColor: "#4f80ff",
    marginRight: 8,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
  },
  heroContent: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroTextContainer: {
    width: "100%",
    maxWidth: 600,
  },
  heroTitle: {
    borderLeftWidth: 2,
    borderLeftColor: "#4f80ff",
    paddingLeft: 12,
    marginBottom: 16,
  },
  mainTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#4f80ff",
    fontSize: 18,
    fontWeight: "600",
  },
  grayText: {
    color: "#a0aec0",
    fontSize: 14,
  },
  description: {
    color: "#a0aec0",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#4f80ff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#4f80ff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextWhite: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonTextBlue: {
    color: "#4f80ff",
    fontWeight: "600",
    fontSize: 14,
  },
  socialButton: {
    padding: 8,
    backgroundColor: "#1a233b",
    borderRadius: 9999,
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 144,
    height: 144,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#4f80ff",
  },
  profileImageRing: {
    position: "absolute",
    zIndex: -1,
    width: 160,
    height: 160,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "rgba(79, 128, 255, 0.3)",
  },
  infoCard: {
    backgroundColor: "#1a233b",
    padding: 12,
    borderRadius: 6,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoDot: {
    width: 6,
    height: 6,
    backgroundColor: "#4f80ff",
    borderRadius: 3,
    marginRight: 8,
  },
  infoLabel: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    width: 96,
  },
  infoValue: {
    color: "#a0aec0",
    fontSize: 12,
  },
  categoryTitle: {
    color: "#a0aec0",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(79, 128, 255, 0.2)",
    paddingBottom: 4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    backgroundColor: "#1a233b",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    fontSize: 12,
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkButtonText: {
    color: "#4f80ff",
    fontSize: 12,
    fontWeight: "600",
    marginRight: 4,
  },
  projectCard: {
    backgroundColor: "#1a233b",
    borderRadius: 6,
    overflow: "hidden",
  },
  projectImagePlaceholder: {
    height: 112,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
  },
  projectContent: {
    padding: 12,
  },
  projectTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  projectDescription: {
    color: "#a0aec0",
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
  techTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 12,
  },
  techTag: {
    backgroundColor: "#0b132b",
    color: "#a0aec0",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  certCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a233b",
    padding: 12,
    borderRadius: 6,
  },
  certTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  certSubtitle: {
    color: "#a0aec0",
    fontSize: 12,
  },
  blogCard: {
    backgroundColor: "#1a233b",
    borderRadius: 6,
    overflow: "hidden",
  },
  blogContent: {
    flex: 1,
    padding: 12,
  },
  blogTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  blogDescription: {
    color: "#a0aec0",
    fontSize: 12,
    marginBottom: 6,
    lineHeight: 18,
  },
  blogSidebar: {
    width: 64,
    height: "auto",
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
  },
  blogTag: {
    color: "#4f80ff",
    fontSize: 12,
    fontWeight: "bold",
    transform: [{ rotate: "90deg" }],
  },
  contactCard: {
    backgroundColor: "#1a233b",
    padding: 16,
    borderRadius: 6,
  },
  contactText: {
    color: "#a0aec0",
    fontSize: 12,
    marginBottom: 16,
    textAlign: "center",
    maxWidth: 400,
    marginHorizontal: "auto",
  },
  contactButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  contactButton: {
    backgroundColor: "#0b132b",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  contactButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 8,
  },
  footer: {
    width: "100%",
    backgroundColor: "#0b132b",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "rgba(75, 85, 99, 0.3)",
  },
  footerText: {
    color: "#64748b",
    textAlign: "center",
    fontSize: 12,
  },
});

export default IndexPage;
