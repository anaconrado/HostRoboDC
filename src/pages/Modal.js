import React, { Component } from 'react';
import { Modal, View, Text, Button } from 'react-native';

class ExampleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalTitle: '',
      modalContent: '',
    };
  }

  setModalVisible(visible, title, content) {
    this.setState({ modalVisible: visible, modalTitle: title, modalContent: content });
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false, '', '')}
        >
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
              {this.state.modalTitle}
            </Text>
            <Text>{this.state.modalContent}</Text>
          </View>
        </Modal>
        <Button
          title={this.props.title1}
          onPress={() =>
            this.setModalVisible(true, 'Modal Title for Button 1', 'Modal content for button 1.')
          }
        />
        <Button
          title={this.props.title2}
          onPress={() =>
            this.setModalVisible(true, 'Modal Title for Button 2', 'Modal content for button 2.')
          }
        />
      </View>
    );
  }
}

export default ExampleModal;
