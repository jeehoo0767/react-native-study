import React, {useEffect, useState} from 'react';

import {
  Dimensions,
  Platform,
  SafeAreaView,
  SafeAreaViewBase,
  SafeAreaViewComponent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from './src/components/@core/Button';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

interface ITodoList {
  id: number;
  title: string;
  isComplated: boolean;
}

function App(): JSX.Element {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);

  const onPressNewTodo = () => {
    const newList = [
      ...todoList,
      {
        id: todoList[todoList.length - 1]?.id ?? 0,
        title: 'new',
        isComplated: false,
      },
    ];

    setTodoList(newList);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.containerView}>
        <View style={styles.sectionTitleView}>
          <Text style={styles.sectionTitleText}>TodoList - RN</Text>
        </View>
        <ScrollView>
          <View style={styles.listContainer}>
            {todoList.map(item => {
              return (
                <View style={styles.listItem}>
                  <View style={styles.dotStyle}></View>
                  <Text style={styles.listItemText}>{item.title}</Text>
                </View>
              );
            })}
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Button
              style={{
                width: 180,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onPressNewTodo}>
              + New Task
            </Button>
          </View>
        </ScrollView>
      </View>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'rgb(223 230 253)',
  },
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
    padding: 15,
    backgroundColor: '#fff',
    position: 'relative',
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
  buttonStyle: {
    backgroundColor: 'rgb(159 121 255)',
  },
});

export default App;
