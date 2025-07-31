import { FlatList, Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from "expo-router";
import { useState } from "react";
import groups from '../../../assets/data/groups.json'

export default function GroupSelector() {
    const [searchValue, setSearchValue] = useState('')
    const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
    return (
        <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign
                    name="close"
                    size={30}
                    color="black"
                    onPress={() => router.back()}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', flex: 1, paddingRight: 30 }}>Post to</Text>
            </View>

            {/* Search Bar */}

            <View style={styles.searchBar}>
                <AntDesign name="search1" size={16} color='gray' />
                <TextInput
                    placeholder="Search for a community"
                    placeholderTextColor={'grey'}
                    style={{ paddingVertical: 10, flex: 1 }}
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
                {searchValue && (
                    <AntDesign
                        name="closecircle"
                        size={15}
                        color='#e4e4e4'
                        onPress={() => setSearchValue('')}
                    />
                )}
            </View>

            {/* <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? "padding" : undefined } style= {{ flex: 1 }}> */}
            {/* <ScrollView showsVerticalScrollIndicator= {false}> */}
            <FlatList
                data={filteredGroups}
                renderItem={({ item }) => (
                    <Pressable style={styles.filteredGroups}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 40, aspectRatio: 1, borderRadius: '50%' }}
                        />
                        <Text style={{ fontWeight: 600 }}>{item.name}</Text>
                    </Pressable>
                )}
            />
            {/* </ScrollView> */}
            {/* </KeyboardAvoidingView> */}



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 5
    },
    filteredGroups: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 20
    }
})