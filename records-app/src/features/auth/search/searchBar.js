import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

const SearchIcon = (props) => {
  return <Icon {...props} name="search-outline" />;
};

export default SearchBar = ({ term, onTermChange, onTermSubmit, onClear }) => {
  const renderClearIcon = (props) => (
    <TouchableWithoutFeedback onPress={onClear}>
      <Icon {...props} name="close-outline" />
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.background}>
      <Input
        style={styles.textInput}
        placeholder="search music"
        autoCapitalize="none"
        size="large"
        autoCorrect={false}
        keyboardAppearance="dark"
        value={term}
        accessoryLeft={SearchIcon}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        accessoryRight={term ? renderClearIcon : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    margin: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
