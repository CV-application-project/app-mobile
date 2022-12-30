import React from "react";
import { StyleHome } from "../../../themes";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ActionItem({ name, icon, onPress = () => { }, isPending = false }) {
    return (
        <TouchableOpacity style={{
            ...StyleHome.action.item,
        }}
            onPress={() => { onPress() }}
        >
            <AntDesign name={icon} size={28} color="green" />
            <Text style={{
                fontWeight: "bold",
                fontSize: 15,
                marginTop: 10
            }}>{name}</Text>
        </TouchableOpacity>
    );
}
