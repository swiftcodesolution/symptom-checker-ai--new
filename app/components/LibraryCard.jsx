import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

const LibraryCard = ({ imageUrl, text, tag, date, shareLink }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.libraryCard, { backgroundColor: theme.secondary }]}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.metadata}>
          <Text style={styles.tag}>{tag}</Text>
          <Text style={[styles.date, { color: theme.text }]}>{date}</Text>
        </View>
      </View>
      <View style={styles.share}>
        <Text style={styles.shareLink}>{shareLink}</Text>
        <Icon
          name="share-social-outline"
          size={20}
          color="#fff"
          style={[styles.shareBtn, { backgroundColor: theme.primary }]}
        />
      </View>
    </View>
  );
};

export default LibraryCard;

const styles = StyleSheet.create({
  libraryCard: { padding: 16, borderRadius: 16 },

  image: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 12,
    marginBottom: 12,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 12,
  },
  text: { color: "#fff", fontSize: 16, width: "60%" },
  metadata: { width: "30%" },
  tag: {
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#D8CFC5",
    color: "#000",
    marginBottom: 5,
  },
  date: { fontSize: 10, textAlign: "right", fontWeight: "700" },

  share: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shareLink: { color: "#077CFF", fontSize: 14, width: "60%" },
  shareBtn: { padding: 6, borderRadius: 6 },
});
