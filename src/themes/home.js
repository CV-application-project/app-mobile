import { StyleSheet } from "react-native";

const CALENDAR = {
    width: 44,
    alignItems: "center",
    backgroundColor: "#00BFFF",
    marginLeft: 10,
    padding: 6,
    borderRadius: 10,
};
const StyleHome = StyleSheet.create({
    container: {
        backgroundColor: "#00FFFF",
        flex: 1,
        paddingTop: 40,
    },

    userInfo: {
        container: {
            flexDirection: "row",
            flexWrap: "wrap",
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 75,
            borderColor: "green",
            borderWidth: 1,
            margin: 20,
        },
        username: {
            fontSize: 30,
            fontWeight: "bold",
        },
        role: {
            fontSize: 15,
            marginTop: 10,
        },
    },

    calendar: {
        container: {
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
        },
        item: {
            ...CALENDAR,
        },
        currentItem: {
            ...CALENDAR,
            backgroundColor: "#DCDCDC",
            borderColor: "#BDB76B",
            borderWidth: 2
        },
    },

    timeKeeping: {
        container: {
            padding: 12,
            margin: 12,
            marginTop: 20,
            backgroundColor: "#F8F8FF",
            borderRadius: 16,
        },

        title: {
            flexDirection: "row",
            padding: 10,

        }
    },

    action :{
        container:{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 10
        },
        item :{
            width: 160,
            height: 100,
            padding: 12,
            backgroundColor:"#F8F8FF",
            borderRadius: 12,
            marginHorizontal: 10,
            marginVertical: 10
        }
    }
});
export default StyleHome;
