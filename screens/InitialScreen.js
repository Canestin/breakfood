import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const InitialScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>InitialScreen</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text>Go to Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default InitialScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "orange",
	},
});
