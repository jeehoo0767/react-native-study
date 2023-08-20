import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../components/@core/Button';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/NavigationStackType';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface ITodoList {
  id: number;
  title: string;
  isComplated: boolean;
}

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [editTodoTitle, setEditTodoTitle] = useState(false);
  const [todoTitleValue, setTodoTitleValue] = useState('');

  const onChangeTodoTitleValue = (e: string) => {
    setTodoTitleValue(e);
  };

  const addTodo = () => {
    setEditTodoTitle(true);
  };

  const onPressNewTodo = () => {
    const newList = [
      ...todoList,
      {
        id: todoList[todoList.length - 1]?.id + 1 || 0,
        title: todoTitleValue,
        isComplated: false,
      },
    ];

    setTodoList(newList);
    setEditTodoTitle(false);
    setTodoTitleValue('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(223 230 253)'}}>
      <View style={styles.containerView}>
        <View style={styles.sectionTitleView}>
          <Text style={styles.sectionTitleText}>TodoList - RN</Text>
        </View>
        <ScrollView>
          <View style={styles.listContainer}>
            {todoList.map(item => {
              return (
                <View
                  key={item.id}
                  style={styles.listItem}
                  onTouchStart={() => console.log(`아이템 ID: ${item.id}`)}>
                  <View style={styles.dotStyle}></View>
                  <Text style={styles.listItemText}>{item.title}</Text>
                </View>
              );
            })}
            {editTodoTitle && (
              <>
                <View style={styles.listItem}>
                  <View style={styles.dotStyle}></View>
                  <TextInput
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: 'rgb(152 161 187)',
                      borderRadius: 4,
                      padding: 10,
                    }}
                    value={todoTitleValue}
                    onChangeText={e => onChangeTodoTitleValue(e)}
                  />
                  <Button
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={onPressNewTodo}>
                    <Text style={{color: 'rgb(152 161 187)', fontSize: 16}}>
                      Submit
                    </Text>
                  </Button>
                </View>
              </>
            )}
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Button
              style={{
                width: 180,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgb(159 121 255)',
              }}
              onPress={addTodo}>
              + New Task
            </Button>
            <Button onPress={() => navigation.navigate('About')}>
              Go To About
            </Button>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    padding: 30,
  },
  sectionTitleView: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: 'rgb(159 121 255)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sectionTitleText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: '#fff',
  },

  listContainer: {
    display: 'flex',
    minHeight: 200,
    padding: 15,
    backgroundColor: '#fff',
    position: 'relative',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  listItemText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(152 161 187)',
  },
  dotStyle: {
    borderRadius: 50,
    width: 8,
    height: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgb(152 161 187)',
    borderStyle: 'solid',
  },
});
