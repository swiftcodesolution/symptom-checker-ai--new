import { StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";
import { useEffect } from "react";

const videoSource = require("../../assets/videobg.mp4");

const VideoBg = ({ children }) => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  useEffect(() => {
    player.play();
    console.log("player:", player);
  }, []);

  return (
    <View style={styles.container}>
      <VideoView
        style={StyleSheet.absoluteFill}
        player={player}
        allowsFullscreen={false}
        allowsPictureInPicture={false}
      />
      <View style={StyleSheet.absoluteFillObject}>{children}</View>
    </View>
  );
};

export default VideoBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
