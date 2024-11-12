import { View, Text, TextInput } from "react-native"

export default function TextField({ label, labelStyle, viewStyle, ...inputProps }
    :{ label?: string, labelStyle: object, viewStyle: object }){
    return(
        <View style={viewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput {...inputProps}/>
        </View>
    )
}