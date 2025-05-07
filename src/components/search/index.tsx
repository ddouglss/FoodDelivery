import { View, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

export function Search() {
    return (
        <View className="w-full flex-row border border-salte-500 h-14 rounded-full items-center gap-2 px-4
         bg-white rounded-2x1">
            <Feather name="search" size={24} color="#64748b"/>

            <TextInput
            placeholder="Procure sua comida aqui..."
            className="w-full h-full flex-1 bg-transparent"
            />
        </View>
    );
}