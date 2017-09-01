import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	headingWrapper: {
		justifyContent: 'center',
		paddingTop: 50
	},
	homeHeading: {
		fontSize: 25,
		textAlign: 'center',
		paddingTop: 15,
		paddingBottom: 12		
	},
	errorMessage: {
		marginTop: 12,
		marginBottom: 12,
		textAlign: 'center'
	},
	bookStackImage: {
		height: 103,
		width: 156.6,
		alignSelf: 'center',
	},
	loginButton: {
		backgroundColor: '#7F7FFF',
		marginTop: 12,
		marginBottom: 12,
		height: 25,
		width: 130,
		alignSelf: 'center',
		borderColor: '#00007F',
		borderWidth: 1
	},
	loginButtonText: {
		textAlign: 'center',
		color: 'white'
	},
	outlineButton: {
		backgroundColor: "#FFFFFF",
		marginTop: 12,
		marginBottom: 12,
		height: 25,
		width: 280,
		alignSelf: 'center',
		borderRadius: 4
	},
	outlineButtonText: {
		textAlign: 'center',
		color: '#A5A5FF'
	}
});