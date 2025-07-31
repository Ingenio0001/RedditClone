import { View, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link, router } from "expo-router";
import { useState } from "react";

export default function Create() {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const goBack = () => {
        setTitle('')
        setBody('')
        router.back()
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, paddingHorizontal: 10 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="close" size={30} color='black' onPress={goBack} />
                    <Pressable
                        onPress={() => console.log('post button pressed')}
                        style={{ marginLeft: 'auto' }} >
                        <Text style={styles.postText}>Post</Text>
                    </Pressable>
                </View>
            </TouchableWithoutFeedback>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : undefined} style={{ flex: 1 }}>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: 15}}>
                    <Link href={'groupSelector'} asChild>
                        {/* Community Selector */}
                        <Pressable style={styles.communityContainer}>
                            <Text style={styles.rStyles}>r</Text>
                            <Text>Select a community</Text>
                        </Pressable>
                    </Link>



                    {/* Inputs */}
                    <TextInput
                        placeholder="Title"
                        style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 20 }}
                        value={title}
                        onChangeText={setTitle}
                        multiline
                        scrollEnabled={false}
                    />

                    <TextInput
                        placeholder="body text (optional)"
                        value={body}
                        onChangeText={setBody}
                        multiline
                        scrollEnabled={false}
                    />
                </ScrollView>
            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    postText: {
        color: 'white',
        backgroundColor: '#115bca',
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    rStyles: {
        backgroundColor: '#000',
        color: '#fff',
        paddingVertical: 1,
        paddingHorizontal: 5,
        borderRadius: '50%',
        fontWeight: 'bold',
    },
    communityContainer: {
        flexDirection: 'row',
        backgroundColor: '#ededed',
        padding: 10,
        borderRadius: 20,
        gap: 5,
        alignSelf: 'flex-start',
        marginVertical: 10,
    }
})