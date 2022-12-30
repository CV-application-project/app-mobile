import React from 'react';
import moment from "moment-timezone";
import { StyleHome } from '../../../themes';
import { View, Text } from 'react-native';
const StatusDot = ({ status }) => {

    const CONFIG_STATUS = {
        "check": "#7FFF00",
        "miss": "#8B0000"
    }
    return (
        <View
            style={{
                width: 8, height: 8, backgroundColor: CONFIG_STATUS[status], borderRadius: 4, marginHorizontal: 2
            }}
        />
    )
}
export default function CalendarItem({ date, checkin, checkout }) {

    const isAfter = moment().isAfter(date);
    const isCurrent = moment().diff(date,"days") === 0 && isAfter;
    return (
        <View style={isCurrent ? StyleHome.calendar.currentItem : StyleHome.calendar.item}>
            <Text style={{
                fontWeight: "bold"
            }}>{moment(date).format("ddd")}</Text>
            <Text style={{
                marginBottom: 4
            }}>{moment(date).format("YY")}</Text>
            <View style={{
                flexDirection: "row",
            }}>
                {
                    isAfter && (
                        checkin ? <StatusDot status="check" /> : <StatusDot status="miss" />
                    )
                }
                {
                    isAfter && (
                        checkout ? <StatusDot status="check" /> : <StatusDot status="miss" />
                    )
                }
            </View>
        </View>
    );
}
