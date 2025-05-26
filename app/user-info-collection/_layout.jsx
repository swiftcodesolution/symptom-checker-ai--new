import { Stack } from "expo-router";

const UserInfoCollectionLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default UserInfoCollectionLayout;
